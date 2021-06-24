// Assignment Code
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");
var moreBtn = document.querySelector("#more");
var resetBtn = document.querySelector("#reset");
var reset = true;
var passwordLength = 0;
var characterSet = "";

var characters = {
  upperCase: {
    select: false,
    chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    phrase: "upper case alphabets",
  },

  lowerCase: {
    select: false,
    chars: "abcdefghijklmnopqrstuvwxyz",
    phrase: "lower case alphabets",
  },

  number: {
    select: false,
    chars: "1234567890",
    phrase: "numbers",
  },

  specialCharacter: {
    select: false,
    chars: " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
    phrase: "special characters",
  },
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);
moreBtn.addEventListener("click", generateMorePassword);
resetBtn.addEventListener("click", resetCharacters);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function copyPassword() {
  if (reset) {
    alert("Please generate a password first")
  } else {
    var copyText = document.querySelector("#password");

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  }
}

function generateMorePassword() {
  if (reset) {
    alert("Please generate a password first")
  } else {
    var password = [];
    var passwordText = document.querySelector("#password");
    password.length = passwordLength;

    for (var i = 0; i < password.length; i++) {
      password[i] = randomizeCharacter(characterSet);
    }
    passwordText.value = password.join('');
  }
}

function resetCharacters() {
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  reset = true;
  passwordLength = 0;
  characterSet = "";
  resetCharType();

}


// Generate password with specified criteria
function generatePassword() {
  var password = [];
  // specify the length of password
  reset = false;
  password.length = setPasswordLength();
  passwordLength = password.length;
  // specify the possible characters can be used
  characterSet = generateCharacterSet();

  // generate the password of certain length with charactersSatisfied and return it
  for (var i = 0; i < password.length; i++) {
    password[i] = randomizeCharacter(characterSet);
  }
  return password.join('');
}

// specify the length of password
function setPasswordLength() {
  var length = prompt("enter a number to specify the length of the password");
  length = parseFloat(length);
  if (!Number.isInteger(length) || length < 8 || length > 128) {
    alert("Please enter an integer between 8 to 128!");
    return setPasswordLength();
  } else {
    return length;
  }
}

// specify the possible characters can be used
function generateCharacterSet() {
  characterSet = "";

  custermizeCharType();
//iterate the objects in characters, concatenate the string if .select is true
  for (var charType in characters) {
    if (characters[charType].select) {
      characterSet = characterSet.concat(characters[charType].chars);
    }
  }
  return characterSet;
}

// custermize character type with confirm()
function custermizeCharType() {
  for (var charType in characters) {
    characters[charType].select = confirm("Do you want " + characters[charType].phrase + " in your password?");
  }

  if (!characters.upperCase.select && !characters.lowerCase.select && !characters.number.select && !characters.specialCharacter.select) {
    alert("Please choose at least one type!");
    custermizeCharType();
  }
}

function resetCharType() {
  for (var charType in characters) {
    characters[charType].select = false;
  }
}

// randomize a character from a given string or char array
function randomizeCharacter(characters) {
  var index = Math.floor(Math.random() * characters.length);
  return characters[index];
}


