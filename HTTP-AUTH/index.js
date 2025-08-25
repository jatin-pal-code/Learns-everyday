const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const jwt_secret = "ilovemycat"; // secret key for JWT

const users = [];
app.use(express.json());

// function generateToken() {
//   let options = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//     "G",
//     "H",
//     "I",
//     "J",
//     "K",
//     "L",
//     "M",
//     "N",
//     "O",
//     "P",
//     "Q",
//     "R",
//     "S",
//     "T",
//     "U",
//     "V",
//     "W",
//     "X",
//     "Y",
//     "Z",
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//   ];

//   let token = "";
//   for (let i = 0; i < 32; i++) {
//     // use a simple function here
//     token += options[Math.floor(Math.random() * options.length)];
//   }
//   return token;
// }

app.post("/signup", (req, res) => {
  const { username, password } = req.body;

  users.push({
    username: username,
    password: password,
  });

  res.json({
    message: "you are signed up",
  });
  console.log(users);
});

app.post("/signin", (req, res) => {
  const { username, password } = req.body;
  // check if user exists

  const user = users.find(function (u) {
    if (u.username == username && u.password == password) {
      return true;
    }
    return false;
  });

  if (user) {
    const token = jwt.sign(
      {
        username: username,
      },
      jwt_secret
    );
    user.token = token; // Assign token to user object
    return res.json({
      token: token,
    });
  } else {
    res.status(401).json({
      message: "Invalid credentials",
    });
  }
  console.log(users);
});

app.get("/me", (req, res) => {
  const token = req.headers.token;
  const decodedInformation = jwt.verify(token, jwt_secret);
  const unAuthDecodedInfo = jwt.decode(token);
  const username = decodedInformation.username;

  let foundUser = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].username === username) {
      foundUser = users[i];
    }
  }
  if (foundUser) {
    res.json({
      username: foundUser.username,
    });
  } else {
    res.status(401).json({
      message: "Unauthorized",
    });
  }
});

app.listen(3000, () => {
  console.log("App listening on port 3000!");
});
