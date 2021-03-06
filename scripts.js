// Create sketch pad 
const sketchpad = document.getElementById("sketchpad");

function makeRows(rows, cols) {
  sketchpad.style.setProperty('--grid-rows', rows);
  sketchpad.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    sketchpad.appendChild(cell).className = "pixel";
  };
};

// Get user input from slider
const slider = document.getElementById("inputSlider");
const sliderDefault = 25;
const output = document.getElementById("gridSize");
output.innerHTML = slider.value + " x " + slider.value; // Display the default slider value

// Create default sketchpad
makeRows(slider.value, slider.value);

// Update the current slider value each time user drags the slider handle
slider.oninput = function() {
  output.innerHTML = this.value + " x " + this.value;
  sketchpad.innerHTML = ""; // clears board before creating new one
  makeRows(this.value, this.value);
}

const pixel = document.querySelector("div");

// Get user input from color picker
const colorDefault = document.getElementById("colorPicker").value;
sketchColor(colorDefault);

colorPicker.oninput = function() {
  const pickedColor = this.value;
  sketchColor(pickedColor)
}

// Drawing Mode Buttons
function sketchColor(color) {
  pixel.addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = color;
    e.target.style.color = "transparent";
    sketchpad.style.backgroundColor = "white";
  });
}

// Creating Rainbow Mode with Random Colors 
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function sketchRainbow() {
  pixel.addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = getRandomColor();
    e.target.style.color = "transparent";
    sketchpad.style.backgroundColor = "white";
  }); 
}

function sketchEraser() {
  pixel.addEventListener("mouseover", function(e) {
    e.target.style.backgroundColor = "white";
    e.target.style.color = "transparent";
  }); 
}

//Reset button to clear the sketchpad
const resetButton = document.getElementById("reset");

function reset() {
  resetButton.addEventListener("click", function(e) {
    sketchpad.innerHTML = "";  
    makeRows(sliderDefault,sliderDefault)
    document.getElementById('inputSlider').value = sliderDefault; // Display the default slider value
    output.innerHTML = sliderDefault + " x " + sliderDefault; // Display the default slider value
  }); 
}