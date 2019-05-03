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

function evenPositionDigitsCalculate (cardnumber) {
  
  const fifteenDigits = cardnumber.substring(0, 15).split('');

  const transformToNumbers = fifteenDigits.map(Number);
  
  let arrayEvensToSum = [];

  for (num in transformToNumbers) {
    let evensNumPosition = num % 2 !== 0;

    if (evensNumPosition){
      
      let multiplyNumber = transformToNumbers[num];
      arrayEvensToSum.push(multiplyNumber)
    }
  }
  
  let allEvensDigitsSum = arrayEvensToSum.reduce(function (a, b) {
    
    return a + b;
    
  });

  return allEvensDigitsSum;
  
}

function sumAllDigits(cardnumber){
  return oddPositionDigitsCalculate(cardnumber) + evenPositionDigitsCalculate(cardnumber);
}

checkLength('4539983237489397');
checkIfSameNumber('4539983237489397');
sumAllDigits('4539983237489397')

// module.exports.cardValidator = cardValidator;

module.exports.checkLength = checkLength;
module.exports.checkIfSameNumber = checkIfSameNumber;