function Nclick(){
    var n1 = Number(document.getElementById('firstID').value);
    var n2 = Number(document.getElementById('secondID').value);
    console.log(n1);
    // alert(n1);
    var addition = Number(n1 + n2);
    var minus = Number(n1 - n2);
    var multiplication = Number(n1 * n2);
    var division = Number(n1 / n2);
    
    document.getElementById('addition').innerHTML = Number(n1 + n2);
    document.getElementById('minus').innerHTML = minus;
    document.getElementById('multiplication').innerHTML = multiplication;
    document.getElementById('division').innerHTML = division;
}