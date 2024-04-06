function powerOfTwo(n) {
  //to do
  if (n < 2) {
    return false;
  }

  return (n & (n - 1)) === 0;
}
// console.log(powerOfTwo(3));
function powOfT(n) {
  if (n < 2) {
    return false;
  }

  for (let i = 0; i < n; i++) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}

console.log(powOfT(4));
