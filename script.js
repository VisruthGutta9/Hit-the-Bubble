var timer = 45;
var score = 0;
var hitVal = 0;

function increaseScore(){
    score += 10;
    document.querySelector('#scoreval').textContent = score;
}
function getNewHit(){
    hitVal = Math.floor(Math.random()*10);
    document.querySelector('#hitval').textContent = hitVal;
}
function makeBubble(){
var clutter = "";
for (i=1; i<=133; i++){
    var ranNum = Math.floor(Math.random()*10);
   clutter += `<div class="bubble">${ranNum}</div>`;
}
document.querySelector(".body").innerHTML = clutter;
}
function runTimer (){
    var timerInterval = setInterval(function(){
        if( timer>0){
        timer--;
        document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(timerInterval);
            document.querySelector('.body').innerHTML = `<h2>Game Over</h2>`;
        }
    },1000);
}

document.querySelector('.body').addEventListener("click", function(dets){
    var clickFunciton = Number(dets.target.textContent);
    if(clickFunciton === hitVal){
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

getNewHit();
runTimer();
makeBubble();