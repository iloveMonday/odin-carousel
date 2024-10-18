const slides = [
  "../img/albatross.jpg",
  "../img/clownfish.jpg",
  "../img/jerboa.jpg",
  "../img/okapi.jpg",
  "../img/quokka.jpg",
];

const strip = document.getElementById("strip");
const block = document.getElementById("block");

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
    if (position < slides.length-1){
    position++;}
    else (position = 0);
    moveSlider();
    console.log(position);
}

export function leftButton(){
    if (position == 0){
        position = slides.length-1;}
        else {
            position--;};
    moveSlider();
    console.log(position);
}



export function moveSlider(){
    const root = getComputedStyle(document.documentElement);

    const blockDiv = getComputedStyle(block);
    const blockValue = blockDiv.getPropertyValue('width');
    const blockWidth = parseInt(blockValue.replace('px', ''));

    const imgValue = root.getPropertyValue('--img-width');
    const imgWidth = parseInt(imgValue.replace('px', ''));
    let imgPosition = ((-imgWidth*position)+blockWidth) + "px";

    strip.style.setProperty("left", imgPosition);

    // // console.log("left value is " + blockValue);
    // // console.log("img is " + imgWidth);
    // console.log(imgPosition);; 
}