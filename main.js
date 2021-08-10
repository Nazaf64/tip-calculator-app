const bill = document.getElementById("bill");
const reset = document.getElementById("reset");
const inputFields = document.getElementsByClassName("inputField");
const people = document.getElementById("people");
const tip = document.getElementById("tip-output");
const total = document.getElementById("total-output");

reset.addEventListener('click', resetAll);
bill.addEventListener('keyup', keypressDetect);
people.addEventListener('keyup', keypressDetect);




window.onload = resetAll;




console.log(people.value);

function resetAll(e){
    for (i = 0; i < inputFields.length; i++){
        inputFields[i].value = "";
    };
    people.value = 1;
}


function keypressDetect(e){
    if(people.value == 0 || people.value == ""){
        document.getElementById("people-error").className = "people-error-show";
        total.innerText = `N/A`;
    } else {
        document.getElementById("people-error").className = "people-error";

        var billValue = bill.value;

        if(billValue == ""){
            total.innerText = `$0.00`;
        } else {
            grossBill = parseFloat(billValue);
            totalPP = grossBill/people.value;
            total.innerText = parseFloat(totalPP).toFixed(2);     
        }
    }




    // var billValue = bill.value;

    // if(billValue == ""){
    //     total.innerText = `$0.00`;
    // } else {
    //     grossBill = parseFloat(billValue);
    //     totalPP = grossBill/people.value;
    //     total.innerText = parseFloat(totalPP).toFixed(2);     
    // }
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