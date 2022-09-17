function recursivebinary(n, target){
    return search(n, target, 0, n.length -1)
}

function search(n, target, leftindex, rightindex){
    if(leftindex > rightindex){
        return -1
    }
    let middleindex = Math.floor((leftindex + rightindex) / 2)
    if(target === n[middleindex]){
        return middleindex
    }
    if(target < n[middleindex]){
        return search(n, target, leftindex, middleindex - 1)
    }
    else{
        return search(n, target, middleindex +1, rightindex)
    }
}

console.log(recursivebinary([-5,2,4,6,10], 10) + "\n")
console.log(recursivebinary([-5,2,4,6,10], 6) + "\n")
console.log(recursivebinary([-5,2,4,6,10], 20) + "\n")
// big O IS O(log n) -logarithmic 
