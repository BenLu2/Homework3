// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Ask user for their choice
  var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",  "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var specialCharacterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];
  var charactersLength = length;
//force error message if the password length is not between the desired range
  var length = window.prompt("Please enter the length of the password between 8 and 128:");
  if (length > 128 || length < 8)
  {
    alert ("Invalid input value, please try again");
    return;
  }
  var isUpper = confirm("Is upper case required?");
  var isLower = confirm ("Is lower case required?");
  var isNumber = confirm("Is number required?");
  var isSpecial = confirm("Is special character required?");
  var finalResult = [];
  var userArray = [];


// use if statement to check the input result

if (isUpper){
  finalResult = finalResult.concat(upperCaseArray);
}
if (isLower){
  finalResult = finalResult.concat(lowerCaseArray);
}
if (isNumber){
  finalResult = finalResult.concat(numbArray);
}

if (isSpecial){
  finalResult = finalResult.concat(specialCharacterArray);
}

for (var i = 0; i < length; i++) {     
  userArray.push (finalResult[Math.floor(Math.random() * finalResult.length)]); 
  }
  return userArray.join("") ;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);