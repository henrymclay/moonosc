/// 
// moonosc: a simple RESTful API that sends the phase of the moon on the current day 
// express 
const express = require('express');
const path = require('path');
const app = express();
const https = require('https')
const port = 3001

/*
fetch(url)
.then(res => res.text())
.then(text => JSON.parse(text.slice(1)))
.then(json => console.log(json.pageItems))
*/
//"https://aa.usno.navy.mil/api/moon/phases/date?date=2025-11-5&nump=1"

async function getPhases(url) {
 
}

// gets Naval Observatory dataa
app.get('/', async (req, res) => {
  // variables for API - hardcoded to a known recent full moon for now
  let date = "2025-11-5"
  let phaseNum = "1"
  let getRequest = 'https://aa.usno.navy.mil/api/moon/phases/date?date=' + date + '&nump=' + phaseNum

  //https request to naval observatory API. returns a JSON object with a Phase field, that's what we're interested in. 
  console.log("pFetch ping ");
  //getPhases(getRequest).then(response => res.send(response))

  //(async () => await get_page())()
  await fetch(getRequest).then(response => response.text())
  .then(text => JSON.parse(text))
  .then(json => {
    console.log(json)
    console.log(json.phasedata[0].phase)
    res.send(json.phasedata[0].phase)
  })
  .catch((err) => {
    console.log("Fetch failed", err)
  })
})


// responds with the phase - calculated as a number from 1-28 
// refactor post to be reckoning from last known full moon  
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
  console.log(`Example app listening on port ${port}`)
})



module.exports = app;
