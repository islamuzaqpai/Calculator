function appendToDisplay(value) {
    display.value += value;
}
function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);   
}

function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "error";
    }   
}

function convertKilometersToMiles() {
    let num = parseFloat(display.value);
    if(!isNaN(num)) {
        display.value = num * 0.621371 + " miles";
    } else {
        display.value = "error";
    }
}

function convertMinutesToSeconds() {
    let num = parseFloat(display.value);

    if(!isNaN(num)) {
        display.value = num * 60 + " seconds";
    } else {
        display.value = "error";
    }
}

function convertGramsToKg() {
    let num = parseFloat(display.value);

    if(!isNaN(num)) {
        display.value = num / 1000 + " killograms";
    } else {
        display.value = "error";
    }
}

function convertCelsiusToFahrenheit() {
    let num = parseFloat(display.value);

    if(!isNaN(num)) {
        display.value = (num * (9 / 5)) + 32  + "° Farenheit";
    } else {
        display.value = "error";
    }   
}