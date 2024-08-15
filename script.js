//Image Hover Text 
function showText(text) {
    document.getElementById("text").innerHTML=text;
}

function hide() {
    document.getElementById("text").innerHTML=""; 
}

//Timer Stuff
let seconds = 0;
let timer = document.getElementById("time"); 
function updateTimer(){
  seconds ++;
  document.getElementById("time").textContent = seconds;
}

setInterval(updateTimer, 1000); 



