import arrayFlatten from '../arrayFlatten';

test('one depth', () => {
  expect(
    arrayFlatten([
      [1, 2],
      [3, 4],
      [5, 6],
    ]),
  ).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test('three depths', () => {
  expect(arrayFlatten([[1, 2, [3, 4, [5, 6]]]])).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test('can we handle null input?', () => {
  expect(arrayFlatten(null)).toStrictEqual([]);
});

test('can we handle strings as well?', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expect(arrayFlatten('Hello World' as any)).toStrictEqual(['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd']);
});

test('can we handle object as well?', () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  expect(arrayFlatten({ foo: 'bar' } as any)).toStrictEqual([]);
});

test('complex', () => {
  expect(arrayFlatten([[1, 2, [3, 4, [5, 6, 7], 8], 9, 10], [11], 12, [13, [14, 15, [16]]]])).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
});
