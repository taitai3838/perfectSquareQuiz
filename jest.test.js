const findNforPerfectSquare = require('./index');

test('case 12 expect [ 4, 4, 4 ]', () => {
  expect(findNforPerfectSquare(12)).toBe(3);
});

test('case 13 expect [ 9, 4 ]', () => {
    expect(findNforPerfectSquare(13)).toBe(2);
  });

  test('case 59 expect [ 25, 25, 9 ]', () => {
    expect(findNforPerfectSquare(59)).toBe(3);
  });

  test('case 285 expect [ 169, 100, 16 ]', () => {
    expect(findNforPerfectSquare(285)).toBe(3);
  });