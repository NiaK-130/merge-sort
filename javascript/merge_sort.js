function mergeSort(arr) {
  if (arr.length <=1){
    return arr
  }
  const middle = Math.floor((arr.length/2));
  const left = arr.slice(0,middle)
  const right = arr.slice(middle)

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
  const array = [];

  while(left.length && right.length){
    if(left[0] < right[0]){
      array.push(left.shift())
    } else{
      array.push(right.shift())
    }
  }

  return array.concat(left.slice()).concat(right.slice());
}




if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2]");
  console.log("=>", mergeSort([2, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", mergeSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: [-10, 0, 2, 2, 5, 10, 20]");
  console.log("=>", mergeSort([10, -10, 0, 2, 20, 5, 2]));
}

module.exports = mergeSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
