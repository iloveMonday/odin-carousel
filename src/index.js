import './style.css';
import { loadPage, leftButton, rightButton } from './sliderLogic';

console.log("oh hello[in the voice]")

loadPage();

let clickEventsModule = (function() {
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    
    
    left.addEventListener("click", leftButton);
    right.addEventListener("click", rightButton);
})();