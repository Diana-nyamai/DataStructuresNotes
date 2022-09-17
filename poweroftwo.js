<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Power of two</title>
</head>
<body>
    <script>
          document.write("================================================method 1<br>")
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
        document.write(poweroftwo(3) + "<br>")
        document.write(poweroftwo(4) + "<br>")
        document.write(poweroftwo(9) + "<br>")
        // the big O is O(logn)

        // Method 2
        document.write("================================================method 2<br>")

        function powof2(n){
            if(n < 1){
                return false;
            }
            return (n & (n-1) ) === 0
        }
        document.write(powof2(9) + "<br>")
        document.write(powof2(4) + "<br>")
        document.write(powof2(16) + "<br>")

    </script>
</body>
</html>