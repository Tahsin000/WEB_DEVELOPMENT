# GEOMETRY-GENIUS

### Live Preview - [Click ME]()

### Code Preview - [Click ME]()

### Files Tree

- assets
  - ans html
  - images
  - js
  - style
  - Blog.html
  - index.html
  - README.md

## Script.js

```javascript
// ____________________________________
//              triangle
// ____________________________________
const TriangleCalculate = getID("TriangleCalculate");

TriangleCalculate.addEventListener("click", (e) => {
  addcalculationEvent(
    "TriangleInput1",
    "TriangleInput2",
    "warningTriangle",
    "Triangle"
  );
});
// ____________________________________
//              Rectangle
// ____________________________________
rectangleCalculate.addEventListener("click", (e) => {
  addcalculationEvent(
    "RectangleInput1",
    "RectangleInput2",
    "warningRectangle",
    "Rectangle"
  );
});
// ____________________________________
//              Parallelogram
// ____________________________________
parallelogramCalculate.addEventListener("click", (e) => {
  addcalculationEvent(
    "ParallelogramInput1",
    "ParallelogramInput2",
    "warningParallelogram",
    "Parallelogram"
  );
});
// ____________________________________
//              Rhombus
// ____________________________________
rhombusCalculate.addEventListener("click", (e) => {
  addcalculationEvent(
    "RhombusInput1",
    "RhombusInput2",
    "warningRhombus",
    "Rhombus"
  );
});
// ____________________________________
//              Pentagon
// ____________________________________
pentagonCalculate.addEventListener("click", (e) => {
  addcalculationEvent(
    "PentagonInput1",
    "PentagonInput2",
    "warningPentagon",
    "Pentagon"
  );
});
// ____________________________________
//              Ellipse
// ____________________________________
ellipseCalculate.addEventListener("click", (e) => {
  addcalculationEvent(
    "EllipseInput1",
    "EllipseInput2",
    "warningEllipse",
    "Ellipse"
  );
});
```

## Function.js

```javascript
function calculation(input1, input2, formula) {
  if (
    "Triangle" === formula ||
    "Rhombus" === formula ||
    "Pentagon" === formula
  ) {
    return (0.5 * input1 * input2).toFixed(2);
  } else if ("Rectangle" === formula || "Parallelogram" === formula) {
    return input1 * input2;
  } else if ("Ellipse" === formula) {
    return (Math.PI * input1 * input2).toFixed(2);
  }
}

function getID(IdName) {
  return document.getElementById(IdName);
}
function getInnerText(IdName) {
  return document.getElementById(IdName).innerText;
}
function getValue(IdName) {
  return document.getElementById(IdName).value;
}

function addcalculationEvent(
  peromiter1,
  paromiter2,
  warningName,
  calculationName
) {
  const input1 = getValue(peromiter1);
  const input2 = getValue(paromiter2);
  const childCount = getID("AreaCalculation").childElementCount;
  const warning = getID(warningName);

  if (isNaN(parseInt(input1)) === false && isNaN(parseInt(input2)) === false) {
    const cal = calculation(input1, input2, calculationName);
    // console.log()
    // console.log(calculation(getID(TriangleInput1).value));
    // const temp = getID('TriangleInput1').value;
    // console.log(e.target.parentNode.childNodo);
    let ans = document.createElement("h2");
    ans.style.fontSize = "1.65rem";
    ans.innerText = childCount + 1 + ". " + calculationName + " Area: " + cal;
    document.getElementById("AreaCalculation").appendChild(ans);
    warning.style.display = "none";
    let tmp = getID(peromiter1);
    tmp.value = "";
    tmp = getID(paromiter2);
    tmp.value = "";
  } else {
    warning.style.display = "block";
  }
}
```
