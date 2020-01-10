let p1_score=0;
let p2_score=0;
let runs=0;
let win;

let team;
let player=0;
let hscore=0;
let max1=[];
let max2=[];
let ball1=[];
let ball2=[];



max1=localStorage.getItem("Score T1");
max2=localStorage.getItem("Score T2");
ball1=localStorage.getItem("balls T1");
ball2=localStorage.getItem("balls T2");

max1=max1.split(',').map(function(item){
	return parseInt(item,10);
});

max2=max2.split(',').map(function(item){
	return parseInt(item,10);
});

ball1=ball1.split(',').map(function(item){
	return parseInt(item,10);
});

ball2=ball2.split(',').map(function(item){
	return parseInt(item,10);
});







p1_score=localStorage.getItem("Score1");
p2_score=localStorage.getItem("Score2");
runs=localStorage.getItem("runs");
win=localStorage.getItem("winner");


team=localStorage.getItem("team");
player=localStorage.getItem("h player");
hscore=localStorage.getItem("high score");

console.log(p1_score);

console.log(p2_score);

console.log(runs);

console.log(win);

console.log(team);

console.log(player);

console.log(hscore);
// values are printed in console

// Uncaught TypeError: Cannot set property 'innerHTML' of null
// solution put script tag at end of body
document.getElementById("score1").innerHTML=p1_score;
document.getElementById("score2").innerHTML=p2_score;
document.getElementById("win").innerHTML=win;
document.getElementById("runs").innerHTML=runs;

document.getElementById("Team").innerHTML=team;
document.getElementById("playerm").innerHTML=player;
document.getElementById("highscore").innerHTML=hscore;


// -------------player values------------------------
for(let i=1;i<=max1.length;i++){
	document.getElementById("x"+i).innerHTML="player "+i+"....................."+max1[i-1]+"  ("+ball1[i-1]+")";
	document.getElementById("y"+i).innerHTML="player "+i+"....................."+max2[i-1]+"  ("+ball2[i-1]+")";

}
// -----------------------------------------------------
