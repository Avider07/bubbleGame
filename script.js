function makeBubbles()
{
var bubbles=""

for (let i = 0; i < 120; i++) {
    var num=Math.floor(Math.random()*10)
    bubbles+=`<div id="bubble">${num}</div>`
    
}
// fill.innerHTML=bubbles
document.querySelector("#pbtm").innerHTML=bubbles;
}


makeBubbles();
let timerval=60;
let fill=document.querySelector("#timerVal")
fill.textContent=timerval

function setTimerValue(){
    
   let timerInt= setInterval(function ()
    {
        if(timerval>0)
            {
        timerval--
        fill.textContent=timerval
            }
            else{
                clearInterval(timerInt)
            }

    },1000)
    
    
}
setTimerValue()
var hitNum
function hit(){
    let hit=document.querySelector("#getHit")
hitNum=Math.floor(Math.random()*10)
hit.textContent=hitNum
// console.log(hit.textContent)
   
}
hit()
var score=0;
var getScore=document.querySelector("#score")
getScore.textContent=score;

function increaseScore()
{
   score+=10
   getScore.textContent=score
//    console.log( getScore.textContent)
}


    document.querySelector("#pbtm").addEventListener("click",function(dets){
        console.log(dets.target.textContent)
       var hitted=dets.target.textContent
       if(hitNum==hitted)
        {
            increaseScore()
            makeBubbles()
            hit()
        }    
    }   



    )
