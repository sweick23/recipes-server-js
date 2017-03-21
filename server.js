
const express = require('express');
const router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');


const {Recipes} = require('./models');

const jsonParser = bodyParser.json();
const app = express();

// log the http layer
app.use(morgan('common'));


// adding the Recipes
Recipes.create('Chocolate Milk', ['Cocaoa', 'Milk', 'Sugar']);
Recipes.create('Lemon Pepper Chicken w/ rice', ['Chicken', 'Lemon Pepper Seasoning', 'Rice']);
Recipes.create('Apple Pie al amode', ['Apple pie', 'Vanilla Ice Cream']);


app.get('/recipes', (req, res) => {
  res.json(Recipes.get());
});

app.listen(process.env.PORT || 8080, () => {
  console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});
