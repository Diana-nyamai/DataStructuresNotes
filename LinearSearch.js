<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LINEAR SEARCH</title>
</head>
<body>
    <script>
        document.write("============================ Method1 <br>")
        function linearSearch(n,target){
            return n.indexOf(target)
        }
        document.write(linearSearch([2,4,5,7],4) +"<br>")
        document.write(linearSearch([2,4,5,7],2) +"<br>")
        document.write(linearSearch([2,4,5,7],6) +"<br>")
    // time complexity is O(n). this is because indexOf iterates through the internal array and checks each element one by one, so the time complexity for this operation always requires O(n) time

       document.write("============================ Method2 <br>")

       function linearSearch2(arr, target){
             for(let i=0; i<arr.length; i++){
                if(arr[i] === target){
                    return i
                }
             }
       return -1
       }
       document.write(linearSearch2([2,4,5,7], 4) + "<br>")
       document.write(linearSearch2([2,4,5,7], 2) + "<br>")
       document.write(linearSearch2([2,4,5,7], 6) + "<br>")
    //    BIG-O is O(n) - linear time
    </script>
</body>
</html>