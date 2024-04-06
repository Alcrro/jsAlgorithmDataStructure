/*

! Closure 

? Scope / State / Functions

*/

const wrapperFunction = () => {
  const price = [10, 28, 99, 3];

  const logPricesClosure = (n) => {
    if (n === undefined) {
      console.log(price);
    } else {
      price.push(n);
      console.log(price);
    }
  };

  return logPricesClosure;
};

const logPrices = wrapperFunction();
// console.log(price);
// ReferenceError price is not defined

logPrices(23);
