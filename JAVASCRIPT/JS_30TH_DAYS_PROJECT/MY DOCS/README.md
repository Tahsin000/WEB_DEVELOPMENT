# MY DOCS

## Live view: [Cilck ME](https://tahsin000.github.io/WEB_DEVELOPMENT/JAVASCRIPT/JS_30TH_DAYS_PROJECT/MY%20DOCS/index.html)

## Code view: [Click ME](https://github.com/Tahsin000/WEB_DEVELOPMENT/blob/JAVASCRIPT/JAVASCRIPT/JS_30TH_DAYS_PROJECT/MY%20DOCS/index.html)

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="css/style.css" />
    <script src="https://kit.fontawesome.com/d7b7563d24.js" crossorigin="anonymous"></script>
    <script src="js/tailwindcss.js"></script>
    <title>My Docs</title>
  </head>
  <body>
    <div class="container mx-auto">
      <div class="textInputBg bg-green-200 h-screen flex flex-col p-5 items-center justify-around">
        <h1 class="text-green-900 text-3xl font-bold">My Docs</h1>
        <div class="w-full flex justify-between items-center gap-5">
          <div class=" w-1/2 option-1">
            <div class="flex gap-5 justify-center border-2 border-green-400 rounded-lg">
              <button id="boldBtn" class="p-4 focus:bg-green-300"><i class="fa-solid fa-bold"></i></button>
              <button id="italicBtn" class="p-4 focus:bg-green-300"><i class="fa-solid fa-italic"></i></button>
              <button id="underlineBtn" class="p-4 focus:bg-green-300"><i class="fa-solid fa-underline"></i></button>
            </div>
          </div>
          
          <div class=" w-1/2 option-2">
            <div class="flex gap-5 justify-center border-2 border-green-400 rounded-lg">
              <button id="alignLeftBtn" class="p-4 focus:bg-green-300"><i class="fa-solid fa-align-left"></i></button>
              <button id="alignCenterBtn" class="p-4 focus:bg-green-300"><i class="fa-solid fa-align-center"></i></button>
              <button id="alignRightBtn" class="p-4 focus:bg-green-300"><i class="fa-solid fa-align-right"></i></button>
              <button id="alignJustifyBtn" class="p-4 focus:bg-green-300"><i class="fa-solid fa-align-justify"></i></button>
            </div>
          </div>

          <div class=" w-1/2 option-3">
            <div class="flex gap-5 justify-center border-2 border-green-400 rounded-lg">
              <input id="fontSize" class="p-4 focus:bg-green-300" type="number" value="12">
              <button id="fontCase" class="p-4 focus:bg-green-300"><i class="fa-solid fa-font"></i></button>
              <button class="p-4 focus:bg-green-300"><input id="fontColor" type="color"></button>
            </div>
          </div>
          

        </div>
        <hr
        class="my-7 w-full h-0.5 bg-gray-100 border-0 rounded dark:bg-gray-700"
      />
        <textarea name="" id="textArea" cols="150" rows="30" class="border-4 border-green-400 rounded-lg w-full"></textarea>
      </div>
    </div>
    <script src="js/script.js"></script>
  </body>
</html>

```

### JS

```jsx
const boldBtn = document.getElementById('boldBtn');
const italicBtn = document.getElementById('italicBtn');
const underlineBtn = document.getElementById('underlineBtn');
const alignLeftBtn = document.getElementById('alignLeftBtn');
const alignCenterBtn = document.getElementById('alignCenterBtn');
const alignRightBtn = document.getElementById('alignRightBtn');
const alignJustifyBtn = document.getElementById('alignJustifyBtn');
const textArea = document.getElementById('textArea');
const fontSize = document.getElementById('fontSize');
const fontCase = document.getElementById('fontCase');
const fontColor = document.getElementById('fontColor');

boldBtn.addEventListener('click', ()=>{
    (textArea.style.fontWeight==='bold') ? textArea.style.fontWeight = 'normal' : textArea.style.fontWeight='bold';
});
italicBtn.addEventListener('click', ()=>{
    (textArea.style.fontStyle === 'italic') ? textArea.style.fontStyle = 'normal' : textArea.style.fontStyle = 'italic' ;

});
underlineBtn.addEventListener('click', ()=>{
    (textArea.style.textDecoration==='underline') ? textArea.style.textDecoration='none' : textArea.style.textDecoration='underline';
});
alignLeftBtn.addEventListener('click', ()=>{
    (textArea.style.textAlign==='left') ? textArea.style.textAlign = 'left' : textArea.style.textAlign = 'left';
});
alignRightBtn.addEventListener('click', ()=>{
    (textArea.style.textAlign==='right') ? textArea.style.textAlign='left' :textArea.style.textAlign = 'right';
});
alignCenterBtn.addEventListener('click', ()=>{
    (textArea.style.textAlign==='center') ? textArea.style.textAlign='left' :textArea.style.textAlign = 'center';
});
alignJustifyBtn.addEventListener('click', ()=>{
    (textArea.style.textAlign==='justify') ? textArea.style.textAlign='left' :textArea.style.textAlign = 'justify';
});
fontSize.addEventListener('click', ()=>{
    textArea.style.fontSize=fontSize.value+"px";
});
fontSize.addEventListener('keyup', ()=>{
    textArea.style.fontSize=fontSize.value+"px";
});
fontCase.addEventListener('click', ()=>{
    (textArea.style.textTransform==='uppercase') ? textArea.style.textTransform='none' :textArea.style.textTransform = 'uppercase';
});
fontColor.addEventListener('mouseout', ()=>{
    textArea.style.color=fontColor.value.toString();
    console.log(fontColor.value.toString());
});
```


### TAILWINDCSS [Click ME](https://github.com/Tahsin000/WEB_DEVELOPMENT/blob/JAVASCRIPT/JAVASCRIPT/JS_30TH_DAYS_PROJECT/MY%20DOCS/js/tailwindcss.js)


