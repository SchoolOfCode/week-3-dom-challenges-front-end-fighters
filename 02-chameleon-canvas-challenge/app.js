/*
Learning Objectives:
  1. Understand and utilize DOM input events.
  2. Manipulate the style properties of DOM elements.
  3. React to changes in input fields dynamically.

Brief:
You're presented with a canvas and a color picker. Your task is to implement the functionality to change the background color of the canvas based on the color selected in the color picker.

Expected Outcomes:
  1. When a color is selected using the color picker, the canvas should instantly reflect that color.
  2. The canvas should always display the current color selected in the color picker.
*/

// Place your plan and solution below!
//Grab the colour picker
const colourPicker = document.getElementById("colorPicker");
//Grab the canvas
const canvas = document.getElementById("canvas");
//When changing the colour on the colour picker
function changeColour() {
  canvas.style.backgroundColor = colourPicker.value;
} 
//Change the canvas to that columnRuleColor: 
colourPicker.addEventListener("input", changeColour);
