<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>recursive fibonacci</title>
</head>
<body>
    <script>
         function recursivefibonacci(n){
             if(n<2){
                return n
             }
             return recursivefibonacci(n-1) + recursivefibonacci(n-2)
         }
         document.write(recursivefibonacci(0) + "<br>")
         document.write(recursivefibonacci(1) + "<br>")
         document.write(recursivefibonacci(7) + "<br>")

// time complexity is O(2^n). the performance is terrible acoording to the big O cheat sheet chart. it is not the best solution in solving fibonacci sequence
    </script>
</body>
</html>