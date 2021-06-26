//There is an array with some numbers. All numbers are equal except for one. Try to find it!
function findUniq(arr) {
  arr = arr.sort()
  if (arr[0] !== arr[1]) return arr[0]
  if (arr[arr.length - 2] !== arr[arr.length - 1]) return arr[arr.length - 1]
}

console.log(findUniq([1, 1, 1, 3, 1, 1, 1, 1]))
