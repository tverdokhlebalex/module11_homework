const sum = require('./sum');

test('Проверка сложения 1 + 2', () => {
  expect(sum(1, 2)).toBe(3);
});
