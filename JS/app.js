// UI elements
const screen = document.querySelector('.output-values')
const calcButtons = document.querySelectorAll('.calculator-button')


// APP values
let number = '0';
let mathResult = 0;
let operator = null;

calcButtons.forEach(function(calcButton){
  calcButton.addEventListener('click', function(e){
   separateInput(e.target.innerText)
   screen.innerText = number;
  })
})

function separateInput(value){
  if(isNaN(parseFloat(value))){
    handleSymbol(value)
  }else{
    handleNumber(value)
  }
}

function handleNumber(value){
  switch(value){
    case '0':
      if(number === '0'){
        number = '0'
      }else{
        handleNormalInput(value)
      }
    
    break;

    default:
      handleNormalInput(value)
  }
}

function handleNormalInput(value){
  if(number.length <= 16){
    number += value;
    if(number.charAt(0) === '0' && number.charAt(1) !== '.' ){
      number = number.substring(1)
    }
  }
}

function handleSymbol(value){
  switch(value){
    case 'c':
      number = '0'
    break;
    case '⬅':
      if(number.length === 1){
        number = '0'
      }
      else if(number.length <= 16){
        number = number.substring(0, number.length-1)
      }
    break;
    case '.':
      if(number.includes('.')){
        return
      }else{
        handleNormalInput(value)
      }
    case '=':
      if(operator === null){
        return
      }else{
        performOperation(parseFloat(number))
        operator === null;
        number = mathResult;
        mathResult = 0;
        
      } 
      
    break;

    default:
      handleOperations(value)
  }
}

function handleOperations(value){
  let floatNumber = parseFloat(number)
  if(mathResult === 0){
    mathResult = floatNumber
  }else{
    performOperation(floatNumber) 
  }
  number = '0'
  operator = value
  
}

function performOperation(floatNumber){
  if(operator === '+'){
    mathResult += floatNumber; 
  }
  else if(operator === '-'){
    mathResult -= floatNumber;
  }
  else if(operator === 'x'){
    mathResult *= floatNumber; 
  }
  else{
    mathResult /= floatNumber;  
  }
 
}