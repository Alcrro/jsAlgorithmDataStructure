var mergeTwoLists = function (list1, list2) {
  let sortedArray = [];
  if (!list1.length && !list2.length) {
    return [];
  }
  while (list1.length && list2.length) {
    if (list1[0] < list2[0]) {
      sortedArray.push(list1.shift());
    } else {
      sortedArray.push(list2.shift());
    }
  }

  return [...sortedArray, ...list1, ...list2];
};

let list1 = [];
let list2 = [];
console.log(mergeTwoLists(list1, list2));
