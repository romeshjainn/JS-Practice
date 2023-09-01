let arr = [
  [1, 2, [1, 2, [1, 2, [2,3,[55,88,[67,990,99]]]]]],
  [3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15],
];

let finalArray = [];

function flattenArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flattenArray(arr[i]);
    } else {
      finalArray.push(arr[i]);
    }
  }
}

flattenArray(arr);
console.log(finalArray);
