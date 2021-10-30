// forecast should use slice() to 
// extract info from the argument array and 
// return a new array that contains the string elements 'warm' and 'summy'

function forecast(arr) {
  let newArr = arr.slice(2,4)

  return newArr;
}

console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));