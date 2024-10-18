import { moveSlider } from "./DOMstuff";

const slides = [
  "../img/albatross.jpg",
  "../img/clownfish.jpg",
  "../img/jerboa.jpg",
  "../img/okapi.jpg",
  "../img/quokka.jpg",
];

const strip = document.getElementById("strip");
const circleDiv = document.getElementById("circles");

let position = 0;


function createSlides() {
  console.log("creating slides...")
for (let i = 0; i < slides.length; i++) {
  let newslide = document.createElement("img");
  newslide.src = slides[i];
  strip.appendChild(newslide);
}
}

export function createCircles(pos){
  circleDiv.innerHTML=""; 

for (let i = 0; i < slides.length; i++) {
  let newDot = document.createElement("div")
  newDot.innerHTML = "🌑";
  newDot.classList.add("circle");
  if (i == pos){
    newDot.classList.add("selected");
  }
  newDot.setAttribute("data-index", i);
  circleDiv.appendChild(newDot)
}
}

export function loadPage(){
  createSlides();
  createCircles(position);
}


export function rightButton(){
    if (position < slides.length-1){
    position++;}
    else (position = 0);
    moveSlider(position);
    console.log(position);
}

export function leftButton(){
    if (position == 0){
        position = slides.length-1;}
        else {
            position--;};
    moveSlider(position);
    console.log(position);
}

export function getPosition(){
    return position;
}


// export function returnCirclePos(e){
//   e.
// }