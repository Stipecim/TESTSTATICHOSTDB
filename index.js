// Create a new button element
var button = document.querySelector('button');

// Add a click event listener to the button
button.addEventListener('click', function () {
    fetch('https://stipecim.github.io/TESTSTATICHOSTDB/my_database.db')
        .then(function (response) {
        console.log("hello");
        console.log("Response: ", response);
    });
    
});
// Append the button to the document body

