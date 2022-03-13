const { fizzBuzz } = require('./fizzBuzz');

// ブラックボックステスト
test('return FizzBuzz', () => {
  expect(fizzBuzz(15)).toBe('FizzBuzz')
})
