// Assignment Code
var generateBtn = document.querySelector("#generate");

var characters = {
  upperCase: {
    select: false,
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  },

  lowerCase: {
    select: false,
    chars: "abcdefghijklmnopqrstuvwxyz",
  },

  number: {
    select: false,
    chars: "1234567890",
  },

  specialCharacter: {
    select: false,
    chars: "!@#$%^&*()[]{}-=_+`~\/\\,.\'\":;|?",
  },
}

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
  password.length = speicfyTheLength();
// specify the possible characters can be used
  charactersSatisfied = generateCharactersSatisfied();
  console.log("charactersSatisfied" + charactersSatisfied);
// generate the password of certain length with charactersSatisfied and return it
  for (var i = 0; i < password.length; i++) {
    password[i] = "a";
  }
  return password.join('');
}

// specify the length of password
function speicfyTheLength() {
  var length = prompt("enter a number to specify the length of the password")
  length = parseFloat(length);
  if (!Number.isInteger(length) || length < 8 || length > 128) {
    alert("Please enter an integer between 8 to 128!");
    return speicfyTheLength();
  } else {
    return length;
  }
}

// specify the possible characters can be used
function generateCharactersSatisfied() {
  var charactersSatisfied = "";

  custermizeCharType();
  //iterate the objects in characters, concatenate the string if .selected is true
  for (var charType in characters) {
    if (characters[charType].select) {
      charactersSatisfied = charactersSatisfied.concat(characters[charType].chars);
    }
  }
  return charactersSatisfied;
}

function custermizeCharTypeSelect() {
  // custermize character type with confirm()
  characters.upperCase.select = confirm("Do you want upper case alphabets in your password?");
  characters.lowerCase.select = confirm("Do you want lower case alphabets in your password?");
  characters.number.select = confirm("Do you want numbers in your password?");
  characters.specialCharacter.select = confirm("Do you want special characters in your password?");
}

function resetCharTypeSelect() {
  characters.upperCase.select = false;
  characters.lowerCase.select = false;
  characters.number.select = false;
  characters.specialCharacter.select = false;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
