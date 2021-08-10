console.log("hello");

const bill = document.getElementById("bill");
const reset = document.getElementById("reset");
const inputFields = document.getElementsByClassName("inputField");
const people = document.getElementById("people");
const tip = document.getElementById("tip-output");
const total = document.getElementById("total-output");

reset.addEventListener('click', resetAll);
bill.addEventListener('keyup', keypressDetect);



window.onload = resetAll;

function resetAll(e){
    for (i = 0; i < inputFields.length; i++){
        inputFields[i].value = "";
    };
}

function keypressDetect(e){
    // console.log(e);
    // console.log(e.charCode);
    // console.log(e.key);
    // if(e.charCode >= 48 && e.charCode <= 57){
        
    //     return e.key;
    // } 
    // console.log(bill.value);
    // console.log(e.keyCode);
    // console.log(e.which);


    var billValue = bill.value;
    if(billValue == ""){
        total.innerText = `$0.00`;
    } else {

        total.innerText = parseFloat(billValue).toFixed(2);
        // decimalNumber = bill.value - Math.floor(bill.value);
        
        // if (decimalNumber == 0) {
        //     total.innerText = `$${billValue}.00`; 
        // } else if (decimalNumber != 0){
        //     // decimalNumber = Math.abs(decimalNumber);
        //     // total.innerText = `$${billValue}.${decimalNumber}`;

        //     // total.innerText = `$${billValue}`;
        //     twoDecimalNumber = bill.value;
        //     twoDecimalNumberFloat = parseFloat(twoDecimalNumber);
        //     showDecimalNumber = twoDecimalNumberFloat.toFixed(2);
        //     total.innerText = `$${showDecimalNumber}`;

        // }

        // total.innerText = `$${billValue}`;
    }
    // total.innerText = bill.value;
}


function isNumberKey(txt, evt) {
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode == 46) {
      //Check if the text already contains the . character
      if (txt.value.indexOf('.') === -1) {
        return true;
      } else {
        return false;
      }
    } else {
      if (charCode > 31 &&
        (charCode < 48 || charCode > 57))
        return false;
    }
    return true;
  }


  function setTwoNumberDecimal(event) {
    return parseFloat(event.target.value).toFixed(2);
}