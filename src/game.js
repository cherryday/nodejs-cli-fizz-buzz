export const MIN_NUMBER = 0
export const MAX_NUMBER = 100

export function validateNumber(number) {
  if (!Number.isInteger(number) || number < MIN_NUMBER || number > MAX_NUMBER) {
    return false
  }

  return true
}

export function makeMove(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'FizzBuzz!'
  } else if (number % 3 === 0) {
    return 'Fizz!'
  } else if (number % 5 === 0) {
    return 'Buzz!'
  }
}
