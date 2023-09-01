let pixels = 32;
let container = document.querySelector("#container");
let color = "black";
let clearBtn = document.querySelector("#reset");
let grid = document.querySelector("#grid");
let newDiv = document.querySelectorAll(".newdiv");
let colorBtn = document.querySelectorAll("#color");
let eraserBtn = document.querySelector("#eraser");
let rainbowBtn = document.querySelector("#rainbow");
let pixelsBtn = document.querySelectorAll("#pixels");

let rainbowMode = false;

function createDivs() {
  for (let i = 0; i < pixels; i++) {
    const div = document.createElement("div");
    div.classList.add("newdiv");
    container.appendChild(div);
    console.log(i);
    for (let j = 0; j < pixels; j++) {
      let cellSize = 600 / pixels / 2;
      const divRow = document.createElement("div");
      divRow.classList.add("newdiv");
      divRow.style.cssText = `padding: ${cellSize}px; background: white`;
      div.appendChild(divRow);
      divRow.addEventListener("mouseover", paint);
    }
  }
}

function paint(e) {
  if (rainbowMode === true) {
    e.target.style.backgroundColor = rainbow();
  } else {
    e.target.style.backgroundColor = color;
  }
}

function clear() {
  rainbowMode = false;
  container.remove();
  container = document.createElement("div");
  container.setAttribute("id", "container");
  grid.appendChild(container);
  color = "black";
  createDivs();
}
function changeColor(event) {
  rainbowMode = false;
  let choice = event.target.innerText.toLowerCase();
  color = choice;
}
function eraser() {
  rainbowMode = false;
  color = "white";
}

function rainbow() {
  rainbowMode = true;
  let ran1 = Math.floor(Math.random() * 256);
  let ran2 = Math.floor(Math.random() * 256);
  let ran3 = Math.floor(Math.random() * 256);
  color = `rgb(${ran1}, ${ran2}, ${ran3})`;
  return color;
}

function changePixels(event) {
  rainbowMode = false;
  let choice = event.target.innerText.substring(0, 2);
  pixels = choice;
  clear();
  console.log(choice);
}
clearBtn.addEventListener("click", clear);
eraserBtn.addEventListener("click", eraser);
rainbowBtn.addEventListener("click", rainbow);
pixelsBtn.forEach((button) => {
  button.addEventListener("click", changePixels);
});
colorBtn.forEach((button) => {
  button.addEventListener("click", changeColor);
});

createDivs();
console.log(rainbowMode);
