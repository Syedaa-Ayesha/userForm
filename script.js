function showEmployeeInfo() {
  document.getElementById("departementInfo").style.display = "none";
  document.getElementById("employeeInfo").style.display = "";
  var step2 = document.getElementById('step-2');
  step2.classList.remove('c-border-primary');
 
}
function showDepartementInfo() {
  document.getElementById("employeeInfo").style.display = "none";
  document.getElementById("departementInfo").style.display = "";
  document.getElementById("dependentInfo").style.display = "none";
  var step3 = document.getElementById('step-3');
  step3.classList.remove('c-border-primary');
 

}
function showDependentInfo() {
  document.getElementById("departementInfo").style.display = "none";
  document.getElementById("dependentInfo").style.display = "";
  document.getElementById("emergencyContact").style.display = "none";
  var step4 = document.getElementById('step-4');
  step4.classList.remove('c-border-primary');
}
function showEmergencyContact() {
  document.getElementById("emergencyContact").style.display = "";
  document.getElementById("dependentInfo").style.display = "none";
  var step5 = document.getElementById('step-5');
  step5.classList.remove('c-border-primary');
}
function showExperience() {
  document.getElementById("experience").style.display = "";
  document.getElementById("emergencyContact").style.display = "none";
  document.getElementById("payStructure").style.display = "none";
  var step6 = document.getElementById('step-6');
  step6.classList.remove('c-border-primary');
}
function showPayStructure() {
  document.getElementById("payStructure").style.display = "";
  document.getElementById("experience").style.display = "none";
  document.getElementById("otherInfo").style.display = "none";

  var step7 = document.getElementById('step-7');
  step7.classList.remove('c-border-primary');
}
function showOtherInfo() {
  document.getElementById("payStructure").style.display = "none";
  document.getElementById("experience").style.display = "none";
  document.getElementById("otherInfo").style.display = "";
  var step7 = document.getElementById('step-7');
  step7.classList.remove('c-border-primary');
}
// for profile pic 
let profilePic = document.getElementById("profile-pic");
let inputFile = document.getElementById("input-file");
inputFile.onchange = function () {
  profilePic.src = URL.createObjectURL(inputFile.files[0])
}
// JavaScript to handle button click event
// $(document).ready(function () {
  // var submitButton = document.getElementById('submitButton');
  
  // submitButton.addEventListener(click,function{

  // });

  $("#submitButton").click(function () {
    $("#submitButton").addClass("submitted").text("Submitted");
    
  });
// employeeForm Validation...
var employeeForm = document.querySelectorAll("#employeeForm")[0]; //This should be your first form
console.log(employeeForm);
employeeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  if (!employeeForm.checkValidity()) {
    console.log("Form InValidated");
    showToast("Please fill all the fields");
    employeeForm.classList.add("was-validated");
  } else {
    console.log("Form Validated Successfully");
    showDepartementInfo();
    var step2 = document.getElementById('step-2');
    step2.classList.add('c-border-primary');

    // var progressBar= document.getElementById('progressBar');
    // progressBar.classList.add('progress-2');
    // updateSteps("next");
  }
});
// departementForm Validation...
var departementForm = document.querySelectorAll("#departementForm")[0];
console.log(departementForm);
departementForm.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  if (!departementForm.checkValidity()) {
    console.log("Form InValidated");
    showToast("Please fill all the fields");
    // document.getElementsByClassName("toast").style.display = "";
    departementForm.classList.add("was-validated");
  } else {
    console.log("Form Validated Successfully");
    showDependentInfo();
    var step3 = document.getElementById('step-3');
    step3.classList.add('c-border-primary');
  }
});
// dependentForm Validation...
var dependentForm = document.querySelectorAll("#dependentForm")[0];
console.log(dependentForm);
showToast("Please fill all the fields");
dependentForm.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  if (!dependentForm.checkValidity()) {
    console.log("Form InValidated");
    alert("Please fill all fields");
    dependentForm.classList.add("was-validated");
  } else {
    console.log("Form Validated Successfully");
    showEmergencyContact();
    var step4 = document.getElementById('step-4');
    step4.classList.add('c-border-primary');
  }
});
// emergencyForm Validation...
var emergencyForm = document.querySelectorAll("#emergencyForm")[0];
console.log(emergencyForm);
emergencyForm.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  if (!emergencyForm.checkValidity()) {
    console.log("Form InValidated");
    showToast("Please fill all the fields");
    emergencyForm.classList.add("was-validated");
  } else {
    console.log("Form Validated Successfully");
    showExperience();
    var step5 = document.getElementById('step-5');
    step5.classList.add('c-border-primary');
  }
});
// experienceForm Validation...
var experienceForm = document.querySelectorAll("#experienceForm")[0];
console.log(experienceForm);
experienceForm.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  if (!experienceForm.checkValidity()) {
    console.log("Form InValidated");
    showToast("Please fill all the fields");

    experienceForm.classList.add("was-validated");
  } else {
    console.log("Form Validated Successfully");
    showPayStructure();
    var step6 = document.getElementById('step-6');
    step6.classList.add('c-border-primary');
  }
});
// payForm Validation...
var formStep6 = document.querySelectorAll("#payForm")[0];
console.log(formStep6);
payForm.addEventListener("submit", function (event) {
  event.preventDefault();
  event.stopPropagation();

  if (!payForm.checkValidity()) {
    showToast("Please fill all the fields");
    console.log("Form InValidated");

    payForm.classList.add("was-validated");
  } else {
    console.log("Form Validated Successfully");
    showOtherInfo();
    var step7= document.getElementById('step-7');
    step7.classList.add('c-border-primary');

  }
});

function showToast(message) {
  const toastElement = document.getElementById('toast');
  const toastMessage = document.getElementById('toastMessage');

  // Set the message
  toastMessage.textContent = message;

  // Show the toast
  const bsToast = new bootstrap.Toast(toastElement);
  bsToast.show();
}

 