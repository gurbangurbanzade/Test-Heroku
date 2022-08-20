//Imports
const express = require("express");
const bodyParser = require("body-parser");
const { check, validationResult } = require("express-validator");
const app = express();
const port = process.envPORT || 5000;

// Set Templating Enginge
app.set("view engine", "ejs");

const urlencodedParser = bodyParser.urlencoded({ extended: false });
// Navigation

app.get("", (req, res) => {
  res.render("index");
});

app.get("/register", (req, res) => {
  res.render("register");
});
app.post("/register", urlencodedParser, (req, res) => {
  res.json(req.body);
});
//saas
// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`));
