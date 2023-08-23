"use strict"; 

const randomNumber1= Math.trunc(Math.random()*6 +1);
const randomNumber2= Math.trunc(Math.random()*6 +1);
 console.log(randomNumber1,randomNumber2);
const image1="../html/images/d"+randomNumber1+".jpg";
const image2="../html/images/d"+randomNumber2+".png";
console.log(image2, image1);

document.querySelector("#die1").setAttribute("src", image1);
document.querySelector("#die2").setAttribute("src", image2);
