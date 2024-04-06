/*
Tower of Hanoi
	The objective of the puzzle is to move the entire stack to the last road,obeying the following rules:

		1. 	Only one disk may be moved at a time.
		2.	Each move consists of taking the upper disk from one of the
					stacks and placing it on top of another stack or an empty rod.
					At lastly
		3.	No disk may be placed on top of a disk that is smaller

*/

function towerOfHanoi(n, fromRod, toRod, usingRod) {
  //to do
  if (n === 1) {
    console.log(`Move disk 1 from  ${fromRod} to ${toRod}`);
    return;
  }

  towerOfHanoi(n - 1, fromRod, usingRod, toRod);
  console.log(`Move disk ${n} from ${fromRod} to ${toRod}`);
  towerOfHanoi(n - 1, usingRod, toRod, fromRod);
}

console.log(towerOfHanoi(3, "A", "C", "B"));
