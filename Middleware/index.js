const express = require("express");
const app = express();

function isOldEnoughMiddleware(req, res, next) {
  const age = req.query.age;
  if (age >= 14) {
    next();
  } else {
    res.json({
      msg: "You cannot ride because you are too small",
    });
  }
}

app.get("/ride1", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You successfully ride  on ride1",
  });
});

app.get("/ride2", isOldEnoughMiddleware, function (req, res) {
  res.json({
    msg: "You successfully ride  on ride2",
  });
});

app.listen(3000);
