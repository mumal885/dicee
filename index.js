var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImagesSource = "Images/" + randomDiceImage;
var Image1 = document.querySelector("img")[0];
Image1.setAttribute("src", randomImagesSource);