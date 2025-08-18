const express = require("express");
const app = express();

// Add middleware to parse JSON requests
app.use(express.json());

let users = [
  {
    id: 1,
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  let numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = johnKidneys.length - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({ healthy: isHealthy });
  res.json({
    message: "Kidney added successfully",
    numberOfKidneys: users[0].kidneys.length,
    numberOfHealthyKidneys: users[0].kidneys.filter((kidney) => kidney.healthy)
      .length,
    numberOfUnhealthyKidneys: users[0].kidneys.filter(
      (kidney) => !kidney.healthy
    ).length,
  });
});

app.put("/", function (req, res) {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({
    message: "All kidneys are healthy now",
  });
});

app.listen(3000);
