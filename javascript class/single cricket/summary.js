var p1_score=0;
var p2_score=0;
var runs=0;
var win;




p1_score=localStorage.getItem("Score1");
p2_score=localStorage.getItem("Score2");
runs=localStorage.getItem("Runs");
win=localStorage.getItem("winner");

console.log(p1_score);

console.log(p2_score);

console.log(runs);

console.log(win);
// values are printed in console

// Uncaught TypeError: Cannot set property 'innerHTML' of null
// solution put script tag at end of body
document.getElementById("score1").innerHTML=p1_score;
document.getElementById("score2").innerHTML=p2_score;
document.getElementById("win").innerHTML=win;
document.getElementById("runs").innerHTML=runs;
