let seconds = 0;
let timerElement = document.getElementById("timer");
let startButton = document.getElementById("start-button");
let intervalId = null;

startButton.addEventListener("click", () =>{
    if (intervalId === null){
        intervaId = setInterval(() =>{
            seconds++;
            let hrs = String(Math.floor(seconds / 3600)).padStart(2,"0");
            let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
            let secs = String(seconds % 60).padStart(2, "0");
            
            timerElement.textContent = `${hrs}:${mins}:${secs}`;
        }, 1000);
    }
})