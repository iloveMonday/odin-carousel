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
    // strip.style.setProperty("left", "(-var(--image-width)*" + pos + ") + var(--block-width)");
    createCircles(getPosition());
}





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