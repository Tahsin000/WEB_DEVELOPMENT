// Initial References 
let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

// Convert decimal to binary when user input in the decimal field
decInp.addEventListener("input", ()=>{
    let decValue = parseInt(decInp.value);
    // converts the decimal value to dinary
    binInp.value = decValue.toString(2);
});

// Convert binary to decimal when user input in the binary field
binInp.addEventListener("input", ()=>{
    let binValue = binInp.value;
    // if the binary number is valid convert it to decimal
    if (binValidator(binValue)){
         decInp.value = parseInt(binValue, 2);
         errorMsg.textContent = "";
    }
    // else id display an error message 
    else {
        errorMsg.textContent = "Please Enter An Valid Binary Input";
    }
    // function to check if the binary number to valid or other wase does not contain any number other then 0
    function binValidator(num){
        for(let i = 0; i<num.length; i++){
            if (num[i] != "0" && num[i] != "1"){
                return false;
            }
        }
        return true
    }
});

