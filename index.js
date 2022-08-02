inputEl = document.getElementById("input-field");
convertBtnEl = document.getElementById("convert-btn");
lengthDetailsEl = document.getElementById("length-details");
volumeDetailsEl = document.getElementById("volume-details");
massDetailsEl = document.getElementById("mass-details");

function meterToFeet (meter) {
    return (parseFloat(meter) * 3.281).toFixed(3);
}

function feetToMeter (feet) {
    return (parseFloat(feet) / 3.281).toFixed(3);
}

function literToGallon (liter) {
    return (parseFloat(liter) * 0.264).toFixed(3);
}

function gallonToLiter (gallon) {
    return (parseFloat(gallon) / 0.264).toFixed(3);
}

function kilogramToPound (kilogram) {
    return (parseFloat(kilogram) * 2.204).toFixed(3);
}

function poundToKilogram (pound) {
    return (parseFloat(pound) / 2.204).toFixed(3);
}

function renderDetails() {
    const inputValue = inputEl.value;
    lengthDetailsEl.textContent = `${inputValue} meters = ${meterToFeet(inputValue)} feet | ${inputValue} feet = ${feetToMeter(inputValue)} meter`;
    volumeDetailsEl.textContent = `${inputValue} liters = ${literToGallon(inputValue)} gallons | ${inputValue} gallons = ${gallonToLiter(inputValue)} liters`;
    massDetailsEl.textContent = `${inputValue} kilograms = ${kilogramToPound(inputValue)} pounds | ${inputValue} pounds = ${poundToKilogram(inputValue)} kilograms`;

}

convertBtnEl.addEventListener("click", renderDetails);