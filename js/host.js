document.addEventListener('DOMContentLoaded', function() {
    // Get references to DOM elements
    const taskInput = document.getElementById('taskInput'); // Input for entering tasks
    const addTaskButton = document.getElementById('addTask'); // Button to add a task
    const taskList = document.getElementById('taskList'); // List to display tasks

    // Add a click event listener to the "Add" button
    addTaskButton.addEventListener('click', addTask);

    // Function to add a task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === '') return;

        // Create a new task item and add it to the task list
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="delete">Delete</button>
            <button class="complete">Complete</button>
        `;

        taskList.appendChild(taskItem);
        taskInput.value = '';

        // Add event listeners for delete and complete actions
        const deleteButton = taskItem.querySelector('.delete');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });

        const completeButton = taskItem.querySelector('.complete');
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed');
        });
    }

    // Add event listener for Enter key press in the input field
    taskInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('myForm'); // The form element
    const firstNameInput = document.getElementById('firstName'); // First name input field
    const lastNameInput = document.getElementById('lastName'); // Last name input field
    const phoneNumberInput = document.getElementById('phoneNumber'); // Phone number input field

    form.addEventListener('submit', function(event) {
        let valid = true;

        // Reset error messages
        const errorElements = document.getElementsByClassName('error'); // Error message elements
        for (let i = 0; i < errorElements.length; i++) {
            errorElements[i].textContent = '';
        }

        // Validate First Name
        if (firstNameInput.value.trim() === '') {
            document.getElementById('firstNameError').textContent = 'First name is required';
            valid = false;
        }

        // Validate Last Name
        if (lastNameInput.value.trim() === '') {
            document.getElementById('lastNameError').textContent = 'Last name is required';
            valid = false;
        }

        // Validate Phone Number
        const phoneNumberPattern = /^\d{11}$/; // Regular expression for a valid phone number
        if (!phoneNumberPattern.test(phoneNumberInput.value.trim())) {
            document.getElementById('phoneNumberError').textContent = 'Invalid phone number';
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission
        }
    });
});


document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Simulate form submission or replace with actual form submission logic
    setTimeout(function() {
        const feedbackMessage = document.getElementById('feedbackMessage'); // Element to display feedback message
        feedbackMessage.textContent = 'Feedback submitted successfully!';
        feedbackMessage.className = 'success';
        feedbackMessage.style.display = 'block';
    }, 1000);
});