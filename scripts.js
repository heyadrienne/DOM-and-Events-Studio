// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeOffButton = document.getElementById('takeoff');
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBackground = document.getElementById("shuttleBackground");
    const shuttleHeight = document.getElementById("spaceShuttleHeight");
    const landButton = document.getElementById("landing");
    const abortMissionButton = document.getElementById("missionAbort");

takeOffButton.addEventListener('click', function(){
    const confirmation = confirm("Confirm that the shuttle is ready for takeoff.")
    if(confirmation === true) {
        flightStatus.innerHTML = "Shuttle in flight.";
        shuttleBackground.style.backgroundColor = "blue";
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000


    }
});

landButton.addEventListener('click', function(){
    alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML = "The shuttle has landed."
    shuttleBackground.style.backgroundColor = "green";
    shuttleHeight.innerHTML = 0;
});

abortMissionButton.addEventListener('click', function(){
    const confirmation = confirm("Confirm that you want to abort the mission.");
    if(confirmation === true) {
        flightStatus.innerHTML = "Mission Aborted";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innterHTML = 0;
    }
});





}

window.addEventListener('load', init);