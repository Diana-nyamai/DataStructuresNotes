<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Recursive factorial</title>
</head>
<body>
    <script>
        function Recursivefactorial(n){
            if(n===0){
                return 1
            }
            return n * Recursivefactorial(n -1)
        }
        document.write(Recursivefactorial(4) + "<br>")
        document.write(Recursivefactorial(5) + "<br>")

// time complexity is O(n) - linear complexity since as the number of n increases so does the nmber of instructions to be executed increase
    </script>
</body>
</html>