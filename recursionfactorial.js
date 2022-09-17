function Recursivefactorial(n){
    if(n===0){
        return 1
    }
    return n * Recursivefactorial(n -1)
}
console.log(Recursivefactorial(4) + "\n")
console.log(Recursivefactorial(5) + "\n")

// time complexity is O(n) - linear complexity since as the number of n increases so does the nmber of instructions to be executed increase
