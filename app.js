function sum (num1, num2){

 return num1 + num2 
}
function subtract (num1, num2){
  return num1 - num2 
}
function divide (num1, num2){
  return num1 / num2 
}
function multiply (num1, num2){
  return num1 * num2 
}

function operate (operator, num1, num2){
  return operator(num1, num2)
}


let numString = ''
function pressedDigit() {

let userPressed = $(this).attr("value");
 numString += userPressed;

  $('.display').attr("value", numString);
 
 }
 $('.digit').on('click', pressedDigit);
 
 
 
 
 






  



