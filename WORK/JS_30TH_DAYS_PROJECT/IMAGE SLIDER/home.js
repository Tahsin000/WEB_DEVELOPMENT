var myVar = document.querySelector('img');

var arr = ["https://i.ibb.co/F57Cmwd/1.png", "https://i.ibb.co/SdNFS8d/2.png", "https://i.ibb.co/jgSXf8K/3.png"];
var cont = 0;
function next_btn()
{
    cont++;
    if (cont >= arr.length)
    {
        cont = 0;
        myVar.src = arr[cont];
    }
    else 
    {
        myVar.src = arr[cont];
    }
    console.log(cont)
}

function pre_btn()
{
    cont--;
    if (cont < 0 )
    {
        cont = arr.length - 1;
    }
    myVar.src = arr[cont];
}