import './style.css';
import { loadPage, leftButton, rightButton, getPosition, clickCircle, help  } from './sliderLogic';
import { moveSlider } from './DOMstuff';

console.log("oh hello[in the voice]")

loadPage();


let clickEventsModule = (function() {
    const left = document.getElementById("left");
    const right = document.getElementById("right");
    const circle = document.querySelectorAll(".circle");
    
    
    left.addEventListener("click", leftButton);
    right.addEventListener("click", rightButton);
    
    circle.forEach((e)=>
    e.addEventListener("click", () =>{
        let index = e.dataset.index;
        // clickCircle(index);
        help();
        console.log("hello " + index)
    }))

    // circle.addEventListener("click", (e) =>{
    //     let index = e.dataset.index;
    //     clickCircle(index);
    //     console.log("hello " + index)
    // })

    
})();

