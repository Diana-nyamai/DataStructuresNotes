
    console.log("================================================method 1\n")
function poweroftwo(n){
    if(n<1){
    return false
    }
    while(n > 1){
        if(n%2 !== 0){
        return false
        }
        n = n/2
    }
    return true

}
console.log(poweroftwo(3) + "\n")
console.log(poweroftwo(4) + "\n")
console.log(poweroftwo(9) + "\n")
// the big O is O(logn)

// Method 2
console.log("================================================method 2\n")

function powof2(n){
    if(n < 1){
        return false;
    }
    return (n & (n-1) ) === 0
}
console.log(powof2(9) + "\n")
console.log(powof2(4) + "\n")
console.log(powof2(16) + "\n")

