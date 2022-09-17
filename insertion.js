function insertion(arr){
    for(let i=1; i<arr.length; i++){
        // this is index 1
        let insertnumber = arr[i]
        // this is index 0
        let j = arr[i-1]
        // while number in index zero is greater or equal to zero and it is greater than index 1 then it will compile that
        while(j>=0 && arr[j] > insertnumber){
            // number in index 1 will be swapped to become index 0
            arr[j+1] = j
            // number in index 0 will be swapped to become undex 1
            j = j+1
        }
    }

}
var arr = [-3,-5,10,7]
