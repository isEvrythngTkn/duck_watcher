const mongoose = require('mongoose');

const feedingSchema = new mongoose.Schema({
  time: { type: Date, required: true }, // or will it be a number? perhaps minute of the day?
  food: { type: String, required: true },
  location: { type: String, required: true },
  duckQuantity: { type: Number, required: true },
  foodType: { type: String, required: true },
  foodInGrams: { type: Number, required: true }
});

const Feeding = mongoose.model('Feeding', feedingSchema);

module.exports = { Feeding };