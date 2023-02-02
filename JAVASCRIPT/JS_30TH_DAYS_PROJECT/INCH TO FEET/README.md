# Inch to Feet

## Live view: [Cilck ME](https://tahsin000.github.io/WEB_DEVELOPMENT/JAVASCRIPT/JS_30TH_DAYS_PROJECT/INCH%20TO%20FEET/index.html)

## Code view: [Clik ME](https://github.com/Tahsin000/WEB_DEVELOPMENT/tree/JAVASCRIPT/JAVASCRIPT/JS_30TH_DAYS_PROJECT/INCH%20TO%20FEET#js)

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css">
    <title>Inch to Feet</title>
  </head>
  <body>
    <div class="container">
      <h1>INCH TO FEET</h1>
      <div class="Input">
        <div class="Input-inch">
          <input
            type="number"
            id="inch"
            placeholder="inch"
            onkeyup="myInputInch()"
          />
        </div>
        <div class="Input-feet">
          <input
            onkeyup="myInputFeet()"
            type="number"
            id="feet"
            placeholder="feet"
          />
        </div>
      </div>
    </div>
    <script src="js/script.js"></script>
  </body>
</html>
```

### CSS

```css
*{
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
  font-size: 3rem;
  font-weight: 700;
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
function myInputFeet() {
    var feet = document.getElementById("feet").value;
    var inch = document.getElementById("inch");
    var ans = feet * 12;
    inch.value = ans;
}
function myInputInch() {
    var feet = document.getElementById("feet");
    var inch = document.getElementById("inch").value;
    var ans = inch / 12;
    feet.value = ans;
}
```
