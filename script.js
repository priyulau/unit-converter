const conversionType = document.querySelector("#conversion");
const converterInputs = document.querySelectorAll(".converter-input");

const length = {
  units: [`Meter`, `Foot`, `Inch`],
  multiplier: 0.6214,
  formula: `Formula: for an approximate result, multiply the length value by 0.621`,
};

const mass = {
  units: [`Kilograms`, `Grams`, `Pounds`, `Ounces`],
  multiplier: 2.35215,
  formula: `Formula: for an approximate result, multiply the fuel economy value by 2.35`,
};

const volume = {
  units: [`Liters`, `Milliliters`, `Gallons`],
  multiplier: 0.001,
  formula: `Formula: divide the digital storage value by 1000`,
};

//event listener for conversion type dropdown
conversionType.addEventListener("change", (event) => {
  updateUnits(event.target.value);
  updateMultiplier(inputValues.conversion);
  updateFormula(event.target.value);
});

//function that changes unit options based on conversion type dropdown
function updateUnits(type) {
  if (type === `length`) {
    replaceUnits(length.units);
  }
  if (type === `mass`) {
    replaceUnits(mass.units);
  }
  if (type === `volume`) {
    // const options = [`Liters`, `Milliliters`, `Gallons`];
    replaceUnits(volume.units);
  }
}

//running a forEach loop on the array converterInputs (labeled classes)
converterInputs.forEach((convertInputs) => {
  //watches for any changes in any of these areas (textboxes and unit dropdowns)
  convertInputs.addEventListener("change", (e) => {
    //object that has different keys
    const inputValues = {
      //grab the fromUnit value at that moment in time
      fromUnit: document.querySelector("#from-unit").value,
      //grab the fromValue value at that moment in time
      fromValue: document.querySelector("#from-value").value,
      //grab the toUnit value at that moment in time
      toUnit: document.querySelector("#to-unit").value,
      //grab the category value at that moment in time
      conversion: document.querySelector("#conversion").value,
    };
    getInputValues(inputValues);
    updateMultiplier(inputValues.conversion);
  });
});

//function that will take the array from above and do...
function getInputValues(inputValuesObject = {}) {
  console.log(inputValuesObject);
}

function updateMultiplier(type) {
  if (type === `length`) {
    calcNewValue(length.multiplier);
  }
  if (type === `mass`) {
    calcNewValue(mass.multiplier);
  }
  if (type === `volume`) {
    calcNewValue(volume.multiplier);
  }
}

function calcNewValue(multiplierFactor) {
  document.querySelector("#to-value").value =
    document.querySelector("#from-value").value * multiplierFactor;
}

//function that updates the formula box based on type
function updateFormula(type) {
  if (type === `length`) {
    document.querySelector("#formula").innerHTML = length.formula;
  }
  if (type === `mass`) {
    document.querySelector("#formula").innerHTML = mass.formula;
  }
  if (type === `volume`) {
    document.querySelector("#formula").innerHTML = volume.formula;
  }
}

//function that actually makes the HTML DOM change
function replaceUnits(
  unitsArray = [],
  DOM1 = document.querySelector("#from-unit"),
  DOM2 = document.querySelector("#to-unit")
) {
  //good practice to clear DOMs before adding new HTML content in them
  DOM1.innerHTML = "";
  DOM2.innerHTML = "";

  //replaces units in the first dropdown unit box
  unitsArray.forEach((options) => {
    DOM1.innerHTML += `<option value="${options}">${options}</option>`;
  });

  //replaces units in the second dropdown unit box
  unitsArray.reverse().forEach((options) => {
    DOM2.innerHTML += `<option value="${options}">${options}</option>`;
  });
}
