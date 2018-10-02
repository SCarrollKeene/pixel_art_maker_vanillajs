// Define variables
const sizePicker = document.querySelector('#sizePicker');
const submit = document.querySelector('submit');
const pixelCanvas = document.querySelector('#pixelCanvas');

// color picker
const colorPicker = document.querySelector('#colorPicker');
pixelCanvas.addEventListener('click', function(e) {
  
  let selectColor = colorPicker.value;
  e.target.style.backgroundColor = selectColor;
});

// Create grid on submit click
sizePicker.addEventListener('submit', function(e) {
	e.preventDefault();
  
  // When size is submitted by user, call makeGrid function
  	makeGrid();
});

// makeGrid function
function makeGrid(){
  // will be used in grid creation based on user input for grid h x w
	let height = document.querySelector('#inputHeight').value;
  	let width = document.querySelector('#inputWidth').value;
  
  // clears the grid and starts fresh anytime user clicks submit
  clearGrid();
  
// Adds rows & columns to create grid canvas
  for (var i = 0; i < width; i++) {
  	let gridRow = document.createElement('tr');   
    	pixelCanvas.appendChild(gridRow);    
    	for (var j = 0; j < height; j++) {
    		let gridCol = document.createElement('td');
     		 gridRow.appendChild(gridCol);
    }
  }
};

// Clear the grid/canvas by removing first child element
function clearGrid(){
	while (pixelCanvas.firstChild) {
    	pixelCanvas.removeChild(pixelCanvas.firstChild);
    }
}