const mongoose = require('mongoose');

const feedingSchema = new mongoose.Schema({
  time: Date, // or will it be a number? perhaps minute of the day?
  food: String,
  location: String,
  duckQuantity: Number,
  foodType: String,
  foodInGrams: Number
});

const Feeding = mongoose.model('Feeding', feedingSchema);

module.exports = { Feeding };