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

// Generate a customized password
// Write password to the #password input
function writePassword() {
  reset = false;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Copy generated password to clipboard
function copyPassword() {
  if (reset) {
    alert("Please generate a password first");
  } else {
    var copyText = document.querySelector("#password");

    //Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    //Copy the text inside the text field
    document.execCommand("copy");
  }
}

// Generate another password with previous criteria
function generateMorePassword() {
  if (reset) {
    alert("Please generate a password first")
  } else {
    var passwordText = document.querySelector("#password");
    passwordText.value = randomizeCharacters(passwordLength, characterSet).join('');
  }
}

// Clear previous criteria and clear the text in #password
function resetCharacters() {
  var passwordText = document.querySelector("#password");
  passwordText.value = "";
  passwordLength = 0;
  characterSet = "";
  resetCharType();
  reset = true;
}

// Generate password with specified criteria
function generatePassword() {
  // specify the length of password
  passwordLength = setPasswordLength();
  // specify the character set to choose from
  characterSet = generateCharacterSet();

  // generate a character array of custermized length with custermized characterSed
  // change the character array to a string
  return randomizeCharacters(passwordLength, characterSet).join('');
}

// specify the length of password
function setPasswordLength() {
  var length = prompt("enter a number to specify the length of the password");
  length = parseFloat(length);
  // users must enter a valid integer before the next step
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

  // decide which small character set is selected
  custermizeCharType();

  //concatenate selected small character set to final set
  for (var charType in characters) {
    if (characters[charType].select) {
      characterSet = characterSet.concat(characters[charType].chars);
    }
  }
  return characterSet;
}

// custermize character type with confirm()
function custermizeCharType() {
  // customize character type
  for (var charType in characters) {
    characters[charType].select = confirm("Do you want " + characters[charType].phrase + " in your password?");
  }

  // users have to choose at least one character type to generate a password
  if (!characters.upperCase.select && !characters.lowerCase.select && !characters.number.select && !characters.specialCharacter.select) {
    alert("Please choose at least one type!");
    custermizeCharType();
  }
}

// clear the record of users' character type preference
function resetCharType() {
  for (var charType in characters) {
    characters[charType].select = false;
  }
}

// return a randomized character array of given length from a given string or a char array
function randomizeCharacters(length, characters) {
  var chars = [];
  for (var i = 0; i < length; i++) {
    chars.push(characters[randomizeNumber(characters.length)]);
  }
  return chars;
}

// generate a random positive integer less than number
function randomizeNumber(number) {
  return Math.floor(Math.random() * number);
}


