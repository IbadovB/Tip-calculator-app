const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPerPerson = document.querySelector("#tip-amount");
const totalPerPerson = document.querySelector("#total-amount");
const tips = document.querySelectorAll('.tips');
const tipCustom = document.querySelector(".tip-custom");
const resetBtn = document.querySelector(".reset");
const error = document.querySelector(".error");
const error2 = document.querySelector(".error2");


billInput.addEventListener("input", billInputFun);
peopleInput.addEventListener("input", peopleInputFun);
tips.forEach(function (val) {
    val.addEventListener("click", handleClick);
});
tipCustom.addEventListener("input", tipCustom);
resetBtn.addEventListener("click", reset);


billInput.value = "0.0";
peopleInput.value = "1";
tipPerPerson.innerHTML = "$" + (0.0).toFixed(2);
totalPerPerson.innerHTML = "$" + (0.0).toFixed(2);

let billValue = 0.0;
let peopleValue = 1;
let tipValue = 0.15;




/*if((peopleValue ) || (billValue = NaN )) {
    updateResult('wrong');
    return;
}*/
/*=============*/

/*function tipInputFun() {
    customValue = parseFloat(tip-custom.value)
    if (customValue < 0) {
        error2.style.display = 'flex'
        billInput.style.border = 'thick solid red'
    } else  {
        error2.style.display = 'none'
        billInput.style.border = 'none'
        calculateTip();
    }
}*/

/* ================*/


function billInputFun() {
    billValue = billInput.value
    if (billValue < 0) {
        error2.style.display = 'flex'
        billInput.style.border = 'thick solid red'
      
    } else {
        error2.style.display = 'none'
        billInput.style.border = 'none'
        calculateTip();
    }
}

function peopleInputFun() {
    peopleValue = peopleInput.value;

    if (peopleValue < 1) {
        error.style.display = 'flex'
        peopleInput.style.border = 'thick solid red'
        return "error"
      
    } else {
        error.style.display = 'none';
        peopleInput.style.border = 'none';
        calculateTip();
    }
}

function tipInputFun() {
    tipValue = parseFloat(tipCustom.value / 100);
    input > 0;
    tips.forEach(function (val) {
        val.classList.remove("active-tip");
    });
    calculateTip();
}

function handleClick(event) {
    tips.forEach(function (val) {
        val.classList.remove("active-tip");
        if (event.target.innerHTML == val.innerHTML) {
            val.classList.add("active-tip");
            tipValue = parseFloat(val.innerHTML) / 100;
        }
    });
    calculateTip();
}

function calculateTip() {
    let tipAmount
    let total;
    if (peopleValue >= 1) {
        tipAmount = (billValue * tipValue) / peopleValue;
        total = (billValue / peopleValue) + tipAmount;
        tipPerPerson.innerHTML = "$" + tipAmount.toFixed(2);
        totalPerPerson.innerHTML = "$" + total.toFixed(2);
    }

    if (billValue==0) {
        tipAmount="error"
        total = "error"
    }

}




/*function tipAmount() {
if(peopleValue<0 || billValue<0) {
    setError(tipAmount, 'error');
    return;
  }


}*/


function reset() {
    billInput.value = "0.0";
    billInputFun()
    peopleInput.value = "1";
    peopleInputFun()

}
