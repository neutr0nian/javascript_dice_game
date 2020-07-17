let rand1 = Math.floor(Math.random()*6)+1;
let rand2 = Math.floor(Math.random()*6)+1;

let diceImage1 = "dice"+rand1+".png";
let imgSource1 ="images/"+diceImage1;

let diceImage2 = "dice"+rand2+".png";
let imgSource2 ="images/"+diceImage2;

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imgSource1);

let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imgSource2);

let result = document.querySelector("h1");
if (rand1 > rand2) {
  result.innerHTML="Player 1 wins";
} else {
  result.innerHTML="Player 2 wins";
}
