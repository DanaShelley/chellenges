function narcissistic(value) {
  let stringValue = String(value);
  let arrayValue = stringValue.split("");
  let valueLength = arrayValue.length;
  let narcissisticValue = 0;
  arrayValue.forEach((el) => {
    narcissisticValue += Math.pow(+el, valueLength);
  });
  return narcissisticValue === value;
}

console.log(narcissistic(163));
