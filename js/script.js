// alert-close
var alertClose = document.querySelector(".alert-close");
var alert = document.querySelector(".header-alert");


alertClose.addEventListener("click", () => {
        alert.style.display = "none"
})

// mega-menu
// .classList.toggle("classname")

var switchUp = document.querySelector(".switch-up");
var megaMenu = document.querySelector(".header-megamenu");
var megaBtn = document.querySelector(".mega-btn");


megaBtn.addEventListener("click", () => {
    // There is another method, “matches()”, that will determine whether the element has a particular class or not. 
    megaMenu.classList.toggle("active")
    var switches = switchUp.matches(".fa-caret-down"); // false or true

     if (switches == true) {
        switchUp.classList.remove("fa-caret-down")
        switchUp.classList.add("fa-caret-up")
     }else {
        switchUp.classList.add("fa-caret-down")
        switchUp.classList.remove("fa-caret-up")
     }
    // console.log(switchUp)
    // console.log(switches)
})


// hamburger Menu

var hamburger = document.querySelector(".hamburger")
var hamWeb = document.querySelector(".hamburger-web")
var mainWeb = document.querySelector(".main-web")
var exitHamWeb = document.querySelector(".ham-exit")
var getWidth = window.innerWidth;

hamburger.addEventListener("click", () => {
   mainWeb.classList.add("hidden")
   hamWeb.classList.add("active")
})

exitHamWeb.addEventListener("click", () => {
   mainWeb.classList.remove("hidden")
   hamWeb.classList.remove("active")
})
  
// sticky nav

var header = document.querySelector("header#header")
var headerCon = document.querySelector(".header-container")


window.addEventListener("scroll", () => {
   headerCon.classList.toggle("scroll", window.scrollY > 0);
   header.classList.toggle("scroll", window.scrollY > 0);
})


// Show Password
var checkbox = document.querySelector("#checkbox");
var password = document.querySelector("#password")

checkbox.addEventListener("change", () => {
   if (checkbox.checked) {
      password.type = "text";
   } else {
      password.type = "password";
   }
})

// register regexp

var email = document.querySelector("#email")
var emailError = document.querySelector(".email-message")
var passwordError = document.querySelector(".password-message")

const showError = message => {
   emailError.style.color = "red";
   emailError.style.display = "block";
   emailError.innerHTML = message;
}

const showPass = message => {
   emailError.style.color = "green";
   emailError.style.display = "block";
   emailError.innerHTML = message;
}

// Check Email
email.addEventListener('keyup', (e) => {
   const emailVal = e.target.value;
   validateEmail(emailVal);
})

const emailChar = new RegExp('(?=.*[@])');

const validateEmail = (emailVal) => {

   if (!emailVal == 0) {
      if (emailVal.length < 5) {
         showError("Minimum of 5 characters")
      } else if (!emailChar.test(emailVal)) {
         showError("Invalid email")
      } else {
         showPass("Valid email")
      }
   } else {
      showError("")
      showPass("")
   }
}

function viewError(message) {
   passwordError.style.color = "red";
   passwordError.style.display = "block";
   passwordError.innerHTML = message;
}

function viewPass(message) {
   passwordError.style.color = "green";
   passwordError.style.display = "block";
   passwordError.innerHTML = message;
}

// check password

password.addEventListener('keyup', (p) => {
   const passwordVal = p.target.value;
   validatePassword(passwordVal);
})

const lowerCase = new RegExp('(?=.*[a-z])');
const upperCase = new RegExp('(?=.*[A-Z])');
const number = new RegExp('(?=.*[0-9])');
const specialChar = new RegExp('(?=.*[!@#\$%\^&\*])');

const validatePassword = (passwordVal) => {

   if (!passwordVal == 0) {
      if (passwordVal.length < 8) {
         viewError("Minimum of 8 characters")
      } else if (!lowerCase.test(passwordVal)) {
         viewError("At least 1 lowercase letter")
      } else if (!upperCase.test(passwordVal)) {
         viewError("At least 1 uppercase letter")
      } else if (!number.test(passwordVal)) {
         viewError("At least 1 number")
      } else if (!specialChar.test(passwordVal)) {
         viewError("At least 1 special character")
      }  else {
         viewPass("Valid password")
      }
   } else {
      viewError("")
      viewPass("")
   }
}

document.querySelector(".reg-btn").addEventListener("click", (c) => {
   c.preventDefault();
})