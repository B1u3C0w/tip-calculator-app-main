let tipPercent = 0.00;

let tipTotal = 0.00;
let tipPerPerson = 0.00;

let totalWithTip = 0.00;
let totalPerPerson = 0.00;

function tipPercent5 () {
    tipPercent = 0.05;
}

function tipPercent10 () {
    tipPercent = 0.10;
}

function tipPercent15 () {
    tipPercent = 0.15;
}

function tipPercent25 () {
    tipPercent = 0.25;
}

function tipPercent50 () {
    tipPercent = 0.50;
}

function tipPercentCustom () {
    tipPercent = document.getElementsByName("custom");
    alert(tipPercent);
    tipPercent = tipPercent / 100;
}

function CalculateTipTotalAmount () {
    let billTotal = document.getElementById("bill").innerText
    let noOfPeople = document.getElementById("noPeople").innerText

    if ((document.getElementById("bill").innerText != 0) || (document.getElementById("noPeople").innerText != 0))
    {
        let tipTotal = (tipPercent / 100) * billTotal;

        CalculateTipPerPerson(tipTotal, noOfPeople);
        CalculateTotalWithTip(billTotal, tipTotal);
    }
}

function CalculateTipPerPerson (tipTotal, noOfPeople) {
    let tipPerPerson = tipTotal / noOfPeople;

    document.getElementById("tipAmount").innerText = "$" + tipAmount
}

function CalculateTotalWithTip (billTotal, tipTotal) {
    let totalWithTip = billTotal + tipTotal;

    CalculateTotalPerPerson(tipPerPerson, noOfPeople);
}

function CalculateTotalPerPerson (totalWithTip, noOfPeople) {
    let totalPerPerson = totalWithTip + noOfPeople;

    document.getElementById("totalAmount").innerText = "$" + totalPerPerson
}