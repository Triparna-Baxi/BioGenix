const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const appointmentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  Test:{
    type:String,
    required:true,
  },
  address:{
    type:String,
    required:true,

  },
  dtd:{
    type:Boolean,
    required:true,

  },
  oid:{
    type:String,
    default: "",
    required:false,

  },
  token:{
    type:String,
    default: "new",
    required:false,


  },
  isPaymentDone:{
    type:Boolean,
    required:false,
    default:false
  }

});


module.exports = {Appointment:mongoose.model('Appointment', appointmentSchema)};
