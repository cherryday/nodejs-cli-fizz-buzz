const MIN_NUMBER = 1
const MAX_NUMBER = 100

function validateNumber(number) {
  if (!Number.isInteger(number) || number < MIN_NUMBER || number > MAX_NUMBER) {
    return false
  }

  return true
}

function makeMove(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz!'
  } else if (number % 3 === 0) {
    return 'Fizz!'
  } else if (number % 5 === 0) {
    return 'Buzz!'
  }
  return ''
}

module.exports = { MIN_NUMBER, MAX_NUMBER, validateNumber, makeMove }
