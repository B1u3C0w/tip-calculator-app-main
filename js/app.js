
//const variables
const bill = document.getElementById("inp-bill");
const people = document.getElementById("inp-people");
const tipButtons = document.querySelectorAll('.tip');
const tipCustom = document.getElementById('inp-tip');
const errorMsg = document.querySelector('.error-msg');
const results = document.querySelectorAll('.value');
const resetBtn = document.querySelector('.reset');

//let variables
let billValue = 0.0;
let noOfPeople = 1;
let tipValue = 0.15 // default as 15% button is selected

//event handlers
bill.addEventListener('input', setBillValue);
people.addEventListener('input', setNoOfPeople);

tipButtons.forEach(btn => {
    btn.addEventListener('click', handleClick);
});

tipCustom.addEventListener('input', setTipCustomValue);
resetBtn.addEventListener('click', reset);

//functions
function setBillValue () {
    if(bill.value.includes(','))
    {
        bill.value = bill.value.replace(',', '.');
    }

    if (!validateFloat(bill.value)) {
        bill.value = bill.value.substring(0, bill.value.length-1);
    }
        
    billValue = parseFloat(bill.value);
    //console.log(bill.value);

    calculateTip();
}

function setNoOfPeople () {
    if(!validateInt(people.value))  {
        people.value = people.value.substring(0,people.value.length-1);
    }
    
    noOfPeople = parseFloat(people.value);

    if (noOfPeople <= 0) {
        errorMsg.classList.add('show-error-msg');
    }
    else{
        errorMsg.classList.remove('show-error-msg');
    }

    calculateTip();
    //console.log(noOfPeople);
}

function validateFloat (s) {
    var rgx = /^[0-9]*\.?[0-9]*$/;
    return s.match(rgx);
}

function validateInt (s) {
    var rgx = /^[0-9]*$/;
    return s.match(rgx);
}

function handleClick(event) {
    tipButtons.forEach(btn => {
        btn.classList.remove('btn-active');

        if (event.target.innerHTML == btn.innerHTML) {
            btn.classList.add('btn-active');
            tipValue = parseFloat(btn.innerHTML)/100;
        }
    });

    tipCustom.value = '';

    calculateTip();
    //console.log(tipValue);
}

function setTipCustomValue () {
    if(!validateInt(tipCustom.value))  {
        tipCustom.value = tipCustom.value.substring(0,tipCustom.value.length-1);
    }

    tipValue = parseFloat(tipCustom.value/100);

    tipButtons.forEach(btn => {
        btn.classList.remove('btn-active');
    });

    if (tipValue !== '') {
        calculateTip();
    }
}

function calculateTip () {
    if (noOfPeople >= 1) {
        let tipAmount = billValue * tipValue / noOfPeople;
        let total = billValue * (tipValue + 1) / noOfPeople;

        results[0].innerHTML = '$' + tipAmount.toFixed(2);
        results[1].innerHTML = '$' + total.toFixed(2);
    }
}

function reset () {
    bill.value = '0.0';
    setBillValue();

    tipButtons[2].click();

    people.value = '1';
    setNoOfPeople();
}