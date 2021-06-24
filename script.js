// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Generate password with specified criteria
function generatePassword() {
  var password = [];
  var charactersSatisfied;
// specify the length of password
  // password.length = speicfyTheLength();
  password.length = prompt("enter a number to specify the length of the password");
// specify the possible characters can be used
  // charactersSatisfied = generateCharactersSatisfied();
// generate the password of certain length with charactersSatisfied and return it
  for (var i = 0; i < password.length; i++) {
    password[i] = "a";
  }
  return password.join('');
}

// specify the length of password
function speicfyTheLength() {
  return 5;
}

// specify the possible characters can be used
function generateCharactersSatisfied() {
  return "abcdefg";
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
