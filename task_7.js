function int32ToIp(int32) {
  let ip = [];
  let bits = 32;
  while (bits >= 8) {
    ip.push((int32 >> (bits - 8)) & 0xff);
    bits -= 8;
  }

  return ip.join(".");
}
