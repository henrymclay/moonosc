/// //// //// //// //// //// //// //// //// //// //// //// //// ////
// moonosc: a simple RESTful API that sends the phase of the moon on the current day 
// express 
// Primary function is to return the phase of the moon when it receives a GET request (e.g. via curl).
// This is currently done via a call to the Naval Observatory API 
// // ex: curl "https://aa.usno.navy.mil/api/moon/phases/date?date=2025-11-5&nump=1"
/*
// example response: {
  "apiversion": "4.0.1",
  "day": 5,
  "month": 11,
  "numphases": 1,
  "phasedata": [
    {
      "day": 5,
      "month": 11,
      "phase": "Full Moon",  // << this is what we're interested in 
      "time": "13:19",
      "year": 2025
    }
  ],
  "year": 2025
}
*/
// This app then responds to the GET by stripping the extraneous data (we only want the phase of the moon)
// returns are strings of the phase, to be interpreted by a front end (or just viewed in terminal)

const express = require('express');
const path = require('path');
const app = express();
const port = 3001 // factor into cmd opts

// GET '/' - the bread and butter route. Makes call to usno API. 
app.get('/', async (req, res) => {
  // variables for API - hardcoded to a known recent full moon for now
  var dateTime = new Date() // we want YYYY-MM-DD, which slicing ISO format gets
  let phaseNum = "1" 
  let getRequest = 'https://aa.usno.navy.mil/api/moon/phases/date?date=' + dateTime.toISOString().slice(0,10) + '&nump=' + phaseNum
  // fetch + callbacks but this can also be done with the https library
  await fetch(getRequest).then(response => response.text())
  .then(text => JSON.parse(text))
  .then(json => {
    console.log('responding: ' + json.phasedata[0].phase) // log response 
    res.send(json.phasedata[0].phase) // send response
  })
  .catch((err) => {
    console.log("Failed to connect to API", err) 
  })
})

// TODO: calculate based on last known full moon (or ask user to supply via POST) 
// error - malformed request
app.post('/', (req, res) => {
  var response = "error, malformed request (POST). this endpoint takes HTTP GET only."
  res.send({response})
})

// other verbs - should not be needed but implementing as errors for future proofing. eventually there might be something. 
// error - malformed request
app.put('/', (req, res) => {
  var response = "error, malformed request (PUT). this endpoint takes HTTP GET only."
  res.send({response})
})

// error - malformed request
app.delete('/', (req, res) => {
  var response = "error, malformed request (DELETE). this endpoint takes HTTP GET only."
  res.send({response})
})

app.listen(port, () => {
  console.log(`The Moon Rules #1 (running on) ${port}`)
})

module.exports = app;
