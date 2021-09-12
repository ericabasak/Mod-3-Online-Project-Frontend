// merge sort arrays
// merge two sorted arrays
// create an empty array, take look at the smallest values in each input array

function mergeArr(arr1, arr2){
  //  make variable
  let results = [];
  let i = 0;
  let j = 0;
  while(i < arr1.length && j < arr2.length) {
    if(arr2[j] > arr1[i]){
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while(i < arr1.length){
    results.push(arr1[i])
    i++;
  }
  while(j < arr2.length){
    results.push(arr2[j]);
    j++;
  }
}


// merge sort function
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length/2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeArr(left, right);
}

function merge(arr1, arr2){
  let result = [];
  let i = 0;
  let j = 0;

  // merge arrays as far as they can, until end of one of the arrays finishes(shorter of the two arrays)
  while(i < arr1.length && j < arr2.length){
    if(arr2[j] > arr1[i]){
      // pushing the smaller number into the result array, to make is ascending order
      result.push(arr1[i]);
      // once you push the smaller number into the result array, then move the index over by one
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
    // if arr1 length is less than arr2 push the remaining numbers into result array
    while(i < arr1.length){
      result.push(arr1[i]);
      i++;
    }

    while(j < arr2.length){
      result.push(arr2[j]);
      j++;
    }
  }
  return result;
}