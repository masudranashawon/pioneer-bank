"use strict";
// LOGIN SECTION START
function submit(){
let loginSection =  document.getElementById("login-section");
let accountSection =  document.getElementById("account-section");
let userNameBlank = document.getElementById("email");
let userPasswordBlank = document.getElementById("pass");
let userName = document.getElementById("email").value;
let userPassword = document.getElementById("pass").value;
let modal=  document.getElementById("modal-content");
// let body= document.querySelector("body");;
let admin = "abcd@gmail.com";
let adminPass = "12345678";

if ( userName == admin && userPassword == adminPass ) {
    loginSection.style.display="none";
    accountSection.style.display="block"; 
} else if ( userName == "" && userPassword == "") {
    
    modal.innerHTML="You can't leave blank username and password !";
    
    modal.style.display="block";
    userNameBlank.style.border="1px solid #e22424";
    userNameBlank.style.boxShadow="0 0 0 .2rem rgba(255, 0, 0, 0.25)";
    userPasswordBlank.style.border="1px solid #e22424";
    userPasswordBlank.style.boxShadow="0 0 0 .2rem rgba(255, 0, 0, 0.25)";
} else if ( userName == admin) {
    modal.innerText="Incorrect password !";
    modal.style.display="block";
    userPasswordBlank.style.border="1px solid #e22424";
    userPasswordBlank.style.boxShadow="0 0 0 .2rem rgba(255, 0, 0, 0.25)";
    userPasswordBlank.value="";
    userPasswordBlank.placeholder="Password must be 8 characters";
} else if ( userPassword == adminPass ){
    modal.innerText="Incorrect username !";
    modal.style.display="block";
    userNameBlank.style.border="1px solid #e22424";
    userNameBlank.style.boxShadow="0 0 0 .2rem rgba(255, 0, 0, 0.25)";
    userNameBlank.value="";
    userNameBlank.placeholder="example@gmail.com";
} else {
    modal.innerText="Incorrect username & password !";
    modal.style.display="block";
    userNameBlank.style.border="1px solid #e22424";
    userNameBlank.style.boxShadow="0 0 0 .2rem rgba(255, 0, 0, 0.25)";
    userPasswordBlank.style.border="1px solid #e22424";
    userPasswordBlank.style.boxShadow="0 0 0 .2rem rgba(255, 0, 0, 0.25)";
    userNameBlank.value="";
    userNameBlank.placeholder="example@gmail.com";
    userPasswordBlank.value="";
    userPasswordBlank.placeholder="Password must be 8 characters";
};
userNameBlank.onclick = function() {
    modal.style.display = "none";
  };
  userPasswordBlank.onclick = function() {
    modal.style.display = "none";
  };
};

// LOGIN SECTION END

// TRANSECTTION SECTION START
function dipositmony() {
    let diposit = document.getElementById("diposit").value;
    console.log("Diposit: "+diposit);
    if ( diposit == "" ) {
        alert("Enter a valid amount");
        diposit = 0;
    } ;
    diposit = parseInt(diposit); 
    console.log("Diposit: "+diposit);
    if ( diposit > 99999999999 ) {
        alert("Amount is to high");
        diposit = 0;
    } ;
    let balance = document.getElementById("balance").innerHTML;
    balance = parseInt(balance);
    console.log("Balance data: "+balance);
    
    let balance2 = balance + diposit;
    document.getElementById("balance").innerHTML = balance2;
    document.getElementById("diposit").value = "";
    
    console.log("Balance new data: "+balance2);

    let totalBalence = document.getElementById("totalbalance").innerHTML;
    totalBalence = parseInt(totalBalence);
    console.log(totalBalence);
    let subTotalBalence = totalBalence + diposit;
    document.getElementById("totalbalance").innerHTML = subTotalBalence;
    console.log("Subtotal balance: "+subTotalBalence);
};

function creditmony() {
    let credit = document.getElementById("credit").value;
    if ( credit == "" ) {
        alert("Enter a valid amount");
        credit = 0;
    };
    credit= parseInt(credit);
    console.log("credit"+credit);
    let crbalance = document.getElementById("crbalance").innerHTML;
    crbalance = parseInt(crbalance);
    console.log("Credit data: "+crbalance);
    let totalCredit = crbalance + credit;
    document.getElementById("credit").value = "";
   
    document.getElementById("crbalance").innerHTML = totalCredit;
    console.log("Credit new data: "+totalCredit);

    let totalBalence = document.getElementById("totalbalance").innerHTML;
    totalBalence = parseInt(totalBalence);
    
    let subTotalBalence = totalBalence - credit;
    if ( credit >= subTotalBalence ) {
        alert('Have not sufficient balance\nIt refund after next diposit');
    }
    document.getElementById("totalbalance").innerHTML = subTotalBalence;
    console.log("Subtotal balance: "+subTotalBalence)
    };
// TRANSECTTION SECTION END