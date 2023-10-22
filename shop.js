// Wait for the DOM to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the 'buy-button' class and store them in the 'buyButtons' array
    const buyButtons = document.querySelectorAll('.buy-button');
    // Loop through each button in the 'buyButtons' array
    buyButtons.forEach(button => {
        // Add a click event listener to each 'buy-button' element
        button.addEventListener('click', function() {
            // Get the value of the 'data-product' attribute of the clicked button
            const product = button.getAttribute('data-product');
            // Display an alert message indicating the purchased product
            alert(`The "${product}" is purchased!`);
        });
    });
});