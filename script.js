const conversionType = document.querySelector("#conversion");
const converterInputs = document.querySelectorAll(".converter-input");

const length = {
  units: [`Meters`, `Feet`, `Inches`],
  // unitsLeft: [1, 2, 3],
  // unitsRight: [3,2,1],
  formula: `Formula: for an approximate result, multiply the length value by __ to convert to base unit meters and then multiply by ___`,
};

const mass = {
  units: [`Kilograms`, `Grams`, `Pounds`, `Ounces`],
  // unitsLeft: [1, 2, 3, 4],
  // unitsRight: [4, 3, 2, 1],
  formula: `Formula: for an approximate result, multiply the mass value by __ to convert to base unit grams and then multiply by ___`,
};

const volume = {
  units: [`Liters`, `Milliliters`, `Gallons`],
  // unitsLeft: [1, 2, 3],
  // unitsRight: [3, 2, 1],
  formula: `Formula: for an approximate result, multiply the volume value by __ to convert to base unit liters and then multiply by ___`,
};

//event listener for conversion type dropdown
conversionType.addEventListener("change", (event) => {
  updateUnits(event.target.value);
  // updateMultiplier(inputValues.conversion);
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
      //grab the fromValue value at that moment in time
      toValue: document.querySelector("#to-value").value,
      //grab the category value at that moment in time
      conversion: document.querySelector("#conversion").value,
    };
    // getInputValues(inputValues);
    calcNewValue(
      updateLeftMultiplier(inputValues.fromUnit),
      updateRightMultiplier(inputValues.toUnit)
    );
    // updateMultiplier(inputValues.conversion);
  });
});

//function that will take the array from above and do...
function getInputValues(inputValuesObject = {}) {
  console.log(inputValuesObject);
}

//function that generates a factor based on the from-unit to the base unit
//(e.g.grams)
function updateLeftMultiplier(unit) {
  if (unit === `Kilograms`) {
    return 1000; // when base unit = 1...
  }
  if (unit === `Grams`) {
    return 1;
  }
  if (unit === `Pounds`) {
    return 453.5924;
  }
  if (unit === `Ounces`) {
    return 28.34952;
  }
  if (unit === `Meters`) {
    return 1;
  }
  if (unit === `Feet`) {
    return 3.28084;
  }
  if (unit === `Inches`) {
    return 39.37008;
  }
  if (unit === `Liters`) {
    return 1;
  }
  if (unit === `Milliliters`) {
    return 1000;
  }
  if (unit === `Gallons`) {
    return 0.2641729;
  }
}

//function that generates a factor based on the to-unit from the base unit
//(e.g.grams)
function updateRightMultiplier(unit) {
  if (unit === `Ounces`) {
    return 0.03527396;
  }
  if (unit === `Pounds`) {
    return 0.002204623;
  }
  if (unit === `Grams`) {
    return 1;
  }
  if (unit === `Kilograms`) {
    return 0.001;
  }
  if (unit === `Meters`) {
    return 1;
  }
  if (unit === `Feet`) {
    return 3.28084;
  }
  if (unit === `Inches`) {
    return 0.3048;
  }
  if (unit === `Liters`) {
    return 1;
  }
  if (unit === `Milliliters`) {
    return 0.001;
  }
  if (unit === `Gallons`) {
    return 3.7854;
  }
}

function calcNewValue(leftMultiplier, rightMultiplier) {
  document.querySelector("#to-value").value =
    document.querySelector("#from-value").value *
    leftMultiplier *
    rightMultiplier;
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
