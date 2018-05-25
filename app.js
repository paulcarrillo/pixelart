// Select color input
const colorPicker = document.querySelector('#colorPicker');

// Select button input
const submit = document.querySelector('#submit');

// The table where table will be out-putted
const table = document.querySelector('#pixelCanvas');

// When size is submitted by the user, call makeGrid()
function makeGrid(height, width) {
	for(let i = 0; i < height; i++) {
     let row = document.createElement('tr');
     row.className = 'row';
     for(let j = 0; j < width; j++) {
       let column = document.createElement('td');
    /*   column.className = 'column'; */
       row.appendChild(column);
     }
     table.appendChild(row);
   }
}

 // clearGrid function clears the last table with new inputs
function clearGrid() {
  while (table.firstChild) {
      table.removeChild(table.firstChild);
  }
}

submit.addEventListener('click', function(e) {
  e.preventDefault();
  const inputHeight = document.getElementById('inputHeight').value;
  const inputWidth = document.getElementById('inputWidth').value;
  clearGrid();
  makeGrid(inputHeight, inputWidth);
})

colorPicker.addEventListener('click', function() {
   let color = colorPicker.value;
   console.log(color);
})

table.addEventListener('click', function(e) {
  e.preventDefault();
  // Selecting each indivudual box
  let box = document.querySelectorAll('td');
    box.forEach((boxs) => {
      boxs.classList.add('column');
      console.log(boxs);

      let test = boxs.classList.contains('column');
      console.log(test);

  });



  /* box.style.backgroundColor = `${colorPicker.value}`; */
})
