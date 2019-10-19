

// Session and Break Time
    // Session Time
upSession = document.getElementById("upSession");
upSession.addEventListener("click", upSessionFunction);
downSession = document.getElementById("downSession");
downSession.addEventListener("click", downSessionFunction);
let sessionMinutes = 25; // put 25

function upSessionFunction(){
    if(sessionMinutes<60){
        sessionMinutes++;
    }
    document.getElementById("sTime").innerHTML = sessionMinutes + ":00";
    document.getElementById("time").innerHTML = sessionMinutes + ":00";
    timeleft = (sessionMinutes*60)-61;
}
function downSessionFunction(){
    if(sessionMinutes>5){ // put 5 minimum
        sessionMinutes--;
    }
    document.getElementById("sTime").innerHTML = sessionMinutes + ":00";
    document.getElementById("time").innerHTML = sessionMinutes + ":00";
    timeleft = (sessionMinutes*60)-61;
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
    if(breakMinutes>2){
        breakMinutes--;
    }
    document.getElementById("bTime").innerHTML = breakMinutes + ":00";
}

//Logic
let timeStatus = 0; // 0 is Time, 1 is Break



//Play
var timeleft = 1439; // 25 minutes default - 1439
let play = document.getElementById("play");
play.addEventListener("click", timeCountdown);


function timeCountdown(){
    upSession.removeEventListener("click", upSessionFunction);
    downSession.removeEventListener("click", downSessionFunction);
    upBreak.removeEventListener("click", upBreakFunction);
    downBreak.removeEventListener("click", downBreakFunction);
    play.removeEventListener("click", timeCountdown);
    downTimer = setInterval(function(){
    document.getElementById("time").innerHTML = Math.floor(timeleft/60) + ":" + Math.floor(timeleft%60);
    timeleft--;


    if(timeleft <= 0){
        clearInterval(downTimer);
            if(timeStatus == 0){
                document.getElementById("time").innerHTML = "Start Break";
                timeleft = (breakMinutes*60)-1;
                timeStatusBreak();
            } else {
                document.getElementById("time").innerHTML = "Start Time";
                timeleft = (sessionMinutes*60)-1;
                timeStatusOn();
            }
        }

}

, 1000);
}

function timeStatusBreak(){
    document.getElementById("time").style.color = "red";
    document.getElementById("sessionText").innerHTML = "BREAK";
    document.getElementById("sessionText").style.color = "red";
    timeStatus = 1;
    timeCountdown();
}

function timeStatusOn(){
    document.getElementById("time").style.color = "black";
    document.getElementById("sessionText").innerHTML = "TIME";
    document.getElementById("sessionText").style.color = "black";
    timeStatus = 0;
    timeCountdown();
}







//Stop
stop = document.getElementById("stop");
stop.addEventListener("click", stopTimer);

function stopTimer(){
clearInterval(downTimer);
document.getElementById("sTime").innerHTML = sessionMinutes + ":00";
    document.getElementById("time").innerHTML = sessionMinutes + ":00";
    timeleft = (sessionMinutes*60)-61;
    play.addEventListener("click", timeCountdown);
}

//Pause
pause = document.getElementById("pause");
pause.addEventListener("click", pauseTimer);

function pauseTimer(){
clearInterval(downTimer);
document.getElementById("time").innerHTML = Math.round(timeleft/60) + ":" + Math.round((timeleft%60)+1);
play.addEventListener("click", timeCountdown);
}

//Replay
replay = document.getElementById("replay");
replay.addEventListener("click", replayTimer);

function replayTimer(){
clearInterval(downTimer);
document.getElementById("sTime").innerHTML = sessionMinutes + ":00";
document.getElementById("time").innerHTML = sessionMinutes + ":00";
timeleft = (sessionMinutes*60)-61;
timeCountdown();
}



/*
    timeleft = 10;
    document.getElementById("time").innerHTML = Math.round(timeleft/60) + ":" + Math.round(timeleft%60);
    timeStatus = 1;
    timeCountdown();

   if (timeleft <= 0 && timeStatus == 1){
        clearInterval(downTimer);
        document.getElementById("time").style.color = "black"
        document.getElementById("sessionText").innerHTML = "TIME"
        document.getElementById("sessionText").style.color = "black"
        document.getElementById("time").innerHTML = Math.round(timeleft/60) + ":" + Math.round(timeleft%60);
        timeleft = 10;
        timeStatus = 0;
        timeCountdown();
   } */

