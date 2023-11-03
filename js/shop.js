document.addEventListener('DOMContentLoaded', function() {
    // Загружаем аудио-элемент
    const audioElement = document.getElementById('purchaseSound');

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

            // Проигрываем звуковой эффект
            audioElement.play();

            // Prevent the default action of the button (form submission)
            event.preventDefault();
            // Disable the button to indicate that the product is purchased
            button.disabled = true;
        });
    });

    // Select all elements with the 'owl-image' class and store them in the 'owlImages' array
    const owlImages = document.querySelectorAll('.owl-image');
    // Loop through each image in the 'owlImages' array
    owlImages.forEach(image => {
        // Add a mouseover event listener to each 'owl-image' element
        image.addEventListener('mouseover', function() {
            // Get the product name from the card's title
            const product = image.parentElement.querySelector('.card-text').textContent;
            // Display an alert message indicating the product on mouseover
            alert(`Check out the "${product}"!`);
        });
    });
});