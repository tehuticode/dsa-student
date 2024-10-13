/**
 * @param {number[]} arr - The array to be sorted
 * @returns {number[]} The sorted array
 */
function mergeSort(arr) {
  // Base case: If array has 1 or fewer elements it's already sorted 
  if (arr.length <= 1) {
    return arr;
  }
  // Find the middle point to divide the array into half
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  // Sort halves recursively
  return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merges two sorted arrays into a single sorted array
 * @param {number[]} left - Left sorted array
 * @param {number[]} right - Right sorted array
 * @returns {number[]} The merged sorted array
 */
function merge(left, right) {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare elements from both arrays and add the smaller element to the result
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Add any remaining elements from the left and right arrays
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

module.exports = mergeSort;
