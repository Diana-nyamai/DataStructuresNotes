function isPrime(n){
  if(n<2){
    return false
  }
  for(let i=2; i<n; i++){
    if(n%i === 0){
        return false
    }
  }
  return true;
}
console.log(isPrime(5) + "\n")
console.log(isPrime(10) + "\n")

console.log("=======================================\n")
var a = 1%2
console.log(a)
