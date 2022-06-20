const readline = require('readline')
const game = require('./game')

let rl = null

function start() {
  console.log('Welcome to Fizz Buzz!')
  console.log('Submit a number and get an answer!')

  if (!rl) {
    rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.on('line', lineHandler)
    rl.on('close', closeHandler)
  }
}

function lineHandler(input) {
  const number = Number(input)
  const isValid = game.validateNumber(number)

  if (!isValid) {
    console.log(`Answer must be an integer between ${game.MIN_NUMBER} and ${game.MAX_NUMBER}!`)
    return
  }

  console.log('Number:', number)

  const str = game.makeMove(number)

  if (str) {
    console.log(str)
  }
}

function closeHandler() {
  console.log('Goodbye!')
}

module.exports = { start }
