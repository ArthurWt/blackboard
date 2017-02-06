function fib(n) {
  if(n == 1) return 1
  if(n == 2) return 2
  if(n >= 2)
    return fib(n-1) + fib(n-2)
}

console.log("the fibonacci of 10 is:" + fib(10))






