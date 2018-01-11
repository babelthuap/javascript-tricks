function rot13(str, n = 13) {
  if (n < 0) {
    // Normalize n
    n = n % 26 + 26;
  }
  return Array.prototype.map.call(str, chr => {
    const x = chr.charCodeAt(0);
    if (65 <= x && x <= 90) {
      // Upper case
      return String.fromCharCode((x - 65 + n) % 26 + 65);
    } else if (97 <= x && x <= 122) {
      // Lower case
      return String.fromCharCode((x - 97 + n) % 26 + 97);
    } else {
      // Non-letter
      return chr;
    }
  }).join('');
}

function rot47(str, n = 47) {
  return Array.prototype.map.call(str, chr => {
    const x = chr.charCodeAt(0);
    if (32 <= x && x <= 126) {
      // Visible ascii char
      return String.fromCharCode((((x - 32) + n) % 94) + 32);
    } else {
      return chr;
    }
  }).join('');
}
