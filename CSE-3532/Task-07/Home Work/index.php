<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form method="post" action="" >
        <table>
            <tr>
                <td>Student Name : </td>
                <td>
                    <input type="text" name="StudentName" id="StudentName">
                </td>        
            </tr>
            <tr>
                <td>Student ID : </td>
                <td>
                    <input type="text" name="StudentID" id="StudentID">
                </td>        
            </tr>
            <tr>
                <td>Student Mobile number : </td>
                <td>
                    <input type="text" name="StudentPhone" id="StudentPhone">
                </td>        
            </tr>
            <tr>
                <td>Location : </td>
                <td>
                    <input type="text" name="loca" id="loca">
                </td>        
            </tr>
            <tr>
                <td></td>
                <td>
                    <input type="submit" name="submit" id="submit">
                </td>        
            </tr>
        </table>
    </form>
 
    <?php
        $stdName = $_POST['StudentName'];
        $stdID = $_POST['StudentID'];
        $stdphone = $_POST['StudentPhone'];
        $stdloc= $_POST['loca'];
        //_______________________________________________
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dataBase = "Std";
        $conn = mysqli_connect($servername, $username, $password, $dataBase);
        mysqli_query($conn, "INSERT INTO student(StudentName, StudentID, StudentPhone, StudentLocation) values ('$stdName', '$stdID', '$stdphone', '$stdloc')");
        // if (!$conn) {
        //     die("Connection failed: " . mysqli_connect_error());
        //   }
        //   echo "Connected successfully";
       
    ?>
 
</body>
</html>
