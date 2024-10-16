import './style.css';
import { createSlides, leftButton, rightButton, moveSlider } from './slider';

console.log("oh hello[in the voice]")

createSlides();


let clickEventsModule = (function() {
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    
    
    left.addEventListener("click", leftButton);
    right.addEventListener("click", rightButton);
})();



// TEST SHIT
// const alba = "../img/albatross.jpg"
// const picblock = document.querySelector(".left");
// let pic = document.createElement("img");
// pic.src = alba;
// picblock.appendChild(pic);

// const slides = [
//     '../img/albatross.jpg',
//     '../img/clownfish.jpg',
//     '../img/jerboa.jpg',
//     '../img/okapi.jpg',
//     '../img/quokka.jpg'
// ]

// console.log(slides[2])