// You are given an array (which will
//have a length of at least 3, but could be very large)
//containing integers.The array is either entirely comprised of odd
//integers or entirely comprised of even integers except for a single integer N.
//Write a method that takes the array as an argument and returns this "outlier" N.
function findOutlier(integers) {
  let odd = [];
  let even = [];
  integers.forEach((el) => {
    el % 2 === 1 || el % 2 === -1 ? odd.push(el) : even.push(el);
  });
  return odd.length === 1 ? odd[0] : even[0];
}

console.log(findOutlier(3, 5, 2, 7, 7, 9, 1))