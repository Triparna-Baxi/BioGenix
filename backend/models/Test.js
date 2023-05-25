//Test model
const mongoose = require('mongoose');

const testSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const Test = mongoose.model('Test', testSchema);

module.exports = Test;
