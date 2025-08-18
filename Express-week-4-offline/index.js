const express = require("express");
const app = express();

const users = [
  {
    name: "john",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.use(express.json());

app.get("/", function (req, res) {
  const johnKidneys = users[0].kidneys;
  const numberOfKidneys = johnKidneys.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidneys.length; i++) {
    if (johnKidneys[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.send({
    numberOfKidneys: numberOfKidneys,
    numberOfHealthyKidneys: numberOfHealthyKidneys,
    numberOfUnhealthyKidneys: numberOfUnhealthyKidneys,
  });
});

app.post("/add-kidney", function (req, res) {
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({ healthy: isHealthy == true });
  res.send("Kidney added");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
