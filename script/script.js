document.addEventListener("DOMContentLoaded", function () {
    // Get all <li> elements
    var listItems = document.querySelectorAll("li");

    // Loop through each <li> element
    listItems.forEach(function (li) {
        // Add click event listener to each <li> element
        li.addEventListener("click", function () {
            // Find the <a> element inside the <li>
            var link = li.querySelector("a");

            // If <a> element is found, trigger its click event
            if (link) {
                link.click();
            }
        });
    });
});
