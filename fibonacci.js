<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>fibonacci</title>
</head>
<body>
    <script>
        function fibonacci(a){
           var fib = [0,1]
           for(let i=2; i<a; i++){
            fib[i] = fib[i-1] + fib[i-2]
           }
           return fib;
        }
        document.write(fibonacci(2) + "<br>")
        document.write(fibonacci(3) + "<br>")
        document.write(fibonacci(9) + "<br>")
    // the big O is O(n) linear complexity
    </script>
</body>
</html>