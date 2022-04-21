function digital_root(number) {
  let sum = 0;
  let num = number;
  while (sum % 1 === 0) {
    if (num == 0) {
      break;
    }

    sum += num % 10;
    num = parseInt(num / 10, 10);
  }
  return sum;
}
