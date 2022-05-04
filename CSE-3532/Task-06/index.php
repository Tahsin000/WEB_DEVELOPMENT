<?php
    $A=12;
    echo "variable , A = ".$A;
    $Test = array(123,23,34,45,56,67,78);
 
    sort($Test);
    echo '<br>**************** Foreach ******************<br>';
    foreach($Test as $value){
        echo "$value<br>";
    }
    echo '<br>**************** iteration array loop print ******************<br>';
    for($i=0;$i<count($Test);$i++){
        echo $Test[$i]."<br>";
    }
    echo '<br><br>**************** String Len ******************<br>';
 
    $STR = "Tahsin Abrar";
    echo "String is = Tahsin Abrar<br>String Len";
    echo strlen($STR); // outputs 12
 
    echo '<br><br>**************** INT CHECK ******************<br>';
    echo "Number is = 59.85 <br>";
    $x = 59.85;
    var_dump(is_int($x));
 
    echo '<br><br>**************** PHP math ******************<br>';
    echo "<br><b>PI VALUE</b><br>";
    echo "PI Value is = 3.1416<br> And PHP.Math Values is = ";
    echo(pi());
    echo '<br> <br> <b>MIN VALUE CHECK</b><br>';
    echo(min(0, 150, 30, 20, -8, -200));  // returns -200
 
    //***** function declaration *****
    echo "<br><br>**************** function declaration *****************<br>";
    function myTest() {
        static $x = 0;
        echo $x;
        $x++;
    }
        myTest(); echo "<br>";
        myTest(); echo "<br>";
        myTest(); echo "<br>";

    //***** Reverse string *****
    echo "<br><br>**************** Reverse string *****************<br> My String is = Hello world!<br>Reverse is = ";
    echo strrev("Hello world!"); // outputs !dlrow olleH
    
    //***** Replace string *****
    echo "<br><br>**************** Replace string *****************<br>My string is = Hello world!<br> Replace 'world' to 'Dolly'";
    echo str_replace("world", "Dolly", "Hello world!"); // outputs Hello Dolly!

    //***** generates a random number *****
    echo "<br><br>**************** generates a random number *****************<br>";
    echo(rand());
        echo "<br><br><b>Random number 10 to 100</b> <br>";
        // Range of random number
        echo(rand(10, 100));

    //***** Define(case-sensitive name) *****
    echo "<br><br>**************** Define(case-sensitive name) *****************<br>";
    echo "My Variable 'GREETING' which is assigned a string 'Welcome to W3Schools.com!'<br>";
    define("GREETING", "Welcome to W3Schools.com!");
    echo GREETING;

    echo "<br><br>**************** PHP Date  *****************<br>";
    echo "Today is ".date("d / m/ y")." ".date("l");

    echo "<br><br>**************** PHP Time *****************<br>";
    echo "Today is ".date("h:i:sa");

    echo "<br><br>**************** PHP include *****************<br>";
    echo "Copyright &copy; 1999-" . date("Y") . " hotash.com";
?>
