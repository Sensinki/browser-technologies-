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

// UPPERCASE
var elements = document.querySelectorAll(".uppercase");

elements.forEach(function (element) {
    element.addEventListener("input", function (event) {
        // Convert the input value to uppercase
        this.value = this.value.toUpperCase();
    });
});

// LOWERCASE
var elements = document.querySelectorAll(".lowercase");

elements.forEach(function (element) {
    element.addEventListener("input", function (event) {
        // Convert the input value to uppercase
        this.value = this.value.toLowerCase();
    });
});

// CAPITALIZE
var elements = document.querySelectorAll(".capitalize");

elements.forEach(function (element) {
    element.addEventListener("input", function (event) {
        // Convert the input value to uppercase
        this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
    });
});

// // Find the button by its ID
//     var addButton = document.getElementById("addSectionsButton");

//     // Add a click event listener to the button
//     addButton.addEventListener("click", function() {
//         // Find the first section with the class 'hideable'
//         var section = document.querySelector(".voeg");

//         // If a section is found, clone it and append it to the body of the document
//         if (section) {
//             // Clone the section
//             var clonedSection = section.cloneNode(true);
//             // Append the cloned section to the body of the document
//             document.body.appendChild(clonedSection);
//         }
//     });

// Find the button by its ID
var addButton = document.getElementById("addSectionsButton");

// Maximum number of verkrijgers allowed
var maxVerkrijgers = 4;

// Counter to keep track of the number of verkrijgers added
var verkrijgersCount = 1;

// Add a click event listener to the button
addButton.addEventListener("click", function () {
    // If maximum verkrijgers limit is reached, return
    if (verkrijgersCount >= maxVerkrijgers) {
        return;
    }

    // Create a new section element
    var newSection = document.createElement("section");
    newSection.className = "hideable voeg";

    // Create a fieldset element
    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = "Verkrijger " + (verkrijgersCount + 1); // Change this to whatever legend text you want
    fieldset.id = "verkrijgers";
    fieldset.appendChild(legend);

    // Add content to the new section (similar to the existing section)
    fieldset.innerHTML += `
            <label for="bsn${verkrijgersCount + 1}">Burgerservicenummer(BSN)
                <input type="text" id="bsn${verkrijgersCount + 1}" pattern="[1-9]{8,9}" maxlength="9" required />
                <span data-error>Vul hier de BSN-nummer van de overledene in</span>
            </label>
            <label for="voorletters${verkrijgersCount + 1}">Voorletter(s)
                <input type="text" class="uppercase" id="voorletters${verkrijgersCount + 1}" pattern="[A-Z]+" required />
                <span data-error>Vul de eerste letters van de naam van de overledene in hoofdletters in</span>
            </label>
            <label for="tussenvoegsel${verkrijgersCount + 1}">Tussenvoegsel(s)
                <input type="text" class="lowercase width" id="tussenvoegsel${verkrijgersCount + 1}" pattern="[a-zA-Z]+" />
            </label>
            <label for="achternaam${verkrijgersCount + 1}">Achternaam
                <input type="text" class="capitalize" id="achternaam${verkrijgersCount + 1}" pattern="[a-zA-Z]+" required />
                <span data-error>Vul hier de achternaam van de overledene in</span>
            </label>
            <section class="ja-nee">
                <p>Krijgt deze verkrijger waarvoor u geen aangifte doet het hele vermogen?</p>
                <label>
                    <input type="radio" name="vermogen${verkrijgersCount + 1}" value="ja" required>
                    Ja
                </label>
                <label>
                    <input type="radio" name="vermogen${verkrijgersCount + 1}" value="nee">
                    Nee
                    <span data-error>Kies een van de opties</span>
                </label>
            </section>

            <section class="ja-nee">
                <p>Doet deze verkrijger een beroep op diens legitieme portie (wettelijke erfdeel)?</p>
                <label>
                    <input type="radio" name="legitiem${verkrijgersCount + 1}" value="ja" required>
                    Ja
                </label>
                <label>
                    <input type="radio" name="legitiem${verkrijgersCount + 1}" value="nee">
                    Nee
                    <span data-error>Kies een van de opties</span>
                </label>
            </section>
            
        `;

    // Append the fieldset to the new section
    newSection.appendChild(fieldset);

    // Increment the verkrijgers count
    verkrijgersCount++;

    // Insert the new section before the button
    addButton.parentNode.insertBefore(newSection, addButton);
});

// // Find the button by its ID
// var addButton = document.getElementById("addSectionsButton");

// // Add a click event listener to the button
// addButton.addEventListener("click", function () {
//     // Create a new section element
//     var newSection = document.createElement("section");
//     newSection.className = "hideable voeg";

//     // Create a fieldset element
//     var fieldset = document.createElement("fieldset");
//     var legend = document.createElement("legend");
//     legend.textContent = "Verkrijger"; // Change this to whatever legend text you want
//     fieldset.appendChild(legend);

//     // Add content to the new section (similar to the existing section)
//     fieldset.innerHTML += `
//             <label for="bsn">Burgerservicenummer(BSN)
//                 <input type="text" id="bsn1" pattern="[1-9]{8,9}" maxlength="9" required />
//                 <span data-error>Vul hier de BSN-nummer van de overledene in</span>
//             </label>
//             <label for="voorletters">Voorletter(s)
//                 <input type="text" class="uppercase" id="voorletters1" pattern="[A-Z]+" required />
//                 <span data-error>Vul de eerste letters van de naam van de overledene in hoofdletters in</span>
//             </label>
//             <label for="tussenvoegsel">Tussenvoegsel(s)
//                 <input type="text" class="lowercase" id="tussenvoegsel1" pattern="[a-zA-Z]+" />
//             </label>
//             <label for="achternaam">Achternaam
//                 <input type="text" class="capitalize" id="achternaam1" pattern="[a-zA-Z]+" required />
//                 <span data-error>Vul hier de achternaam van de overledene in</span>
//             </label>
//         `;

//     // Append the fieldset to the new section
//     newSection.appendChild(fieldset);

//     // Insert the new section before the button
//     addButton.parentNode.insertBefore(newSection, addButton);
// });

// // Find the button by its ID
// var addButton = document.getElementById("addSectionsButton");

// // Add a click event listener to the button
// addButton.addEventListener("click", function () {
//     // Create a new section element
//     var newSection = document.createElement("section");
//     newSection.className = "hideable voeg";

//     // Create a fieldset element
//     var fieldset = document.createElement("fieldset");
//     var legend = document.createElement("legend");
//     legend.textContent = "New Section"; // Change this to whatever legend text you want
//     fieldset.appendChild(legend);

//     // Add content to the new section (similar to the existing section)
//     fieldset.innerHTML += `
//             <label for="bsn">Burgerservicenummer(BSN)
//                 <input type="text" id="bsn1" pattern="[1-9]{8,9}" maxlength="9" required />
//                 <span data-error>Vul hier de BSN-nummer van de overledene in</span>
//             </label>
//             <label for="voorletters">Voorletter(s)
//                 <input type="text" class="uppercase" id="voorletters1" pattern="[A-Z]+" required />
//                 <span data-error>Vul de eerste letters van de naam van de overledene in hoofdletters in</span>
//             </label>
//             <label for="tussenvoegsel">Tussenvoegsel(s)
//                 <input type="text" class="lowercase" id="tussenvoegsel1" pattern="[a-zA-Z]+" />
//             </label>
//             <label for="achternaam">Achternaam
//                 <input type="text" class="capitalize" id="achternaam1" pattern="[a-zA-Z]+" required />
//                 <span data-error>Vul hier de achternaam van de overledene in</span>
//             </label>
//         `;

//     // Append the fieldset to the new section
//     newSection.appendChild(fieldset);

//     // Get the parent element of the button
//     var buttonParent = addButton.parentElement;

//     // Insert the new section after the button
//     buttonParent.insertBefore(newSection, addButton.nextSibling);
// });

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
