 

var score=[];
var score2=[];
var p=0;
var p2=0;
var diff=0;
var sum=0;
var sum2=0;
var win=0;


 function random(){
 
 if(p==1){
  document.getElementById("d1").innerHTML = "Game over";
  document.getElementById("d2").innerHTML = "Player 2 plays now";
  return;
 }
 


 const c=Math.floor(Math.random()*7);
 document.getElementById("d1").innerHTML = c;
 
 if (c==0){
  	
  document.getElementById("d1").innerHTML = "Player Out";
  
  console.log("player out");
  p++;
   }


 else
 {  	
	score.push(c);
	
// arrow function
    const add = (a, b) =>a + b;  
     sum = score.reduce(add);
    console.log("sum");
    console.log(sum);
  }

}

console.log(score);


	 

function random2(){
 document.getElementById("d2").innerHTML = "Player 1 plays now";

 
 if(p==1){
  document.getElementById("d2").innerHTML = "Start game";
 }

 else{
  return;
 }

 if(p2==1){

  result();
  return;
 }

 c=Math.floor(Math.random()*7);
 
 document.getElementById("d2").innerHTML = c;

 if (c==0){
    
  
  document.getElementById("d2").innerHTML = "Player Out";
  console.log("player out");
     p2++; }


 else
 {    
  score2.push(c);
  

    const add2 = (a, b) =>a + b;
     sum2 = score2.reduce(add2);
    console.log("sum");
    console.log(sum2);
  }

} 
 
 console.log(score2);




   

function result(){




  console.log(sum);
  console.log(sum2);

  if(sum==sum2){
 document.getElementById("d3").innerHTML = "Restart game"; 
 return ;
} 


document.getElementById("d2").innerHTML = "Game over";
  diff=sum-sum2;
  diff=Math.abs(diff);



 
if(sum>sum2){

document.getElementById("d3").innerHTML = "Player 1 wins";
document.getElementById("d4").innerHTML = "Score ";
document.getElementById("d5").innerHTML = sum;
document.getElementById("d6").innerHTML = "Wins by runs :";
document.getElementById("d7").innerHTML = diff;
win=1;

} 


else
{
document.getElementById("d3").innerHTML = "Player 2 wins";
document.getElementById("d4").innerHTML = "Score";
document.getElementById("d5").innerHTML = sum2;
document.getElementById("d6").innerHTML = "Wins by runs :";
document.getElementById("d7").innerHTML = diff;
win=2;    
}  

localStorage.setItem("Score1",sum);

localStorage.setItem("Score2",sum2);

localStorage.setItem("Runs",diff);

if(win==1){
  localStorage.setItem("winner","Player 1");
}
else{
  localStorage.setItem("winner","Player 2");
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
// console.log(sum);
// console.log(sum2);
// console.log(diff);
// localStorage.setItem("Score1",sum);

// localStorage.setItem("Score2",sum2);

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















