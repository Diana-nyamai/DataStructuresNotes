function bubblesort(arr){
    var swapped;
    do{
        swapped = false
    for(let i=0; i<arr.length -1; i++){
    if(arr[i] > arr[i+1]){
        var temp = arr[i];
        arr[i] = arr[i+1]
        arr[i+1] = temp
        swapped = true
    }
    }
    }
    while(swapped)
}
arr = [20,4,-2,23];
bubblesort(arr)
console.log(arr)
//   BIG O is O(n^2) quadratic time complexity
