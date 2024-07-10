function twoSum(numbers, target) {
  console.log(numbers);
  let result = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        if (numbers[i] + numbers[j] === target) {
          result.push(i);
        }
      }
    }
  }
  return result;
}

let numbers = [2, 7, 11, 15];
let result = twoSum(numbers, 26);
console.log(result);
