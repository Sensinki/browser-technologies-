// Got help from chatGPT (I wrote down what I understood from it)
// waits until all HTML content is laoded
document.addEventListener("DOMContentLoaded", function () {
    // get form fields from html
    const form = document.querySelector("form");
    const formFields = form.querySelectorAll("input");

    // restore form data from localStorage
    formFields.forEach((field) => {
        // use id to get item
        const storedValue = localStorage.getItem(field.id);
        // if there is a value, then fill the field with that value
        if (storedValue) {
            field.value = storedValue;
        }
    });

    // Listen for input changes and update localStorage on blur event
    // update the value if the user refills the field
    formFields.forEach((field) => {
        // updating after user done with refilling (onblur)
        field.addEventListener("blur", function () {
            localStorage.setItem(field.id, field.value);
        });
    });

    // after submiting the form, clear localStorage
    form.addEventListener("submit", function () {
        formFields.forEach((field) => {
            localStorage.removeItem(field.id);
        });
    });
});

// JavaScript code for saving checked radio buttons in localStorage
document.addEventListener("DOMContentLoaded", function () {
    const radios = document.querySelectorAll('input[type="radio"]');

    radios.forEach((radio) => {
        // Retrieve the checked value from localStorage if available
        const storedValue = localStorage.getItem(radio.name);
        if (storedValue === radio.value) {
            radio.checked = true;
        }

        // Add change event listener to each radio button
        radio.addEventListener("change", function () {
            if (this.checked) {
                localStorage.setItem(this.name, this.value);
            }
        });
    });
});


// VALIDATE ONLY ONE FIELDSET
// function validateFieldset(fieldsetId) {
//     var fieldset = document.getElementById(fieldsetId);
//     var inputs = fieldset.querySelectorAll("input[required], select[required], textarea[required]");
//     for (var i = 0; i < inputs.length; i++) {
//         if (!inputs[i].value) {
//             alert("Please fill in all required fields in the fieldset.");
//             return false;
//         }
//     }
//     return true;
// }