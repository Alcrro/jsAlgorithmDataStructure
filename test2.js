const object1 = [
  {
    a: "somestring",
  },
  { b: 42 },
  { c: false },
];
let value = { d: "test" };
let value2 = { a: "test" };

const find = object1.find((item) =>
  Object.keys(item).some((el) => el === Object.keys(value2).toString())
);

if (find === undefined) {
  object1.push(value2);
} else {
  find.a = [find.a];

  find.a.push(value2.a);
}
// Expected output: Array ["a", "b", "c"]
const test = object1.map((item) => `${Object.entries(item)}`.split(",").filter((v, i) => i !== 0));
// console.log(test);

console.log(
  object1
    .map(
      (item) =>
        `${Object.entries(item)}`.split(",")[0] +
        "/" +
        `${Object.entries(item)}`.split(",").filter((v, i) => i !== 0)
    )
    .join("/")
);
