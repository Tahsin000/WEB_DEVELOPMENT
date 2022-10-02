## DECIMAL-BINARY CONVERTER
### Asstes Folder allocation
[Click ME](https://github.com/Tahsin000/WEB_DEVELOPMENT/tree/master/JAVASCRIPT/JS_30TH_DAYS_PROJECT/DECIMAL-BINARY%20CONVERTER/assets)

### Files Tree 
- index.html
- assets
  - IMG.png
  - script.js
  - style.css


## HTML 
``` html 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="assets/style.css" />
    <title>Document</title>
  </head>
  <body>
    <div class="container">
      <h1>Decimal Binary Converter</h1>
      <div class="wrapper">
        <div class="input-weapper">
          <label for="dec-inp">Decimal: </label>
          <input type="number" id="dec-inp" />
        </div>
        <div class="input-wrapper">
          <label for="bin-inp">Binary: </label>
          <input type="number" id="bin-inp" />
        </div>
      </div>
      <p id="error-msg"></p>
    </div>
    <!-- script file -->
    <script src="assets/script.js"></script>
  </body>
</html>

```

## CSS
``` css
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body {
  background-color: #80cc9f;
}
.container {
  background-color: rgba(32, 32, 32, 0.9);
  width: 80vmin;
  max-width: 37.5em;
  padding: 3em 2.5em;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 0.62em;
  box-shadow: 0 1.2em 2.5em rgba(0, 21, 44, 0.18);
}
h1 {
  font-size: 1.8em;
  color: #ffffff;
  text-align: center;
  font-weight: 600;
  letter-spacing: 0.5px;
  margin-bottom: 1.3em;
}
.wrapper {
  display: flex;
  justify-content: space-between;
  gap: 1.8em;
}
label {
  display: block;
  margin-bottom: 0.5em;
  font-weight: 500;
  color: #c5c5c5;
}
input {
  position: relative;
  font-size: 1.1em;
  width: 100%;
  padding: 0.5em;
  border-radius: 0.2em;
  border: 1.5px solid #43405c;
  color: #43405c;
  outline: none;
}
input:focus {
  border-color: #0075ff;
}
#error-msg {
  text-align: center;
  margin-top: 1.25em;
  color: #ff4362;
}

```

## Live Preview 
[Click ME](https://tahsin000.github.io/WEB_DEVELOPMENT/JAVASCRIPT/JS_30TH_DAYS_PROJECT/DECIMAL-BINARY%20CONVERTER/index.html)
