/// 
// moonosc: a simple RESTful API that sends the phase of the moon on the current day 
// express 
var express = require('express');
var path = require('path');
var app = express();
const port = 3000

// responds with the phase - calculated as a number from 1-28 
app.get('/', (req, res) => {
  phase = 0; 
  res.send({phase})
})

// other verbs - should not be needed but implementing as errors for future proofing. eventually there might be something. 
// error - malformed request
app.put('/', (req, res) => {
  var response = "error, malformed request (PUT). this endpoint takes HTTP GET only."
  res.send({response})
})

// error - malformed request
app.post('/', (req, res) => {
  var response = "error, malformed request (POST). this endpoint takes HTTP GET only."
  res.send({response})
})

// error - malformed request
app.delete('/', (req, res) => {
  var response = "error, malformed request (DELETE). this endpoint takes HTTP GET only."
  res.send({response})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



module.exports = app;
