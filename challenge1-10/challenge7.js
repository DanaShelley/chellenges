// Write a function that takes a string of braces, and determines
//if the order of the braces is valid.It should return true if the
//string is valid, and false if it's invalid.

// This Kata is similar to the Valid Parentheses Kata, but introduces new
//characters: brackets[], and curly braces { }.Thanks to @arnedag for the idea!

// All input strings will be nonempty, and will only consist of parentheses,
//brackets and curly braces: ()[]{ }

function validBraces(braces) {
  let arr = braces.split("");
  let i = 0;

  while (true) {
    let check = false;
    while (i <= arr.length - 1) {
      if (arr[i] === "{" && arr[i + 1] === "}") {
        arr.splice(i, 1);
        arr.splice(i, 1);
        check = true;
      } else if (arr[i] === "(" && arr[i + 1] === ")") {
        arr.splice(i, 1);
        arr.splice(i, 1);
        check = true;
      } else if (arr[i] === "[" && arr[i + 1] === "]") {
        arr.splice(i, 1);
        arr.splice(i, 1);
        check = true;
      }
      i++;
    }
    if (i > arr.length - 1) i = 0;
    if (!check) break;
  }
  return arr.length === 0;
}

console.log(validBraces("({}{}({})"));
