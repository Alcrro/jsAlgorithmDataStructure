const gen = function* () {
  yield 1;
  yield 2;
  yield 3;
};
console.log(gen);

const genGenerator = gen();
console.log(genGenerator.next());
console.log(genGenerator.next());
console.log(genGenerator.next());
