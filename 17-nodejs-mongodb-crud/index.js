const express = require("express");
const mongoose = require("mongoose");
const { Schema } = mongoose;
const app = express();
const bodyParser = require("body-parser");
const { body, validationResult } = require("express-validator");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://gurban:300793mm@cluster0.qob0oxl.mongodb.net/?retryWrites=true&w=majority",
  { useNewUrlParser: true }
);

//DB TABLE
const productSchema = new Schema({
  name: String,
  price: Number,
  status: Boolean,
});

const Product = mongoose.model("Product", productSchema);

app.post("/products", (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  var product = new Product({
    name: req.body.name,
    price: req.body.price,
    status: true,
  });
  product.save();
  res.send("Success!!");
});

app.get("/products", (req, res) => {
  //GETALL
  Product.find({}, (err, docs) => {
    if (!err) {
      res.json(docs);
    } else {
      res.status(500).json(err);
    }
  });
});

app.listen(3000, () => {
  console.log("Server is running!!");
});
