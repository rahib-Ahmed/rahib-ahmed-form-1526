// Declare variables for form elements
const form = document.getElementById("my-form");
const fullNameInput = document.getElementById("fullname");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

// Regular expression for email validation
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Function to validate the form
function validateForm(event) {
  event.preventDefault();

  // Remove existing error messages
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => {
    element.remove();
  });

  // Object to store form data
  const data = {};

  // Array to store errors
  const errors = [];

  // Check full name
  if (fullNameInput.value.trim() !== "") {
    data.fullName = fullNameInput.value.trim();
  } else {
    errors.push("Full name is required");
  }

  // Check email
  if (emailInput.value.trim() !== "") {
    if (emailRegex.test(emailInput.value.trim())) {
      data.email = emailInput.value.trim();
    } else {
      errors.push("Invalid email address");
    }
  } else {
    errors.push("Email is required");
  }

  // Check message
  if (messageInput.value.trim() !== "") {
    data.message = messageInput.value.trim();
  } else {
    errors.push("Message is required");
  }

  // Check if there are any errors
  if (errors.length > 0) {
    // Display error messages
    errors.forEach((error) => {
      const errorElement = document.createElement("div");
      errorElement.classList.add("error");
      errorElement.textContent = error;
      form.appendChild(errorElement);
    });

    console.log("Error Messages:", errors);
  } else {
    console.log("Form Data:", data);
    // Clear text fields
    fullNameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
  }
}

// Register form submit event listener
form.addEventListener("submit", validateForm);
