/*
Program: Patient registration form 
Author: Alan Do
Date: 2025-02-14
Date last updated: 2/20/2026
Ver: 1.0
Description: Homework JavaScript
*/

//code to set current date and time
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

//validate first name code
function validateFirstName() {
  let firstname = document.getElementById("firstname").value.trim();
  var namePattern = /^[a-zA-Z'-]+$/;

  if(firstname == "") {
    document.getElementById("firstName-error").innerHTML = "First name field cannot be empty.";
    return false;
  } else if (firstname != "") {
    if (!firstname.match(namePattern)) {
    document.getElementById("firstName-error").innerHTML = "Letters, apostrophes, and dashes only.";
    return false;
  } else if (firstname.length < 2) { 
    document.getElementById("firstName-error").innerHTML = "First name cannot be less than 2 characters.";
    return false; 
  } else if (firstname.length > 30) { 
    document.getElementById("firstName-error").innerHTML = "First name cannot be more than 30 characters.";
    return false;
  } else {
    document.getElementById("firstName-error").innerHTML = "";
    return true;
  }
}
}
// validate midddle initial code
function validateMiddleInit() {
 let middleinit = document.getElementById("middleinit").value;
 const namePattern = /^[A-Z]$/;

 middleinit = middleinit.toUpperCase();
 document.getElementById("middleinit").value = middleinit;

 if (!middleinit.match(namePattern)) {
   document.getElementById("middleInit-error").innerHTML = "Middle initial must be a single uppercase letter.";
   return false;
 } else {
   document.getElementById("middleInit-error").innerHTML = "";
   return true;
 }
}
// validate last name code
function validateLastName() {
  let lastname = document.getElementById("lastname").value.trim();
  var namePattern = /^[a-zA-Z'-]+$/;

   if(lastname == "") {
    document.getElementById("lastName-error").innerHTML = "Last name field cannot be empty.";
    return false;
  } else if (lastname != "") {
    if (!lastname.match(namePattern)) {
    document.getElementById("lastName-error").innerHTML = "Letters, apostrophes, and dashes only.";
    return false;
  } else if (lastname.length < 2) { 
    document.getElementById("lastName-error").innerHTML = "Last name cannot be less than 2 characters.";
    return false; 
  } else if (lastname.length > 30) { 
    document.getElementById("lastName-error").innerHTML = "Last name cannot be more than 30 characters.";
    return false;
  } else {
    document.getElementById("lastName-error").innerHTML = "";
    return true;
  }
}
}
//dob validation code
function validateDOB() {
  let dob=document.getElementById("dob");
  let date = new Date(dob.value);
  let today = new Date();
  let maxDate = new Date();
  maxDate.setFullYear(today.getFullYear() - 120);

  if (date > new Date()) {
      document.getElementById("dob-error").innerHTML = "Date cannot be a future date.";
      dob.value="";
      return false;
  } else if (date < new Date(maxDate)) {
    document.getElementById("dob-error").innerHTML = "Date cannot be over 120 years.";
    dob.value="";
    return false;
  } else {
    document.getElementById("dob-error").innerHTML = "";
    return true;
  }
}

//ssn validation code
function validateSSN() {
    const ssn = document.getElementById("ssn").value;
  
    //regular expression for ssn pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
  
    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = "Please enter a valid SSN.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}
//address 1 validation code
function validateAddress1() {
    var addr1 = document.getElementById("address1").value;
    console.log(addr1);
    console.log(addr1.length);


    if (addr1.length < 4) {
        document.getElementById("address1-error").innerHTML = "Please enter an address.";
        return false;
    } else {
        document.getElementById("address1-error").innerHTML = "";
        return true;
    }
}  

//zip code validation code
function validatezip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "") //takes out any thing thats not a number or dash

  if (!zip) {
      document.getElementById("zipcode-error").innerHTML = "Zip code cannot be blank.";
      return false;
  } 
  if (zip.length > 5){
      zip = zip.slice(0,5); //Won't let zip be larger than 5
  }

  zipInput.value = zip;
  document.getElementById("zipcode-error").innerHTML = "";
  return true;
}
//email validation code
function validateEmail() {
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regular expression pattern for email

    if (email =="") {
        document.getElementById("email-error").innerHTML = "Email cannot be empty.";
        return false;
    }  else if (!email.match(emailR)) {
          document.getElementById("email-error").innerHTML = "Enter a valid email.";
          return false;
    }  else {
          document.getElementById("email-error").innerHTML = "";
          return true;
    }
}

// phone number validation code 

function validatePhoneNum() {
      const phoneInput = document.getElementById("phone");
      const phonenum = phoneInput.value.replace(/\D/g, ""); // takes away all characters that aren't numbers

      if (phonenum.length == 0) {
          document.getElementById("phonenum-error").innerHTML = "Phone number cannot be blank.";
          return false;
      }
      const formattedPhone = phonenum.slice(0,3) + "-" + phonenum.slice(3,6) + "-" + phonenum.slice(6,10);
      phoneInput.value = formattedPhone;
      document.getElementById("phonenum-error").innerHTML = ""
      return true;
}

//user name validation code
function validateUID() {
    let uid = document.getElementById("UID").value;
    uid = uid.toLowerCase();
    document.getElementById("UID").value = uid;

    if (uid.length == 0) {
        document.getElementById("uid-error").innerHTML = "User ID cannot be blank.";
        return false;
    }
    //checks if username starts with a number
    if (!isNaN(uid.charAt(0))) {
        document.getElementById("uid-error").innerHTML = "Username cannot start with a number.";
        return false;
    }
    //verifies that username is only letters, numbers, underscores, or periods.
    let regex = /^[a-zA-Z0-9_.]+$/;
    if (!regex.test(uid)) {
        document.getElementById("uid-error").innerHTML = "User ID can only contain letters, numbers, underscores, and periods.";
        return false;
    }  else if (uid.length < 5) {
          document.getElementById("uid-error").innerHTML = "User ID has to be at least 5 characters.";
          return false;
    }  else if (uid.length > 30) {
          document.getElementById("uid-error").innerHTML = "User ID cannot be longer than 30 characters.";
          return false;
    }  else {
          document.getElementById("uid-error").innerHTML = "";
          return true;
    }
}

//password validation code 
function validatepass() {
    const pass = document.getElementById("pass").value;
    const UID = document.getElementById("UID").value;
    const errorMessage = [];
    //verifies lowercase letters
    if (!pass.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter.");
    }
    //verifies uppercase letters
    if (!pass.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter.");
    }
    //verifies numbers
     if (!pass.match(/[0-9]/)) {
        errorMessage.push("Enter at least one number.");
    }
    //verifies special characters
     if (!pass.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Enter at least one special character.");
    }
    //verifies if user name is in password
     if (pass == UID || pass.includes(UID)) {
        errorMessage.push("Password cannot contain username.");
    }
    //displays error messages
    const errorContainer = document.querySelector(".password-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br/>`)
    .join("");

    return errorMessage.length === 0;
}

//confirm password validation code
function confirmpass() {
    pass1 = document.getElementById("pass").value;
    pass2 = document.getElementById("confirm").value;

    if (pass1 != pass2) {
        document.getElementById("password2-error").innerHTML = "Passwords must match.";
        return false;
    } else {
          document.getElementById("password2-error").innerHTML = "Passwords match.";
          return true;
    }
}

//displays user's input
function showInput() {
    var formcontent = document.getElementById("signup");
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan = '3'>Your Information:</th>";
    for (i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value != "") {
            let datatype = formcontent.elements[i].type;
            switch (datatype) {
              case "checkbox":
                if (formcontent.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align= 'right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>&#x2713;</td></tr>";
                }
                break;
              case "radio":
                if (formcontent.elements[i].checked) {
                    formoutput = formoutput + "<tr> <td align='right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                }
                break;
              case "button":
              case "submit":
              case "reset":
                break;
              default:
                formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
            }
        }
    }
    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("showInput").innerHTML = formoutput;
    }
}

//removes user input
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

function showAlert() {
  var alertBox = document.getElementById("alert-box");
  var closeAlert = document.getElementById("close-alert");

  alertBox.style.display = "block";
  closeAlert.onclick = function() {
      alertBox.style.display = "none";
  };
}
//validates stuff on the form
function validateForm() {
    let valid = true;
  
    if (!validateDOB()) {
        valid = false;
    }
    if (!validateSSN()) {
        valid = false;
    }
    if (!validateAddress1()) {
        valid = false;
    }
    if (!validatezip()) {
        valid = false;
    }
    if (!validateEmail()) {
        valid = false;
    }
    if (!validatePhoneNum()) {
        valid = false;
    }
    if (!validateUID()) {
        valid = false;
    }
    if (!validatepass()) {
        valid = false;
    }
    if (!confirmpass()) {
        valid = false;
    }
     if (valid) {
         document.getElementById("submit").disabled = false;
     } else{
        showAlert();
     }
 }



