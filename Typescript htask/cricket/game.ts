class team{
 team_score=[];
 sum=0;
 max1=[];
 ball1=[];
}
//let team2_score=[];

// let T1.sum2=0;
// let max2=[];
// let ball2=[];

let p1;
let p2;
let player;
let b=0;
let win=0;
let large1=0;
let large2=0;


let score=[];
let wicket=0;
let dT1.sum=0;
let diff=0;

let over=0;
let balls=0;
let x=0;
let i=0;

let T1=new team();
let T2=new team();

 function random(){

  // -------------------------empty statements----------------------
  document.getElementById("d1.1").innerHTML = " ";
  document.getElementById("d1.2").innerHTML = " ";
  document.getElementById("#d2").innerHTML = " ";
  document.getElementById("#d1").innerHTML = " ";

if(wicket>=10){
    document.getElementById("d1.1").innerHTML = " Game over";
    x=1;
    return;
  }

  document.getElementById("player1").innerHTML = wicket+1;
  document.getElementById("ball").innerHTML = balls+1;
  document.getElementById("over").innerHTML = over;


  

  if(over>5){
    document.getElementById("d1.1").innerHTML = " 5 Overs completed";
    document.getElementById("d1.2").innerHTML = "Game Over ";
    x=1;
    return ;
  }

  else if(balls==6){

    document.getElementById("d1.1").innerHTML = "Over completed";
    document.getElementById("d1.2").innerHTML = "Next player plays now";
    balls=0;
    score=[];
    T1.max1.push(dT1.sum);
    dT1.sum=0;
    wicket++;
    over++;
    document.getElementById("wicket").innerHTML = wicket;
    T1.ball1.push(b);

  }
 
 
 
// ----------random Function -------------

 const c=Math.floor(Math.random()*7);
 document.getElementById("d1").innerHTML = c;
 balls++;
 b++;
 
 

 if (c==0){
  	
  document.getElementById("#d1").innerHTML = " Run 0  Player Out";
  document.getElementById("#d2").innerHTML = "Next player plays now";
  console.log("player out");

  balls=0;
  score=[];
  wicket++;
  // ---------pushing for highest score--------------
  T1.ball1.push(b);
  T1.max1.push(dT1.sum);
  dT1.sum=0;
  

  document.getElementById("wicket").innerHTML = wicket;
  
  console.log("wicket");
  console.log(wicket);

  }


 else
 {  	

 // --------------pushing in arrays------------- 
	score.push(c);
  T1.team_score.push(c);

	
// arrow function
// -------Display Score-------------
    const add = (a, b) =>a + b;  
    dT1.sum = score.reduce(add);
    
    document.getElementById("T1.sum1").innerHTML = dT1.sum;
    console.log("player score");
    console.log(dT1.sum);

 // ---------Team Score----------------   
 const tadd = (a,b) =>a + b;
 T1.sum = T1.team_score.reduce(tadd);
 document.getElementById("score1").innerHTML = T1.sum;
 console.log("Team score");
 console.log(T1.sum);
 
  }

  

}

console.log(T1.team_score);
console.log(T1.sum);
console.log(wicket);




	 

function random2(){



  if(x==1){
    document.getElementById("#b1").innerHTML = "Click Play to Start ";
  }
  else
  {
    document.getElementById("#b1").innerHTML = "Team 1 Plays Fisrt";
    return;
  }

// --------------initialising------------------------------ 
if(i==0){
T1.team_score=[];
score=[];
wicket=0;
dT1.sum=0;
over=0;
balls=0;
i++;
b=0;}



  // -------------------------empty statements----------------------
  document.getElementById("b1.1").innerHTML = " ";
  document.getElementById("b1.2").innerHTML = " ";
  document.getElementById("#b2").innerHTML = " ";
  document.getElementById("#b1").innerHTML = " ";

if(wicket>=10){
    document.getElementById("b1.1").innerHTML = " Match over";
    result();
    
    return;
  }

  document.getElementById("player2").innerHTML = wicket+1;
  document.getElementById("ball2").innerHTML = balls+1;
  document.getElementById("over2").innerHTML = over;


  

  if(over>5){
    document.getElementById("b1.1").innerHTML = " 5 Overs completed";
    document.getElementById("b1.2").innerHTML = "Match Over ";
    result();
    
    return ;
  }

  else if(balls==6){

    document.getElementById("b1.1").innerHTML = "Over completed";
    document.getElementById("b1.2").innerHTML = "Next player plays now";
    balls=0;
    score=[];
    max2.push(dT1.sum);
    ball2.push(b);
    dT1.sum=0;
    wicket++;
    over++;
    document.getElementById("wicket2").innerHTML = wicket;

  }
 
 
 
// ----------random Function -------------

 const c=Math.floor(Math.random()*7);
 document.getElementById("b1").innerHTML = c;
 balls++;
 b++;
 
 

 if (c==0){
    
  document.getElementById("#b1").innerHTML = " Run 0  Player Out";
  document.getElementById("#b2").innerHTML = "Next player plays now";
  console.log("player out");

  balls=0;
  score=[];
  wicket++;
  // ---------pushing for highest score--------------
  ball2.push(b);
  max2.push(dT1.sum);
  dT1.sum=0;
  

  document.getElementById("wicket2").innerHTML = wicket;
  
  console.log("wicket2");
  console.log(wicket);

  }


 else
 {    

 // --------------pushing in arrays------------- 
  score.push(c);
  T1.team_score.push(c);

  
// arrow function
// -------Display Score-------------
    const add = (a, b) =>a + b;  
    dT1.sum = score.reduce(add);
    
    document.getElementById("T1.sum2").innerHTML = dT1.sum;
    console.log("player score");
    console.log(dT1.sum);

 // ---------Team Score----------------   
 const tadd = (a,b) =>a + b;
 T1.sum2 = T1.team_score.reduce(tadd);
 document.getElementById("score2").innerHTML = T1.sum2;
 console.log("Team score");
 console.log(T1.sum2);
 
  }

  
  
} 
 
 console.log(score2);



// -----------------end of random 2--------------------
   

function result(){
  diff=T1.sum-T1.sum2;
  diff=Math.abs(diff);


for( let i2=0;i2<10;i2++){
  if(large1<T1.max1[i2]){
    
    
    large1=T1.max1[i2];
    
  }

 
}
for(let j=0;j<10;j++){

  if(large2<max2[j]){
    
    large2=max2[j];
    
  }

}

// ----------------position----------------



p1=T1.max1.indexOf(large1)+1;
p2=max2.indexOf(large2)+1;
console.log("p1");
console.log(p1);
console.log("p2");
console.log(p2);
// ----------------man of the match ------------------
if(large1>large2){
  player=p1;
  localStorage.setItem("high score",large1);
  localStorage.setItem("team","Team 1");


}
else if (large1==large2) {
  if (p1<p2) {
  player=p1;
  localStorage.setItem("high score",large1);
  localStorage.setItem("team","Team 1");

  }

  else
  {player=p2;
  localStorage.setItem("high score",large2);
  localStorage.setItem("team","Team 2");}
}


else
{
  player=p2;
  localStorage.setItem("high score",large2);
  localStorage.setItem("team","Team 2");

}


localStorage.setItem("h player",player);


console.log("player");
console.log(player);
console.log("large1");
console.log(large1);
console.log("large2");
console.log(large2);
// ---------------------------------------------------







if(T1.sum==T1.sum2){
 document.getElementById("win").innerHTML = "Its a draw!!   Reload page"; 
 return ;
} 

 
if(T1.sum>T1.sum2){


win=1;

} 


else
{

win=2;    
}  


// ----------------local storage------------------------
localStorage.setItem("Score T1",T1.max1);
localStorage.setItem("Score T2",max2);
localStorage.setItem("balls T1",T1.ball1);
localStorage.setItem("balls T2",ball2);



localStorage.setItem("Score1",T1.sum);

localStorage.setItem("Score2",T1.sum2);

localStorage.setItem("runs",diff);

if(win==1){
  localStorage.setItem("winner","Team 1");
}
else{
  localStorage.setItem("winner","Team 2");
}


}

// ----------------button------------------------------
 const button1 = document.querySelector('d1');
 const button2 = document.querySelector('d2');
if(button1!=null)
{
 button1.addEventListener('onclick',random);
}
 if(button2!=null)
{
 button2.addEventListener('onclick',random2);
}
// ----------------button------------------------------
 

// -----------------localStorage ask a question to arun sir why local storage doesnt  work here-------
// console.log(T1.sum);
// console.log(T1.sum2);
// console.log(diff);
// localStorage.setItem("Score1",T1.sum);

// localStorage.setItem("Score2",T1.sum2);

// localStorage.setItem("Runs",diff);
// -----------------localStorage----------------------------

// if(win==1){
//   localStorage.setItem("winner","Player 1");
// }

// else{
//   localStorage.setItem("winner","Player 2");
// }
// -----------------localStorage----------------------------


// console.log("score 2");
// localStorage.getItem("Score2");
// console.log("diff");
// localStorage.getItem("runs");
// console.log("win");
// localStorage.getItem("winner");















