// jQuery start function $ //

$(document).ready(function() {
  var color = $("#colorPicker").val();
  var submitBtn = $("#submitBtn");
  var pixelCanvas = $("#pixelCanvas");
  var row = $(".row");
  var column = $(".column");

  var mouseDown = false;

  // When size is submitted by the user, call makeGrid()
  function makeGrid(height, width) {
    for(var i = 0; i < height; i++) {
      var tableRow = $("<tr class='row'></tr>");
        for(var  j = 0; j < width; j++) {
          tableRow.append("<td class='column'></td>");
        }
        pixelCanvas.append(tableRow);
    }
  }

  function removeGrid() {
    $("tr").remove();
  }

  //Taking both of the inputs for width and height to create the grid
  $(submitBtn).on("click", function(evt) {
    evt.preventDefault();
    removeGrid();
    var inputHeight = $("#inputHeight").val();
    var inputWidth = $("#inputWidth").val();
    makeGrid(inputHeight, inputWidth);
  });

  $("#colorPicker").on("change", function() {
    color = $("#colorPicker").val();
  });

  $(pixelCanvas).on("mousedown", function() {
    mouseDown = true;
  });


  $(pixelCanvas).on("click", "td", function() {
    var background = $(this).css("background-color");
    var empty = !background || background === "rgb(255, 255, 255)" || background === "#ffffff";
    if(empty) {
      $(this).css("background-color", color);
    } else {
      $(this).removeAttr("style");
    }
  });

  $(pixelCanvas).on("mouseup", function() {
    mouseDown = false;
  });

  $(pixelCanvas).on("mousemove", "td", function(evt) {
    evt.preventDefault();
    if(mouseDown) {
      $(this).attr("style", `background-color: ${color}`);
      }
    });
  });
