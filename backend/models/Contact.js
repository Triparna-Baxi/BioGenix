// create a schema for contacts
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  });
  
  // create a model for contacts
  const Contact = mongoose.model("Contact", contactSchema);
  
  
module.exports = Contact;
  