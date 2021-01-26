var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomDice  = "images/dice"+randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDice);
var randomNumber2 = Math.floor(Math.random()*6)+1;
var randomDice2  = "images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDice2);
if(randomNumber1>randomNumber2){
    var title = "player 1 wins" ;
}
else if(randomNumber1<randomNumber2){
    var title = "player 2 wins" ; 
}
else {
    var title = "Draw" ;
}
document.querySelector("h1").innerHTML = title;