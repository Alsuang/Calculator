
const sum = function (num1, num2){
  return num1 + num2 
}
const subtract = function (num1, num2){
  return num1 - num2 
}
const divide = function (num1, num2){
  return num1 / num2 
}
const multiply = function (num1, num2){
  return num1 * num2 
}

function calculator(num1, num2, operate){
  return operate(num1, num2)
}


let numString1 = '';
let numString2 = '';
let operation = '';

function getNumber() {
  let userDigit = $(this).attr("value");
  if (operation !== ''){
    numString2 += userDigit;
    $('.display').attr("value", numString2);
    numString2 = Number(numString2);
    return numString2;

  } else {
  
    numString1 += userDigit;
    $('.display').attr("value", numString1);
    numString1 = Number(numString1);
    return numString1;
  }
  }


function getOperator() {
  let userOperator =$(this).attr("value");
  operation += userOperator;
  return operation;
}


function clearDisplay() {
  $('.display').attr("value", '');
  numString1 = '';
  numString2 = '';
  operation = '';
}
 


$('.equals').on('click', function() {
  if (operation === 'multiply') {
  $('.display').attr("value", multiply(numString1, numString2));
  
    }else if (operation === 'sum'){
  $('.display').attr("value", sum(numString1, numString2))
  
    }else if (operation === 'divide'){
      $('.display').attr("value", divide(numString1, numString2))
    
    }else {
    $('.display').attr("value", subtract(numString1, numString2))
    }
  });




$('.clear').on('click', clearDisplay);
 $('.digit').on('click', getNumber);
 $('.operator').on('click', getOperator);





 
 
 






  



