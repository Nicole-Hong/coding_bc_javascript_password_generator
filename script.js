// Assignment code here

// Requirements:
// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

function generatePassword() {
  var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var special = ['(', ')', '[', ']', '{', '}', '!', '#', '$', '%', '?', '@', '+', '-', '*', '^', ':', ';', ',', '~', '_', '.'];
  var possibleCombination = [];

  // Get input and validate
  let numChars = prompt("Please enter the length of the password between 8-128 characters.");
  numChars = parseInt(numChars, 10);

  if (isNaN(numChars) || numChars < 8 || numChars > 128) {
    return "That is not a valid number. Please enter again.";
  }

  alert("Number of characters in your password: " + numChars);


  isLower = confirm("Do you want to include lowercase characters?");
  alert(isLower ? "Your password will have lowercase characters." : "Your password will NOT have lowercase characters.");

  isUpper = confirm("Do you want to include uppercase characters?");
  alert(isUpper ? "Your password will have uppercase characters." : "Your password will NOT have uppercase characters.");

  isNumber = confirm("Do you want to include numbers?");
  alert(isNumber ? "Your password will have numbers." : "Your password will NOT have numbers.");

  isSpecial = confirm("Do you want to include special characters?");
  alert(isSpecial ? "Your password will have special characters." : "Your password will NOT have special characters.");

  if (!isLower && !isUpper && !isNumber && !isSpecial) {
    return "Please select at least one character type.";
  }

  // Group selected characters
  if (isLower) {
    possibleCombination = possibleCombination.concat(lowercase);
  }
  if (isUpper) {
    possibleCombination = possibleCombination.concat(uppercase);
  }
  if (isNumber) {
    possibleCombination = possibleCombination.concat(numeric);
  }
  if (isSpecial) {
    possibleCombination = possibleCombination.concat(special);
  }

  // pick random cards out of new pool for length of password
  let finalPassword = ""
  for (let i = 0; i < numChars; i++) {
    let wp =[Math.floor(Math.random() * possibleCombination.length)];
    finalPassword = finalPassword + possibleCombination[wp];
  }

  return finalPassword;
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