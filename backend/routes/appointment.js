const express = require('express');
const {Appointment} = require('../models/Appointment');

const router = require("express").Router();

router.post('/bookAppointment', async (req, res) => {
  try {
    console.log(req.body)
    const { name, email, date,test,address,dtd } = req.body;

    // Create a new appointment object
    const appointment = await new Appointment({
      name:name,
      email:email,
      date:date,
      Test:test.toString(),
      address:address,
      dtd:dtd
    }).save();
    // Save the appointment to the database
    // await appointment.save();

    // Send a success response
    res.status(200).json({ message: 'Appointment booked successfully' });
  } catch (error) {
    console.log(error)
    // Send an error response if there was a problem booking the appointment
    res.status(500).json({ error: error.message });
  }
});
module.exports=router;

