function selectionSort(arr) {
  // your code here!
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  let i 
  let j
  let aLength = arr.length 

  for (i = 0; i < aLength-1; i++) 
  {
    let jMin = i;
    for (j = i+1; j < aLength; j++)
    {
      if (arr[j] < arr[jMin])
      { jMin = j;
      }
    }

    if (jMin != i )
    {
      let a = arr[i]
      let b = arr[jMin]
      arr[i] = b
      arr[jMin] = a
    }
  }
}
