const bill = document.getElementById("bill");
const reset = document.getElementById("reset");
const inputFields = document.getElementsByClassName("inputField");
const people = document.getElementById("people");
const tip = document.getElementsByClassName("button");
const custom = document.getElementById("custom");
const tipOutput = document.getElementById("tip-output");
const total = document.getElementById("total-output");

reset.addEventListener('click', resetAll);
reset.addEventListener('mouseenter', resetHoverIn);
reset.addEventListener('mouseout', resetHoverOut);
bill.addEventListener('keyup', keypressDetect);
people.addEventListener('keyup', keypressDetect);
custom.addEventListener('keyup', customTip);

var tipPercent = 0;


window.onload = resetAll;

for (i = 0; i < tip.length; i++){
    tip[i].addEventListener("click", tipDetect);
}

// WHEN A CUSTOM TIP AMOUNT IS ENTERED
function customTip(e) {
    tipPercent = e.target.value;
    // billCalculate();
    keypressDetect(e);
}


// WHEN A TIP BUTTON IS SELECTED
function tipDetect(e){
    custom.value = "";
    tipPercent = parseFloat(e.target.value);
    billCalculate();
    
}



// CLEARS OUT ALL INPUT FIELD ON PAGE REFRESH
function resetAll(e){
    for (i = 0; i < inputFields.length; i++){
        inputFields[i].value = "";
    };
    custom.value = "";
    people.value = 1;
    tipPercent = "";

    // tipOutput.innerText = `${0.toFixed(2)}`;
    // total.innerText = `${0.toFixed(2)}`;

    tipOutput.innerText = "$0.00";
    total.innerText = "$0.00";

    resetColorChanger();
}

function resetColorChanger(){
    if(bill.value == "" && custom.value == "" && tipPercent == "" && people.value == 1){
        reset.style.backgroundColor = "hsl(186, 14%, 43%)";
        reset.style.color = "hsl(183, 100%, 15%)";
    } else if (bill.value != "" || custom.value != "" || tipPercent != "" || people.value != 1) {
        reset.style.backgroundColor = "hsl(172, 67%, 45%)";
    }
}

function resetHoverIn(){
    console.log('mouseEnter');
    reset.style.backgroundColor = "hsl(185, 41%, 84%)";
    // reset.style.color = "white";
    
}

function resetHoverOut(){
    console.log('mouseLeave');
    reset.style.color = "hsl(183, 100%, 15%)";
    resetColorChanger();  
}


// WHENEVER KEYPRESS OCCURS IN ANY INPUT FIELD
function keypressDetect(e){
    resetColorChanger();

    billCalculate();
}


// ALLOWS ONLY NUMERIC VALUES IN THE BILL FIELD
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


// RESTRICTS ENTERED BILL TO 2 DECIMAL PLACES IN OUTPUT
function setTwoNumberDecimal(event) {
    return parseFloat(event.target.value).toFixed(2);
};


// BILL CALCULATION
function billCalculate(){
    if(people.value == 0 || people.value == ""){
        document.getElementById("people-error").className = "people-error-show";
        total.innerText = `N/A`;
        tipOutput.innerText = `N/A`;
    } else if (bill.value == 0 && people.value > 0) {
        document.getElementById("people-error").className = "people-error";
        var tipAmount = 0;
        var tipPP = 0;
        tipOutput.innerText = parseFloat(tipPP).toFixed(2);
        total.innerText = parseFloat(0).toFixed(2);
    } 
    
    
    else {
        document.getElementById("people-error").className = "people-error";

        // var billValue = bill.value;

        if(bill.value == ""){
            total.innerText = `$0.00`;
        } else {
            var grossBill = parseFloat(bill.value);
            var tipAmount = grossBill * (tipPercent/100);
            var tipPP = tipAmount / people.value;
            tipOutput.innerText = parseFloat(tipPP).toFixed(2);
            totalPP = (grossBill + tipAmount) / people.value;
            total.innerText = parseFloat(totalPP).toFixed(2);     
        }
    }
};