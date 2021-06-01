/* Password Generator will generate and display a randomized password adhering to criteria seclected by the user. */

//Assignment code here
// Password Criteria
var pwLength
var letters = "abcdefghijklmnopqrstuvwxyz";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var special = "!#$%&*+-=?@^_~"

// Generate Password Function
var generatePassword = function () {

  // Password Length Prompt
  pwLength = parseInt(window.prompt("Please enter password length (must be between 8 - 128 characters)"));
  while (pwLength < 8 || pwLength > 128) {
    alert("Not between 8-128 characters");
    pwLength = parseInt(window.prompt("Please enter password length (must be between 8 - 128 characters)"));
  };

  // Password Character Type Confirms
  var uppercase = window.confirm("Would you like your password to include lowercase letters? If yes, please select 'ok.' If not, please select 'cancel.'");
  var lowercase = window.confirm("Would you like your password to include uppercase letters? If yes, please select 'ok.' If not, please select 'cancel.'");
  var numbers = window.confirm("Would you like your password to include numsbers? If yes, please select 'ok.' If not, please select 'cancel.'");
  var sChars = window.confirm("Would you like your password to include special characters? If yes, please select 'ok.' If not, please select 'cancel.'");

  var pw = '';

  if (lowercase == true) {
    pw += letters;
  }
  if (uppercase == true) {
    pw += caps;
  }
  if (numbers == true) {
    pw += nums;
  }
  if (sChars == true) {
    pw += special;
  }
  
  // Password For Loop
  var password = "";
  for (var i = 0; i < pwLength; i++) {
    password += pw.charAt(Math.floor(Math.random() * pw.length));
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);