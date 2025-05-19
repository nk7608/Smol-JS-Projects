const checkList = document.getElementById("checkList");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const submitBtn = document.getElementById("submitBtn");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");
let age = 0;

submitBtn.onclick = function(){

   if(checkList.checked){
    subResult.textContent = `You're subscribed!`;
   }
   else{
    subResult.textContent = `You're NOT subscribed!`;
   }

   if(visaBtn.checked){
    paymentResult.textContent = `You're paying with VISA`;
   }
   else if(masterCardBtn.checked){
    paymentResult.textContent = `You're paying with MasterCard!`;
   }
   else if(payPalBtn.checked){
    paymentResult.textContent = `You're paying with PayPal!`;
   }
   else{
    paymentResult.textContent = `You must select a payment type!`;
   }
}