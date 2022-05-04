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
    echo '<br>**************** String Len ******************<br><br>';
 
    $STR = "Tahsin Abrar";
    echo strlen($STR); // outputs 12
 
    echo '<br>**************** INT CHECK ******************<br><br>';
    $x = 59.85;
    var_dump(is_int($x));
 
    echo '<br>**************** Php math ******************<br><br>';
    echo '<br>***** PI VALUE ***** <br>';
    echo(pi());
    echo '<br>***** MAX VALUE ***** <br>';
    echo(min(0, 150, 30, 20, -8, -200));  // returns -200
 
    //***** function declaration *****
    function myTest() {
        static $x = 0;
        echo $x;
        $x++;
    }
        myTest();
        myTest();
        myTest();

    //***** Reverse string *****
    echo strrev("Hello world!"); // outputs !dlrow olleH

    //***** Replace string *****
    echo str_replace("world", "Dolly", "Hello world!"); // outputs Hello Dolly!

    //***** generates a random number *****
    echo(rand());
        // Range of random number
        echo(rand(10, 100));

    //***** Define(case-sensitive name) *****
    define("GREETING", "Welcome to W3Schools.com!");
    echo GREETING;
        // case-insensitive
        define("GREETING", "Welcome to W3Schools.com!", true);
        echo greeting;

?>
