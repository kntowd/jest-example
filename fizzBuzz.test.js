const { fizzBuzz } = require('./fizzBuzz');

test('return FizzBuzz', () => {
  expect(fizzBuzz(15)).toBe('FizzBuzz')
})
