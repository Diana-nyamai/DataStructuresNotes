console.log("============================ Method1 \n")
function linearSearch(n,target){
    return n.indexOf(target)
}
console.log(linearSearch([2,4,5,7],4) +"\n")
console.log(linearSearch([2,4,5,7],2) +"\n")
console.log(linearSearch([2,4,5,7],6) +"\n")
// time complexity is O(n). this is because indexOf iterates through the internal array and checks each element one by one, so the time complexity for this operation always requires O(n) time

console.log("============================ Method2 \n")

function linearSearch2(arr, target){
        for(let i=0; i<arr.length; i++){
        if(arr[i] === target){
            return i
        }
        }
return -1
}
console.log(linearSearch2([2,4,5,7], 4) + "\n")
console.log(linearSearch2([2,4,5,7], 2) + "\n")
console.log(linearSearch2([2,4,5,7], 6) + "\n")
//    BIG-O is O(n) - linear time
