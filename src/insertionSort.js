function insertionSort(arr) {
  
  while(i < arr.length){
  //current index
    let n = i
    while(n > 0 && arr[n-1] > arr[n]){
      //current value
      let currentValue = arr[n]
      //previous value
      let previousValue2 = arr[n - 1]

      arr[n] = previousValue2

      arr[n - 1] = currentValue
      //setting index to the previous index
      n = n - 1
    }
    //incrementing i
    i = i + 1
  }
return arr
}


