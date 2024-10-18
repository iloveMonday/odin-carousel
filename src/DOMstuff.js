import { createCircles, getPosition } from "./sliderLogic";

export function moveSlider(pos){
    const root = getComputedStyle(document.documentElement);
    const block = document.getElementById("block");

    const blockDiv = getComputedStyle(block);
    const blockValue = blockDiv.getPropertyValue('width');
    const blockWidth = parseInt(blockValue.replace('px', ''));

    const imgValue = root.getPropertyValue('--img-width');
    const imgWidth = parseInt(imgValue.replace('px', ''));
    let imgPosition = ((-imgWidth*pos)+blockWidth) + "px";

    strip.style.setProperty("left", imgPosition);
    createCircles(getPosition());

    // // console.log("left value is " + blockValue);
    // // console.log("img is " + imgWidth);
    // console.log(imgPosition);; 
}

// export funtion clickCircle(){
//     createCircles();
    
// }


// export function clickCircle(index, pos){
//     index = 




//     let removeButton = document.querySelectorAll(".remove-button");
//   removeButton.forEach((e) =>


//     e.addEventListener("click", () =>{
//       let index = e.dataset.index;
//       myLibrary.splice(index, 1);
//       displayBooks();
//     }));
// }