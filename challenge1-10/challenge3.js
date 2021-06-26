// In this kata you will create a function that takes a list of
//non - negative integers and strings and returns a new list
//with the strings filtered out.
function filter_list(l) {
  let newArr = [];
  l.forEach((el) => {
    if (typeof el === "number") {
      newArr.push(el);
    }
  });
  return newArr;
}

console.log(filter_list(3, 5, 'f', 3));