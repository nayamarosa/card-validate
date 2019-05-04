function cardValidator(cardnumber) {
  const hasValidLength = cardnumber.toString().length === 16;
  if (!hasValidLength || isSameNumber(cardnumber) ) {
    return false;
  } else {
    return hasSameDigitValidator(cardnumber);
  }
}

function isSameNumber(cardnumber) {
  const card = cardnumber.substring(0, 15).split('');
  const checkRepeatNumber = card.every(num => num === card[0]);

  return checkRepeatNumber;
}

function digitsSumCalculate(cardnumber) {
  const getDigitsToCalculate = cardnumber.substring(0, 15).split('');
  const transformToNumbers = getDigitsToCalculate.map(Number);
  const arrayToSum = transformToNumbers.map((num, index) => (index % 2 === 0) ? (num * 2) : num);
  const subtractDecimalNumber = arrayToSum.map((num, index) => (num > 9) ? (num - 9) : num);
 
  const allDigitsSum = subtractDecimalNumber.reduce((a, b) => a + b)

  return allDigitsSum;
}

function validateDigitCalculate(cardnumber) {
  const sumResult = digitsSumCalculate(cardnumber);
  const floatNumber = sumResult / 10;
  const roundNumber = Math.ceil(floatNumber) * 10;
  const differenceToValidate = roundNumber - sumResult;
  
  return differenceToValidate;
}

function hasSameDigitValidator(cardnumber) {
  const checkLastDigitValidate = cardnumber.substring(15, 16).split('');
  const transformToNumbers = checkLastDigitValidate.map(Number);
  const isSameDigitValidator = validateDigitCalculate(cardnumber) === transformToNumbers[0]

  return isSameDigitValidator;
}

cardValidator('4539983237489397');
module.exports.cardValidator = cardValidator;
