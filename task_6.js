function checkSmallerNext(arr) {
  let n = arr.length;
  let i = -1;
  for (i = n - 1; i > 0; i--) {
    if (arr[i - 1] < arr[i]) {
      return i - 1;
    }
  }

  return -1;
}

function getMinLargerPiv(arr, piv) {
  let minId = null;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > piv) {
      if (arr[minId] == null || arr[j] < arr[minId]) {
        minId = j;
      }
    }
  }

  return minId;
}

function nextBigger(num) {
  let digits = num
    .toString()
    .split('')
    .map((item) => {
      return parseInt(item, 10);
    });

  const i = checkSmallerNext(digits);
  if (i === -1) {
    return i;
  }

  let right = digits.splice(i);
  const piv = right.splice(0, 1)[0];

  const minId = getMinLargerPiv(right, piv);
  const minEl = right[minId];

  if (minId === null) {
    return -1;
  }

  right.splice(minId, 1);
  right.push(piv);
  right = right.sort((a, b) => a - b);

  const result = digits.concat(minEl).concat(right);
  return +result.join('');
}
