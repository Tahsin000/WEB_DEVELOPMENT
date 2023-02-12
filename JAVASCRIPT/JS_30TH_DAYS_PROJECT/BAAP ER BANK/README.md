# BAAP ER BANK

## Live view: [Cilck ME](https://tahsin000.github.io/WEB_DEVELOPMENT/JAVASCRIPT/JS_30TH_DAYS_PROJECT/BAAP%20ER%20BANK/assets/login.html)

## Code view: [Clik ME](https://github.com/Tahsin000/WEB_DEVELOPMENT/blob/JAVASCRIPT/JAVASCRIPT/JS_30TH_DAYS_PROJECT/BAAP%20ER%20BANK/assets/login.html)

### HTML

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Home</title>
    <script src="tailwind.css"></script>
  </head>
  <body>
    <section class="grid grid-cols-1">
      <div
        class="font-['poppins'] login-section flex justify-center items-center h-screen bg-red-400"
      >
        <div class="md:w-1/4 h-1/4">
          <div class="userID flex flex-col">
            <label for="" class="text-white font-light text-lg"
              >Username :
            </label>
            <input
              class="mt-2 rounded-md p-2"
              type="email"
              name=""
              id="username"
            />
          </div>
          <div class="userPin flex flex-col mt-5">
            <label for="" class="text-white font-light text-lg"
              >Password :
            </label>
            <input
              class="mt-2 rounded-md p-2"
              type="password"
              name=""
              id="userPassword"
            />
          </div>
          <div class="flex justify-center items-center mt-7">
            <button class="loginBtn bg-red-100 px-7 py-2 rounded-md">
              Login
            </button>
          </div>
          <p class="p-2 mt-1 warning text-gray-800 text-center"></p>
        </div>
      </div>
    </section>
    <script src="script.js"></script>
  </body>
</html>

```
### JS

```jsx
document.getElementsByClassName('loginBtn')[0].addEventListener('click', ()=>{
    const userName = document.getElementById('username').value;
    const userPassword = document.getElementById('userPassword').value;
    if (userName === "" || userPassword=== ""){
        document.getElementsByClassName('warning')[0].innerHTML = 'Input error!!!'
    }
    else if(userName == 'tahsin000' && userPassword == 'tahsin000'){
        const url = 'index.html'
        console.log('check');
        document.getElementById('username').value = '';
        document.getElementById('userPassword').value='';
        window.open(url, '_blank');
    }
    else{
        document.getElementById('username').value = '';
        document.getElementById('userPassword').value='';
        document.getElementsByClassName('warning')[0].innerHTML = 'username or password error!!'
    }
});

document.getElementById('depositBtn').addEventListener('click', ()=>{
    const userDeposit = document.getElementById('depositInput').value;
    /*
        1. isNull
        2. isChar 
    */ 
if  ((userDeposit.includes('.'))|| (userDeposit==="") || (/[a-zA-Z]/).test(userDeposit)) {
    document.getElementById('depositInput').value='';
    alert("Don't leave empty, enter amount.");
}
else {
    let totalDeposit = parseInt(document.getElementsByClassName('depositInfo')[0].innerHTML);
    let totalBalance = parseInt(document.getElementsByClassName('balanceInfo')[0].innerHTML);
    totalDeposit += parseInt(userDeposit);
    totalBalance += parseInt(userDeposit);
    console.log(totalBalance);
    document.getElementsByClassName('depositInfo')[0].innerHTML = totalDeposit;
    document.getElementsByClassName('balanceInfo')[0].innerHTML = totalBalance;
    document.getElementById('depositInput').value = '';
}

//    console.log((userDeposit==="") || (/[a-zA-Z]/).test(userDeposit));
//    if (userDeposit === '')
});
document.getElementById('withdrawBtn').addEventListener('click', ()=>{
    const userWithdraw = document.getElementById('withdrawInput').value;
    /*
        1. isNull
        2. isChar 
    */ 
if  ((userWithdraw.includes('.'))|| (userWithdraw==="") || (/[a-zA-Z]/).test(userWithdraw)) {
    document.getElementById('withdrawInput').value='';
    alert("Don't leave empty, enter amount.");
}
else {
    let totalWithdraw = parseInt(document.getElementsByClassName('withdrawInfo')[0].innerHTML);
    let totalBalance = parseInt(document.getElementsByClassName('balanceInfo')[0].innerHTML);
    if (totalBalance < userWithdraw){
        document.getElementById('withdrawInput').value='';
        alert("You can't withdraw more than balance");
    }else{
        totalWithdraw += parseInt(userWithdraw);
        totalBalance -= parseInt(userWithdraw);
        console.log(totalBalance);
        document.getElementsByClassName('withdrawInfo')[0].innerHTML = totalWithdraw;
        document.getElementsByClassName('balanceInfo')[0].innerHTML = totalBalance;
        document.getElementById('withdrawInput').value = '';
    }
}

//    console.log((userWithdraw==="") || (/[a-zA-Z]/).test(userWithdraw));
//    if (userWithdraw === '')
});
```
