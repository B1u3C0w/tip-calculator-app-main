let tipPercent = 0.00;

let tipTotal = 0.00;
let tipPerPerson = 0.00;

let totalWithTip = 0.00;
let totalPerPerson = 0.00;

function updateTip (selectedButton) {
    switch (selectedButton.value) {
        case '5%': 
            tipPercent = 0.05;
            break;
        case '10%':
            tipPercent = 0.1;
            break;
        case '15%':
            tipPercent = 0.15;
            break;
        case '25%':
            tipPercent = 0.25;
            break;
        case '50%':
            tipPercent = 0.50;
            break;
    }
        
    let buttons = document.getElementsByClassName("tipButton");
    for (var i=0; i < buttons.length; i++)
    {
        buttons[i].style.backgroundColor = 'hsl(183, 100%, 15%)';
    }
    selectedButton.style.backgroundColor='hsl(172, 67%, 45%)';

    CalculateTipTotalAmount();
}

function tipPercentCustom (val) {
    tipPercent = parseInt(val) / 100;
    let buttons = document.getElementsByClassName("tipButton");
    for (var i=0; i < buttons.length; i++)
    {
        buttons[i].style.backgroundColor = 'hsl(183, 100%, 15%)';
    }

    let x = parseInt(document.getElementsByName("custom")[0].value);

    CalculateTipTotalAmount();
}

function CalculateTipTotalAmount () {
    let billTotal = parseInt(document.getElementById("bill").value);
    let noOfPeople = parseInt(document.getElementById("noPeople").value);

    if (billTotal != "" && noOfPeople != "")
    {
        let tipTotal = tipPercent * billTotal;
        console.log("START - CalculateTipTotalAmount");
        console.log("Bill Total: " + billTotal);
        console.log("Total People: " + noOfPeople);
        console.log("Tip Percent: " + tipPercent);
        
        console.log("Total Tip: " + tipTotal);
        console.log("-----------------------------");
        CalculateTipPerPerson(tipTotal, noOfPeople);
        CalculateTotalWithTip(billTotal, tipTotal, noOfPeople);
    }
}

function CalculateTipPerPerson (tipTotal, noOfPeople) {
    console.log("CalculateTipPerPerson");
    console.log("Total Tip: " + tipTotal);
    console.log("Total People: " + noOfPeople);
    
    
    
    let tipPerPerson = tipTotal / noOfPeople;
    console.log("Tip PP: " + tipPerPerson);
    console.log("-----------------------------");

    document.getElementById("tipAmount").innerHTML = "$" + tipPerPerson
}

function CalculateTotalWithTip (billTotal, tipTotal, noOfPeople) {
    console.log("CalculateTotalWithTip");
    console.log("Bill Total: " + typeof billTotal);
    console.log("Total Tip: " + typeof tipTotal);
    console.log("Total People: " + noOfPeople);
    
    
    
    
    let totalWithTip = parseInt(billTotal) + parseInt(tipTotal);
    console.log("Total W TIP: " + totalWithTip);
    console.log("-----------------------------");
    CalculateTotalPerPerson(totalWithTip, noOfPeople);
}

function CalculateTotalPerPerson (totalWithTip, noOfPeople) {
    console.log("calculateTotalPerPerson");
    console.log(totalWithTip);
    console.log("Total People: " + noOfPeople);
    console.log("-----------------------------");



    let totalPerPerson = totalWithTip / noOfPeople;

    document.getElementById("totalAmount").innerHTML = "$" + totalPerPerson
}