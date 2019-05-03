// function cardValidator (cardnumber) {

// }

function checkLength (cardnumber) {
  
  return cardnumber.toString().length === 16;
  
}

function checkIfSameNumber (cardnumber) {
  
  const card = cardnumber.substring(0, 15).split('');
  const checkRepeatNumber = card.every(num => num === card[0]);
  if (checkRepeatNumber === true) {

    return false;
  
  } else {

    return true;
  
  }

}

function oddPositionDigitsCalculate (cardnumber) {
  
  const fifteenDigits = cardnumber.substring(0, 15).split('');

  const transformToNumbers = fifteenDigits.map(Number);

  let arrayOddsToSum = [];

  for (num in transformToNumbers) {
    let oddsNumPosition = num % 2 === 0;

    if (oddsNumPosition){
      
      let multiplyNumber = transformToNumbers[num] * 2;

      if(multiplyNumber > 9){
        multiplyNumber = multiplyNumber - 9;
      }
      arrayOddsToSum.push(multiplyNumber)
    }
  }
  
  let allOddsDigitsSum = arrayOddsToSum.reduce(function (a, b) {
    
    return a + b;
    
  });

  return allOddsDigitsSum;
  
}

// function oddsDigitsCalculate (cpfnumber) {
  
//   const fiftyDigits = cardcpfnumber.substring(0, 15).split('');
//   const transformToNumbers = fiftyDigits.map(Number);
  
//   let arrayToSum = [];
  
//   for (num in transformToNumbers) {
    
//     let multiplyNumbers = (transformToNumbers[num]) * (11 - num);
//     arrayToSum.push(multiplyNumbers);
    
//   }
  
//   let allDigitsSum = arrayToSum.reduce(function (a, b) {
    
//     return a + b;
    
//   });
  
//   let module = (allDigitsSum * 10) % 11;
//   return module;
  
// }

// function checkCodesValidate (cpfnumber) {
  
//   let firstNumber = firstCodeValidate(cpfnumber).toString();
//   let secondNumber = secondCodeValidate(cpfnumber).toString();
//   if (firstNumber === cpfnumber.substring(9, 10) || secondNumber === cpfnumber.substring(10, 11)) {
    
//     return true;
    
//   } else {
    
//     return false;
    
//   }
  
// }

// cpfValidator('38089124801');

checkLength('1245789632156478');
checkIfSameNumber('1245789632156478');

// module.exports.cpfValidator = cpfValidator;

module.exports.checkLength = checkLength;
module.exports.checkIfSameNumber = checkIfSameNumber;
// module.exports.checkCodesValidate = checkCodesValidate;