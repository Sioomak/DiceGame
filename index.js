var randomNumber1 = Math.floor(Math.random()* 6) + 1; 

var randDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "images/"+randDiceImage;

var image1 = document.querySelectorAll("img")[0];


image1.setAttribute("src", randomImageSource);


//image2.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random()*6) +1 ;

var randomDiceImg2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/"+randomDiceImg2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);


var title = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {

  title.innerHTML = "😻 Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {

  title.innerHTML = "😸 Player 2 Wins!";
}

else {
  title.innerHTML = "😾 Draw!"
}

















