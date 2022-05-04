function int32ToIp(int32) {
  let ip = [];
  let bits = 32;
  while (bits >= 8) {
    ip.push((int32 >> (bits - 8)) & 0xff);
    bits -= 8;
  }

  return ip.join(".");
}

console.log(int32ToIp(2149583361)); // "128.32.10.1"
console.log(int32ToIp(32)); // "0.0.0.32"
console.log(int32ToIp(0)); // "0.0.0.0"
