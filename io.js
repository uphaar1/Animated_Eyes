// console.log("Uphaar Sharma")

let pupils = document.getElementsByClassName('pupil'); 
console.log(pupils);
let pupilsArr = Array.from(pupils);
// console.log(pupilsArr);
// convert into array


// pupils movements
let pupilStartPoint = -100;
let pupilRange = 200;

// mouse X position
let mouseXStartPoint = 0;
let mouseXEndPoint = window.innerWidth;
let currentXPosition = 0;
let fracXValue = 0;

// mouse y position
let mouseYEndPoint = window.innerHeight;
let currentYPosition = 0;
let fracYValue = 0;

let mouseXRange = mouseXEndPoint-mouseXStartPoint;
const mouseMove = (event) =>{
    // console.log(`x value =  ${event.clientX} & y value = ${event.clientY}`);
    currentXPosition = event.clientX-mouseXStartPoint;
    fracXValue = currentXPosition/ mouseXRange;
    // console.log(fracXValue);

    currentYPosition = event.clientY;
    fracYValue = currentYPosition/ mouseYEndPoint;
    // console.log(fracYValue);

    let pupilsXCurrentPosition = pupilStartPoint + (fracXValue * pupilRange);
    let pupilsYCurrentPosition = pupilStartPoint + (fracYValue * pupilRange);
    pupilsArr.forEach((curPupil)=>{
        curPupil.style.transform = `translate(${pupilsXCurrentPosition}px + ${pupilsYCurrentPosition}px)`;
    })
}
const windowResize = (event) =>{
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint-mouseXStartPoint;
}
window.addEventListener('mousemove',mouseMove);
window.addEventListener('resize', windowResize);