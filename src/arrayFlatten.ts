/**
 * A sample implementation of flatten Array
 *
 * @param {Array} array The array to flatten.
 * @param {number} depth The recursion depth.
 * @param {Array} result Used for recursion.
 * @returns {Array} Returns the new flattened array.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const arrayFlatten = (array: Array<any> = null, depth = 10, result: Array<any> = []): Array<any> => {
  if (array == null) {
    return result;
  }
  for (const value of array) {
    if (depth > 0 && Array.isArray(value)) {
      if (depth > 1) {
        arrayFlatten(value, depth - 1, result);
      } else {
        result.push(...value);
      }
    } else {
      result[result.length] = value;
    }
  }
  return result;
};

export default arrayFlatten;
