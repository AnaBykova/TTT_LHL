/* Question 2
 *
 *  Implement the functions defined below
 *
 */

// Meant to be used by medium. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEDIAN - the middle number of a list (when sorted)
 *        - if the list length is even, then the median is the average of the two middle values
 *        - use the provided 'round' function before returning your value
 *
 * For example:
 *
 *    median([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    4
 */
const median = function(arr) {
  /* IMPLEMENT ME */
  const arrNew = arr.sort((a, b) => a - b);
  const middleIndex = Math.floor(arrNew.length / 2);

  if (arrNew.length % 2 === 0) {
    const middleValue1 = arrNew[middleIndex - 1];
    const middleValue2 = arrNew[middleIndex];
    const medianValue = (middleValue1 + middleValue2) / 2;
    return round(medianValue);
  } else {
    return arrNew[middleIndex];
  }
};

 
// Don't change below:

module.exports = { median };
