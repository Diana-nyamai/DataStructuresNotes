function recursivefibonacci(n){
    if(n<2){
    return n
    }
    return recursivefibonacci(n-1) + recursivefibonacci(n-2)
}
console.log(recursivefibonacci(0) + "\n")
console.log(recursivefibonacci(1) + "\n")
console.log(recursivefibonacci(7) + "\n")

// time complexity is O(2^n). the performance is terrible acoording to the big O cheat sheet chart. it is not the best solution in solving fibonacci sequence
