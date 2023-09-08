// function validateForm() {
           
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let country = document.getElementById("country").value;
//     let state = document.getElementById("state").value;
//     let city = document.getElementById("city").value;
//     let pincode = document.getElementById("pincode").value;
//     let address = document.getElementById("address").value;
//     let contactNumber = document.getElementById("contactNumber").value;
//     let password = document.getElementById("password").value;
//     let confirmPassword = document.getElementById("confirmPassword").value;
//     let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     let phoneRegex = /^[0-9]+$/;



//     let isValid = true;

//     if (name === "") {
//         document.getElementById("nameError").textContent = "Name is required";
//         isValid = false;
//     }

//     if (!email.match(emailRegex)) {
//         document.getElementById("emailError").textContent = "Invalid email address";
//         isValid = false;
//     }

//     if (country === "") {
//         document.getElementById("countryError").textContent = "Country is required";
//         isValid = false;
//     }

//     if (state === "") {
//         document.getElementById("stateError").textContent = "State is required";
//         isValid = false;
//     }

//     if (city === "") {
//         document.getElementById("cityError").textContent = "City is required";
//         isValid = false;
//     }

//     if (!pincode.match(phoneRegex)) {
//         document.getElementById("pincodeError").textContent = "Invalid pincode";
//         isValid = false;
//     }

//     if (address === "") {
//         document.getElementById("addressError").textContent = "Address is required";
//         isValid = false;
//     }

//     if (!contactNumber.match(phoneRegex)) {
//         document.getElementById("contactNumberError").textContent = "Invalid contact number";
//         isValid = false;
//     }

//     let passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{7,}$/;

// if (password === "") {
//     document.getElementById("passwordError").textContent = "Password is required";
//     isValid = false;
// } else if (!password.match(passwordRegex)) {
//     document.getElementById("passwordError").textContent = "Password must contain at least 7 characters, including one uppercase letter, one special character, and one number";
//     isValid = false;
// }

// if (password !== confirmPassword) {
//     document.getElementById("confirmPasswordError").textContent = "Passwords do not match";
//     isValid = false;
// }

//     return isValid;
// }

// function clearErrors() {
//     let errorElements = document.getElementsByClassName("error");
//     for (let i = 0; i < errorElements.length; i++) {
//         errorElements[i].textContent = "";
//     }
// }
// clearErrors();


$(document).ready(function() {
    function validateForm() {
        let name = $("#name").val();
        let email = $("#email").val();
        let country = $("#country").val();
        let state = $("#state").val();
        let city = $("#city").val();
        let pincode = $("#pincode").val();
        let address = $("#address").val();
        let contactNumber = $("#contactNumber").val();
        let password = $("#password").val();
        let confirmPassword = $("#confirmPassword").val();
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let phoneRegex = /^[0-9]+$/;
    
        let isValid = true;

        if (name === "") {
            $("#nameError").text("Name is required");
            isValid = false;
        }

        if (!email.match(emailRegex)) {
            $("#emailError").text("Invalid email address");
            isValid = false;
        }

        if (country === "") {
            $("#countryError").text("Country is required");
            isValid = false;
        }

        if (state === "") {
            $("#stateError").text("State is required");
            isValid = false;
        }

        if (city === "") {
            $("#cityError").text("City is required");
            isValid = false;
        }

        if (pincode === "") {
            $("#pincodeError").text("Invalid pincode");
            isValid = false;
        }

        if (address === "") {
            $("#addressError").text("Address is required");
            isValid = false;
        }

        if (!contactNumber.match(phoneRegex)) {
            $("#contactNumberError").text("Invalid contact number");
            isValid = false;
        }

        let passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{7,}$/;

        if (password === "") {
            $("#passwordError").text("Password is required");
            isValid = false;
        } else if (!password.match(passwordRegex)) {
            $("#passwordError").text("Password must contain at least 7 characters, including one uppercase letter, one special character, and one number");
            isValid = false;
        }

        if (password !== confirmPassword) {
            $("#confirmPasswordError").text("Passwords do not match");
            isValid = false;
        }

        return isValid;
    }
    function clearErrors() {
        $(".error").text("");
    }

    clearErrors();
    
    $("#registrationForm").submit(function(event) {
        clearErrors();
        if (!validateForm()) {
            event.preventDefault(); 
        }
    });
});