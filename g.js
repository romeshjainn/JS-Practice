let arr = [1, 2, 3, 4, [1, 2], [3, 4, [3, 4, [12,212]]], 5];
let store;
let insideStore;
let finalArray = [];

for (let i = 0; i < arr.length; i++) {
  store = arr[i];
  if (Array.isArray(store)) {
    for (let j = 0; j < store.length; j++) {
      insideStore = store[j];
      if (Array.isArray(insideStore)) {
        for (let k = 0; k < insideStore.length; k++) {
          finalArray.push(insideStore[k]);
        }
      } else {
        finalArray.push(store[j]);
      }
    }
  } else {
    finalArray.push(arr[i]);
  }
}

console.log(finalArray);
