import game from '../src/game'

describe('game', () => {
  it.each([
    {number: -1, expected: false},
    {number: 0, expected: false},
    {number: 101, expected: false},
    {number: 'not a number', expected: false},
    {number: 50.5, expected: false},
    {number: 1, expected: true},
    {number: 50, expected: true},
    {number: 100, expected: true},
  ])('should validate number', ({ number, expected }) => {
    expect(game.validateNumber(number)).toBe(expected);
  });

  it.each([
    {number: 1, expected: ''},
    {number: 3, expected: 'Fizz!'},
    {number: 5, expected: 'Buzz!'},
    {number: 15, expected: 'FizzBuzz!'},
  ])('should return string', ({ number, expected }) => {
    expect(game.makeMove(number)).toBe(expected);
  });
})
