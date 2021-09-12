// given an array and a target number find out how many 
// times the number repeats in the array
// ie. countRepetitions([3,4,5,6,1,1,3,4,1,5,1,1,6,1,1], 6) the target number 6 repeats 2 times

// pseudocode
// go through the array of numbers one at a time from left to right
// compare the target number to each number in the array
function countRepetitions(arr, target){
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    if(arr[i]  === target){
      obj.push(arr[i]);
      
    }
  }
}
console.log(countRepetitions([3,4,5,6,1,1,3,4,1,5,1,1,6,1,1], 6));