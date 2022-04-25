function digital_root(n) {
  if (n < 10) {
    return n;
  } else if (n % 9 === 0) {
    return 9;
  }
  return n % 9;
}
