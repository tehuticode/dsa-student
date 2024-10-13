const mergeSort = require('./merge-sort')

// Test the merge sort 
const unsortedArray = [64, 34, 25, 12, 22, 11, 33, 90, 49]
console.log("Unsorted array:", unsortedArray)

const sortedArray = mergeSort(unsortedArray)
console.log("Sorted array:", sortedArray)
