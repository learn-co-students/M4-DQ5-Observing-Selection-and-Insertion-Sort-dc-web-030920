

function selectionSort(arr) {
//for every item in the collection
//find the smallest item in the unsorted portion of the array and swap it with the current item
// arr is an array of unsorted integers (i.e. [3, 5, 1])
function selectionSort(arr){
  let num = 0
  for(var i = 0;i < arr.length; i++){
     let n = i + 1
    while(n < arr.length){
      num = arr[i]
      num1 = arr[n]
      if(arr[i] > arr[n]){
        arr[n] = num
        arr[i] = num1
      }
      n++
    }
  }
  console.log(arr)
}