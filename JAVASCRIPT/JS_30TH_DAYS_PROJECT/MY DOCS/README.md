# Newton's Forward Calculator

## Live view: [Cilck ME](https://tahsin000.github.io/WEB_DEVELOPMENT/JAVASCRIPT/JS_30TH_DAYS_PROJECT/NEWTON'S%20FORWARD/NEWTON'S%20FORWARD%20CALCULATOR.html)

## Code view: [Clik ME](https://github.com/Tahsin000/WEB_DEVELOPMENT/blob/JAVASCRIPT/JAVASCRIPT/JS_30TH_DAYS_PROJECT/NEWTON'S%20FORWARD/NEWTON'S%20FORWARD%20CALCULATOR.html)

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <title>Newton's Forward Calculator</title>
  </head>
  <body>
    <div class="container">
      <h1>Newton's Forward Calculator</h1>
      <div class="Input">
        <div class="Input-inch">
          <input
            type="text"
            id="inch"
            placeholder="Enter Y value"
            onkeyup="myInputInch()"
          />
        </div>
        <div class="Input-feet">
          <input
            type="text"
            id="feet"
            placeholder="output"
            disabled
          />
        </div>
      </div>
      <h3 id="warning"></h3>
    </div>
    <script src="js/script.js"></script>
  </body>
</html>

```

### CSS

```css
* {
        padding: 0;
        margin: 0;
      }
      .container {
        text-align: center;
        font-family: monospace;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: bisque;
        flex-direction: column;
      }
      h1 {
        font-size: 2rem;
        font-weight: 700;
        margin-bottom: 2rem;
      }
      h2 {
        font-size: 2rem;
        font-weight: 700;
      }
      .output {
        color: white;
        background-color: #8b7354;
        border-radius: 20px;
      }
      .Input-inch,
      .Input-feet {
        height: 5em;
        margin: 10px;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        border: 2px solid #282827;
        border-radius: 5px;
      }
      .Input-inch input,
      .Input-feet input {
        border-radius: 5px;
        width: 90%;
        height: 100%;
        font-size: 1rem;
        font-weight: 600;
        background-color: #ffe6c6;
        /* background-color: #39332c; */
        border: 0;
      }
      input:focus {
        outline: none;
      }
      .Input {
        display: flex;
        justify-content: space-around;
        gap: 1rem;
      }
```

### JS

```jsx
function myInputInch() {
        var feet = document.getElementById("feet");
        var inch = document.getElementById("inch").value;
        var ans ;
        if (inch.includes(',')) document.getElementById("warning").innerHTML ='Do not use comma sign, use space';
        else {
            document.getElementById("warning").innerHTML ='';
            let tmp = inch.split(' ');
            let numbers=[];
            for(let i=0; i<tmp.length; i++){
                numbers.push(parseInt(tmp[i]));
            }
            let n = numbers.length;
            for(let i=0; i<n-1; i++){
                for(let j=0; j<n-1; j++){
                    numbers[j] = numbers[j+1] - numbers[j];
                }
            }
            // console.log(numbers[0]);
            feet.value = numbers[0];
        }
    }
```
