const slides = [
  "../img/albatross.jpg",
  "../img/clownfish.jpg",
  "../img/jerboa.jpg",
  "../img/okapi.jpg",
  "../img/quokka.jpg",
];

const strip = document.getElementById("strip");

export function createSlides() {
    console.log("creating slides...")
  for (let i = 0; i < slides.length; i++) {
    let newslide = document.createElement("img");
    newslide.src = slides[i];
    strip.appendChild(newslide);
  }
}

let position = 0;

export function rightButton(){
    console.log("righto");
    if (position < slides.length-1){
    position++;}
    else (position = 0);
    console.log(position);
}

export function leftButton(){
    console.log("leftly");
    if (position == 0){
        position = slides.length-1;}
        else {
            position--;};
    console.log(position);
}
