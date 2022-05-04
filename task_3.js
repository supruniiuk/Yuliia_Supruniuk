function digital_root(n) {
  if (n < 10) {
    return n;
  } else if (n % 9 === 0) {
    return 9;
  }
  return n % 9;
}

console.log(digital_root(16)); // 7
console.log(digital_root(942)); // 6
console.log(digital_root(132189)); // 6
console.log(digital_root(493193)); // 2
