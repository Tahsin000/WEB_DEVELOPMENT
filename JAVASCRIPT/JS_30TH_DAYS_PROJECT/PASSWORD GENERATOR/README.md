# PASSWORD GENERATOR

### Live Preview - [Click ME](https://tahsin000.github.io/WEB_DEVELOPMENT/JAVASCRIPT/JS_30TH_DAYS_PROJECT/PASSWORD%20GENERATOR/assets/index.html)

### Asstes Folder allocation - [Click ME](https://github.com/Tahsin000/WEB_DEVELOPMENT/tree/master/JAVASCRIPT/JS_30TH_DAYS_PROJECT/PASSWORD%20GENERATOR/assets)

### Files Tree

- assets
  - index.html
  - style.css
  - script.js

## HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <!-- google Icon link for Icons -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Material+Symbols+Rounded:%20opsz,%20wght,%20FILL,%20GRAD@20..48,100..700,0..1,-50..200"
    />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <h2>Password Generator</h2>
      <div class="wrapper">
        <div class="input-box">
          <input type="text" disabled />
          <!--value="e7_5y^BmArJ10*WQBDx-y@~5s" -->
          <span class="material-symbols-rounded">copy_all</span>
        </div>
        <div class="pass-indicator"></div>
        <div class="pass-length">
          <div class="details">
            <div class="title">Password Length</div>
            <span></span>
          </div>
          <input class="inputBG" type="range" min="1" max="30" step="1" />
        </div>
        <div class="pass-settings">
          <div class="title">Password Settings</div>
          <ul class="options">
            <li class="option">
              <input type="checkbox" id="lowercase" checked />
              <label for="lowercase">Lowercase (a-z)</label>
            </li>
            <li class="option">
              <input type="checkbox" id="uppercase" />
              <label for="uppercase">Uppercase (A-Z)</label>
            </li>
            <li class="option">
              <input type="checkbox" id="number" />
              <label for="number">Number (0-9)</label>
            </li>
            <li class="option">
              <input type="checkbox" id="symbols" />
              <label for="symbols">Symbols (!-$^+)</label>
            </li>
            <li class="option">
              <input type="checkbox" id="exc-duplicate" />
              <label for="exc-duplicate">Exc-duplicate</label>
            </li>
            <li class="option">
              <input type="checkbox" id="spaces" />
              <label for="spaces">Include Spaces</label>
            </li>
          </ul>
        </div>
        <button class="generate-btn">Generate Password</button>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

## CSS

```css
@import url("https://fonts.googleapis.com/css?family=Poppins:wght@400;500;600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #80cc9f;
}
.container {
  width: 450px;
  background: rgba(32, 32, 32, 0.9);
  border-radius: 8px;
}
.container h2 {
  font-weight: 600;
  font-size: 1.31rem;
  color: #fff;
  padding: 1rem 1.175rem;
  border-bottom: 1px solid #d4dbe5;
}
.wrapper {
  margin: 1.25rem 1.75rem;
}
.wrapper .input-box {
  position: relative;
  background: #80cc9f;
}
.input-box input {
  width: 100%;
  height: 53px;
  color: #000;
  background: none;
  font-size: 1.06rem;
  font-weight: 600;
  border-radius: 4px;
  letter-spacing: 1.4px;
  border: 1px solid #aaa;
  padding: 0 2.85rem 0 1rem;
}
.input-box span {
  position: absolute;
  right: 13px;
  cursor: pointer;
  line-height: 53px;
  color: #000;
}
.title,
label,
.details span {
  color: #80cc9f;
}
.wrapper .pass-indicator {
  width: 100%;
  height: 4px;
  position: relative;
  background: #dfdfdf;
  margin-top: 0.75rem;
  border-radius: 25px;
}
.pass-indicator::before {
  position: absolute;
  content: "";
  height: 100%;
  width: 50%;
  border-radius: inherit;
  transition: width 0.3s ease;
  /* background: #f1c80b; */
}
.pass-indicator#weak::before {
  width: 20%;
  background: #e64a4a;
}
.pass-indicator#medium::before {
  width: 50%;
  background: #f1c80b;
}
.pass-indicator#strong::before {
  width: 100%;
  background: #43b522;
}
.wrapper .pass-length {
  margin: 1.56rem 0 1.25rem;
}
.pass-length .details {
  display: flex;
  justify-content: space-between;
}
.pass-length input {
  width: 100%;
  height: 5px;
}
.pass-settings .options {
  display: flex;
  list-style: none;
  flex-wrap: wrap;
  margin-top: 1rem;
}
.pass-settings .options .option {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  width: calc(100% / 2);
}
.options .option:first-child {
  pointer-events: none;
}
.options .option:first-child input {
  opacity: 0.7;
}
.options .option input {
  height: 16px;
  width: 16px;
  cursor: pointer;
}
.options .option label {
  cursor: pointer;
  padding-left: 0.63rem;
}
.wrapper .generate-btn {
  width: 100%;
  color: rgba(32, 32, 32, 0.9);
  border: none;
  outline: none;
  cursor: pointer;
  background: #80cc9f;
  font-size: 1.06rem;
  padding: 0.94rem 0;
  border-radius: 5px;
  text-transform: uppercase;
  margin: 0.94rem 0 1.3rem;
}
```

## JavaScript

```javascript
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
};

const generatePassword = () => {
  let staticPassword = "";
  randomPassword = "";
  exludeDulicate = false;
  passLength = lengthSlider.value;
  options.forEach((option) => {
    if (option.checked) {
      if (option.id !== "exc-duplicate" && option.id !== "spaces") {
        staticPassword += characters[option.id];
      } else if (option.id !== "spaces") {
        staticPassword += `   ${staticPassword}   `;
      } else {
        exludeDulicate = true;
      }
    }
  });
  for (let i = 0; i < passLength; i++) {
    let randomChar =
      staticPassword[Math.floor(Math.random() * staticPassword.length)];
    if (exludeDulicate) {
      !randomPassword.includes(randomChar) || randomChar == " "
        ? (randomPassword += randomChar)
        : i--;
    } else {
      randomPassword += randomChar;
    }
  }
  passwordInput.value = randomPassword;
  // console.log(randomPassword);
};

const updatePassIndicator = () => {
  passIndicator.id =
    lengthSlider.value <= 8
      ? "weak"
      : lengthSlider.value <= 16
      ? "medium"
      : "strong";
};

const updateSlider = () => {
  // console.log(lengthSlider.value); // testing
  //passing slider values as counter text
  document.querySelector(".pass-length span").innerText = lengthSlider.value;
  generatePassword();
  updatePassIndicator();
};
updateSlider();

const copyPassword = () => {
  navigator.clipboard.writeText(passwordInput.value);
  copyIcon.innerText = "check";
  setTimeout(() => {
    copyIcon.innerText = "copy_all";
  }, 1500);
};
copyIcon.addEventListener("click", copyPassword);
lengthSlider.addEventListener("input", updateSlider);
generateBin.addEventListener("click", generatePassword);
```
