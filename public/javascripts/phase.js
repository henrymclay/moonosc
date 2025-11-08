// phase(mode="post")
// funcction to determine moon phase 
// three modes: 
// first default gets postion from astronomy API
// second calculates it via system time, location data (optional) 
// third calculates it from user input? time from last full moon? this is last resort if internet dies 
// returns moon phase as an integer from 0 - 27, with each one representing a phase:
// 
// //// *****************************************
// //// * 0 = new moon 
// //// * 1 - 6 = waxing crescent
// //// * 7 = half moon (waxing)
// //// * 8 - 13 = waxing gibbous
// //// * 14 = full moon 
// //// * 15 - 20 = waning gibbous 
// //// * 21 = half moon (waning) 
// //// * 22 - 27 = waning crescent 
// //// *****************************************


let moonPhase = 0
let calcMode = 0
let currentTime = 0
let currentLocation = ""
let timeSinceLastFullMoon = 0


function phase() {

    return moonPhase 
}
