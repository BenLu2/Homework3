// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Ask user for their choice
  var result           = '';
  var upper       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var number = "0123456789"
  var special = "!@#$%6&*()"
  var charactersLength = length;

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

//Object, an object key and value pairs 
// JSON, javascript object notation, a file that has an array of objects

var optionAnswers = {
  isUpper: isUpper,
  isLower: isLower,
  isNumber: isNumber,
  isSpecial: isSpecial
}

return optionAnswers;

  if (isUpper== true && isLower==true && isNumber==true && isSpecial==true)
  {
  for ( var i = 0; i < length; i++ ) {
    // Since I cannot solve the "at least one" by using the char.charAt solution and a loop, I looked the other way
    // This function first generate a random set of number, and than translated it to string
    // And by use toString(36) we are able to get a-z and 0-9
    var newstring = Math.random().toString(36).substr(2, length);
    var charset = newstring.concat(upper,special);  
    result += charset.charAt(Math.floor(Math.random() * length));
                                     }
  return result;
  }
  if (isUpper== true && isLower==true && isNumber==true && isSpecial!==true)
  {
   var result = Math.random().toString(36).substr(2, length);
  return result;
  }
}


// function that would generates a password 
function getRandom(arr) {
  var random = Math.floor(Math.random() * arr.length);
  var randomElement = arr[random]
  return randomElement;
}

// a function to generate password given input
function generateFinal() {
  var passwordOptions = generatePassword();
  var final = []
  var possibleChar = []
  var finalChar = []

  // conditional to put together the possible options
  // conct ['all the numbers', 'all the letters', ''] = possible
  if(passwordOptions.isNumber) {
    possibleChar = possibleChar.concat(number);
    finalChar.push(getRandom(number))
  };

  if(passwordOptions.isNumber) {
    possibleChar = possibleChar.concat(number);
    finalChar.push(getRandom(number))
  };  

return final.join('')

}

// console.log(generatePassword(length));

// Write password to the #password input
function writePassword() {
  var password = generatePassword(length);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);