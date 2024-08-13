function getRandom(num1) {
  return Math.floor(Math.random() * num1);
}

var randomNumber1 = getRandom(6);
var randomNumber2 = getRandom(6);



//player 1
switch (randomNumber1 + 1) {
  case 1:
    document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
    break;
  case 2:
    document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
    break;
  case 3:
    document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
    break;
  case 4:
    document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
    break;
  case 5:
    document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
    break;
  case 6:
    document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
    break;

  default:
    break;
}

//player 2
switch (randomNumber2 + 1) {
  case 1:
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
    break;
  case 2:
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
    break;
  case 3:
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
    break;
  case 4:
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
    break;
  case 5:
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
    break;
  case 6:
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
    break;

  default:
    break;
}

if(randomNumber1>randomNumber2){
    document.querySelector(".winner").innerHTML="Player 1 Wins";
}else if(randomNumber1<randomNumber2){
    document.querySelector(".winner").innerHTML="Player 2 Wins";
}else{
    document.querySelector(".winner").innerHTML="Draw";
}


document.querySelector(".btn").addEventListener("click",function(){
    window.location.reload();
});



