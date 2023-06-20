const conversionType = document.querySelector("#conversion");
const converterInputs = document.querySelectorAll(".converter-input");

//event listener for conversion type dropdown
conversionType.addEventListener("change", (event) => {
  updateUnits(event.target.value);
});

//function that changes unit options based on conversion type dropdown
function updateUnits(type) {
  if (type === `length`) {
    const options = [`Meter`, `Foot`, `Inch`];
    replaceUnits(options);
  }
  if (type === `mass`) {
    const options = [`Kilograms`, `Grams`, `Pounds`, `Ounces`];
    replaceUnits(options);
  }
  if (type === `volume`) {
    const options = [`Liters`, `Milliliters`, `Gallons`];
    replaceUnits(options);
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
      conversion: document.querySelector("#conversion").value
    };
    getInputValues(inputValues);
  });
});

//function that will take the array from above and do...
function getInputValues(inputValuesObject = {}) {
  console.log(inputValuesObject);
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
