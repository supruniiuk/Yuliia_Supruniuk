function number_of_pairs(arr, target) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        count += 1;
      }
    }
  }

  return count;
}