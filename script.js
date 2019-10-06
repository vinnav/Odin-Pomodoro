

// Session and Break Time
    // Session Time
upSession = document.getElementById("upSession");
upSession.addEventListener("click", upSessionFunction);
downSession = document.getElementById("downSession");
downSession.addEventListener("click", downSessionFunction);
let sessionMinutes = 25;

function upSessionFunction(){
    if(sessionMinutes<60){
        sessionMinutes++;
    }
    document.getElementById("sTime").innerHTML = sessionMinutes + ":00";
    document.getElementById("time").innerHTML = sessionMinutes + ":00";
}
function downSessionFunction(){
    if(sessionMinutes>0){
        sessionMinutes--;
    }
    document.getElementById("sTime").innerHTML = sessionMinutes + ":00";
    document.getElementById("time").innerHTML = sessionMinutes + ":00";
}
    // Break Time
unBreak = document.getElementById("upBreak");
upBreak.addEventListener("click", upBreakFunction);
downBreak = document.getElementById("downBreak");
downBreak.addEventListener("click", downBreakFunction);
breakMinutes = 5;
function upBreakFunction(){
    if(breakMinutes<60){
        breakMinutes++;
    }
    document.getElementById("bTime").innerHTML = breakMinutes + ":00";
}
function downBreakFunction(){
    if(breakMinutes>0){
        breakMinutes--;
    }
    document.getElementById("bTime").innerHTML = breakMinutes + ":00";
}

//other function



//Play
var timeleft = 1439; // 25 minutes default - 1439
play = document.getElementById("play");
play.addEventListener("click", timeCountdown);

function timeCountdown(){
    timeleft = (sessionMinutes*60)-61;
var downloadTimer = setInterval(function(){
  document.getElementById("time").innerHTML = Math.round(timeleft/60) + ":" + Math.round(timeleft%60);
  timeleft -= 1;
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("time").innerHTML = "Finished"
  }
}, 1000);
}