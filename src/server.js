const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const users = [];

app.post("/api/register", (req, res) => {
  const { username, password } = req.body;
  const newUser = { username, password };
  users.push(newUser);
  res.json({ success: true, message: "Registration successful" });
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res
      .status(401)
      .json({ success: false, message: "Invalid username or password" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
