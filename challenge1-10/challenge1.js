/* 
Write a function that takes in a string of one or more words, and returns the same string, but with all
five or more letter words reversed (like the name of this kata).

Strings passed in will consist of only letters and spaces.
Spaces will be included only when more than one word is present.
*/

function spinWords(string) {
  let array = string.split(' ')
  let arrayReversed = []

  array.forEach((el) => {
    if (el.length >= 5) {
      arrayReversed.push(el.split('').reverse().join(''))
    } else {
      arrayReversed.push(el)
    }
  })
  return arrayReversed.join(' ')
}

console.log(spinWords('Hello my dear friend'))