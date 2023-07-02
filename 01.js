/* Question 0
 *
 *  Implement the functions defined below
 *
 */

/* ===========================================================================
 * COUNT - the number of items in a list
 *
 * For example:
 *
 *    count([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    9
 */
const count = function(arr) {
  return arr.length;
};

/* ===========================================================================
 * SUM - the sum of the numbers in a list
      - safe to assume that all items are numbers already
 *
 * For example:
 *
 *    sum([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    36
 */
const sum = function(arr) {
  /* IMPLEMENT ME */
  let sumArr = 0;
  for (let i = 0; i < arr.length; i++) {
    sumArr = sumArr + arr[i];
  }
  return sumArr;
};

// To be used by mean. Do not alter.
const round = function(number) {
  return Math.round(number * 100) / 100;
};

/* ===========================================================================
 * MEAN - the average value of numbers in a list
 *      - use the provided 'round' function when returning your value
 *      - if empty array, return null to indicate that mean cannot be calculated
 *
 * For example:
 *
 *    mean([6,2,3,4,9,6,1,0,5])
 *
 * Returns:
 *
 *    4
 */
const mean = function(arr) {
  /* IMPLEMENT ME */
  if (arr.length === 0) {
    return null;
  } else {
    let sumArr = 0;
    let average = 0;
    for (let i = 0; i < arr.length; i++) {
      sumArr = sumArr + arr[i];
    }
    average = round(sumArr / arr.length);
    return average;
  }
};

// Don't change below:
module.exports = { count, sum, mean };
