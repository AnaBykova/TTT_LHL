/* Question 3
 *
 *  Implement the 'mode' function defined below
 *
 * MODE - the most frequently occurring number
 *      - for this test, the provided lists will only have a single value for the mode
 *
 * For example:
 *
 *    mode([6,2,3,4,9,6,1,0,5]);
 *
 * Returns:
 *
 *    6
 */
const mode = function(arr) {
  /* IMPLEMENT ME */
  const frequency = {};

  arr.forEach(function(number) {
    if (frequency[number]) {
      frequency[number]++;
    } else {
      frequency[number] = 1;
    }
  });

  let maxFrequency = 0;
  let modeNumber = null;

  for (const number in frequency) {
    if (frequency[number] > maxFrequency) {
      maxFrequency = frequency[number];
      modeNumber = number;
    }
  }

  return Number(modeNumber);
};
 
// Don't change below:

module.exports = { mode };
