function binarySearch(n , target){
    let leftindex = 0
    let rightindex = n.length - 1

    while(leftindex <= rightindex){
        let middleindex = Math.floor((leftindex + rightindex)/2)
        if(target === n[middleindex]){
            return middleindex
        }
        if(target < n[middleindex]){
            rightindex = middleindex -1
        }
        else{
            leftindex = middleindex + 1
        }
    }
    return -1
}
console.log(binarySearch([2,3,4,5], 5) + "\n")
console.log(binarySearch([2,3,4,5], 3) + "\n")
console.log(binarySearch([2,3,4,5], 1) + "\n")
// BIG-O IS O(log n)
