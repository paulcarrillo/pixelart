const colorPicker = document.querySelector('#colorPicker');
const submit = document.querySelector('#submit');
const table = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
	for(let i = 0; i < height; i++) {
    let row = document.createElement('tr');
    row.className = 'row';

    for(let j = 0; j < width; j++) {
      let column = document.createElement('td');
      row.appendChild(column);
    }
    table.appendChild(row);
  }
  
  const td = document.querySelectorAll('#pixelCanvas td');

  td.forEach(function(elem) {
    elem.addEventListener("click", function() {
      this.style.backgroundColor = getColorValue();
    });
  });
}

 // clearGrid function clears the last table with new inputs
function clearGrid() {
  while (table.firstChild) {
      table.removeChild(table.firstChild);
  }
}

function getColorValue() {
  let color = colorPicker.value;
  return color;
}

submit.addEventListener('click', function(e) {
  e.preventDefault();
  const inputHeight = document.getElementById('inputHeight').value;
  const inputWidth = document.getElementById('inputWidth').value;
  clearGrid();
  makeGrid(inputHeight, inputWidth);
});
