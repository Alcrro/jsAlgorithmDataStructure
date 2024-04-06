const product = [
  {
    _id: { $oid: "655f9ce1731d6be9de33b76d" },
    brand: "iphone",
    productModel: "15",
    category: "phone",
    version: "pro",
    thumbnail: "eu.png",
    internalMemory: 256,
    price: 1001,
    rating: 2.2,
    stock: 3,
    userId: { $oid: "655cb57dc876ad6f21b7e842" },
    slug: "phone-iphone-15",
    __v: 0,
  },
  {
    _id: { $oid: "655f9ce1731d6be9de33b76d2" },
    brand: "iphone2",
    productModel: "152",
    category: "phone2",
    version: "pro2",
    thumbnail: "eu.png",
    internalMemory: 2562,
    price: 10012,
    rating: 2.22,
    stock: 32,
    userId: { $oid: "655cb57dc876ad6f21b7e842" },
    slug: "phone-iphone-15",
    __v: 0,
  },
  {
    _id: { $oid: "655f9ce1731d6be9de33b76d2" },
    brand: "iphone2",
    productModel: "152",
    category: "phone2",
    version: "pro2",
    thumbnail: "eu.png",
    internalMemory: 2562,
    price: 10012,
    rating: 2.22,
    stock: 32,
    userId: { $oid: "655cb57dc876ad6f21b7e842" },
    slug: "phone-iphone-15",
    __v: 0,
  },
];

let excludedItemsArray = ["_id", "stock", "slug", "__v", "userId", "thumbnail"];

const categories = product
  .map((item) => Object.keys(item))
  .flat()
  .filter((filter) => !excludedItemsArray.includes(filter))
  .sort()
  .filter((item, pos, ary) => {
    return !pos || item != ary[pos - 1];
  });

let test = [];

categories.map((category) => {
  product.map((item) => {
    if (item[category] !== undefined) {
      test.push({ key: category, value: item[category] });
    }
  });
});
// console.log(test);
var output = [];
test.forEach((item, index) => {
  var existing = output.filter((v, i) => {
    return v.key === item.key;
  });

  if (existing.length) {
    var existingIndex = output.indexOf(existing[0]);

    output[existingIndex].value = [...new Set(output[existingIndex].value.concat(item.value))];
    // output[existingIndex].value = output[existingIndex].value.concat(item.value);
  } else {
    item.value = [item.value];
    output.push(item);
  }
});

console.log(output);
