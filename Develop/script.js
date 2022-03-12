// when I click the button for the password, I should be presented some prompts from which to choose password criteria

// these prompts will let me choose the critera for my password (upper, lower, special, numerals)

// User will also be prompted for length criteria (maybe array.length?), between 8 and 128

// user input should be validated and at least one character type should be selected

// after all prompts are answered, a password should be genereated.

// when the password is generated, it should either be displayed in an alert or written on the page.


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
