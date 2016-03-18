function gcd(x, y) {
  return y ? gcd(y, x % y) : Math.abs(x);
}

console.log(gcd(15, 35)); // -> 5
