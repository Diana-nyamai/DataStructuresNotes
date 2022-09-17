function fibonacci(a){
    var fib = [0,1]
    for(let i=2; i<a; i++){
    fib[i] = fib[i-1] + fib[i-2]
    }
    return fib;
}
console.log(fibonacci(2) + "\n")
console.log(fibonacci(3) + "\n")
console.log(fibonacci(9) + "\n")
// the big O is O(n) linear complexity
