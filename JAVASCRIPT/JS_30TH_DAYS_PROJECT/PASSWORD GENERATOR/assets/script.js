const lengthSlider = document.querySelector(".pass-length input");
options = document.querySelectorAll(".option input");
passwordInput = document.querySelector(".input-box input");
passIndicator = document.querySelector(".pass-indicator");
copyIcon = document.querySelector(".input-box span");
generateBin = document.querySelector(".generate-btn");

const characters = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    number: "0123456789",
    symbols: "^!$%&[[](){};;•,*+-#@<>~*",
}

const generatePassword = () =>{
    let staticPassword = "";
    randomPassword = "";
    exludeDulicate = false;
    passLength = lengthSlider.value;
    options.forEach(option =>{
        if (option.checked){
            if (option.id !== "exc-duplicate" && option.id !== "spaces"){
                staticPassword += characters[option.id];
            } else if (option.id !== "spaces"){
                staticPassword += `   ${staticPassword}   `;
            } else {
                exludeDulicate = true;
            }
        }
    });
    for (let i = 0; i < passLength; i++) {
        let randomChar = staticPassword[Math.floor(Math.random() * staticPassword.length)];
        if (exludeDulicate){
            !randomPassword.includes(randomChar) || randomChar == " " ? randomPassword += randomChar : i--;
        } else {
            randomPassword += randomChar;
        }
    }
    passwordInput.value = randomPassword;
    // console.log(randomPassword);
}

const updatePassIndicator = () =>{
    passIndicator.id = lengthSlider.value <= 8 ? "weak" : lengthSlider.value <= 16 ? "medium" : "strong";
}

const updateSlider = () =>{
    // console.log(lengthSlider.value); // testing
    //passing slider values as counter text
    document.querySelector(".pass-length span").innerText = lengthSlider.value;
    generatePassword();
    updatePassIndicator();
}
updateSlider();

const copyPassword = () => {
    navigator.clipboard.writeText(passwordInput.value);
    copyIcon.innerText = "check";
    setTimeout(()=>{
        copyIcon.innerText = "copy_all";
    }, 1500);
}
copyIcon.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateSlider);
generateBin.addEventListener("click", generatePassword);

