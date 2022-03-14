// when I click the button for the password, I should be presented some prompts from which to choose password criteria

// these prompts will let me choose the critera for my password (upper, lower, special, numerals)

// User will also be prompted for length criteria (maybe array.length?), between 8 and 128

// user input should be validated and at least one character type should be selected

// after all prompts are answered, a password should be genereated.

// when the password is generated, it should either be displayed in an alert or written on the page.

var upperCaseTrue = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseTrue = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbersTrue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialCharTrue = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
var usableChar = [];
console.log(usableChar);






console.log(upperCaseTrue);
console.log(lowerCaseTrue);
console.log(numbersTrue);
console.log(specialCharTrue);

function generatePassword() {

  // password length
  var passLength = parseInt(window.prompt("choose how long you would like your password to be. Must be between 8 and 128 characters."));
  console.log(passLength);

  if(passLength === "" || passLength === null) {
    window.alert("You need to provid a valid answer. Please try again!");
    return generatePassword();
  }

  //what happens when player types in answer for passlength?
  if(passLength < 8 || passLength > 128) {
    window.alert("You need to provid a valid answer. Please try again!");
    return generatePassword();
  }

  // uppercase in password
  var upper = window.confirm("click OK to include uppercase characters in your password");
  // if(upper){
  //   usableChar = usableChar.concat(upperCaseTrue);
  // }

  // lowercase in password
  var lower = window.confirm("click OK to include lowercase characters in your password");
  // if(lower){
  //   usableChar = usableChar.concat(lowerCaseTrue);
  // }

  // numbers in password
  var number = window.confirm("click OK to include numbers in your password");
  // if(number){
  //   usableChar = usableChar.concat(numbersTrue);
  // }

  // special in password
  var special = window.confirm("click OK to include special characters in your password");
  // if(number){
  //   usableChar = usableChar.concat(specialCharTrue);
  // }

  // how to get multiple results, in the amount of passLength?

  var password = "";
  for(var i = 0; i < passLength; i++) {

    // all possibilities
    if(upper && lower && number && special) {
      usableChar = usableChar.concat(upperCaseTrue, lowerCaseTrue, numbersTrue, specialCharTrue);
      password += usableChar[Math.floor(Math.random() * usableChar.length)];
    }
    // Three possibilites
    else if (upper && lower && number && special === false) {
      usableChar = usableChar.concat(upperCaseTrue, lowerCaseTrue, numbersTrue);
      password += usableChar[Math.floor(Math.random() * usableChar.length)];
    }
    else if (upper && lower && number === false && special) {
      usableChar = usableChar.concat(upperCaseTrue, lowerCaseTrue, specialCharTrue);
      password += usableChar[Math.floor(Math.random() * usableChar.length)];
    }
    else if (upper && lower === false && number && special) {
      usableChar = usableChar.concat(upperCaseTrue, numbersTrue, specialCharTrue);
      password += usableChar[Math.floor(Math.random() * usableChar.length)];
    }
    else if(upper === false && lower && number && special) {
      usableChar = usableChar.concat(lowerCaseTrue, numbersTrue, specialCharTrue);
      password += usableChar[Math.floor(Math.random() * usableChar.length)];
    }

    // two possibilities
    else if(upper && lower && number === false && special === false) {
      usableChar = usableChar.concat(upperCaseTrue, lowerCaseTrue);
      password += usableChar[Math.floor(Math.random() * usableChar.length)];
    }
    else if(upper && lower === false && number && special === false) {
      usableChar = usableChar.concat(upperCaseTrue, numbersTrue);
      password += usableChar[Math.floor(Math.random() * usableChar.length)];
    }
    else if(upper === false && lower && number && special === false) {
      usableChar = usableChar.concat(lowerCaseTrue, numbersTrue);
      password += usableChar[Math.floor(Math.random() * usableChar.length)];
    }
    else if(upper && lower === false && number === false && special) {
      usableChar = usableChar.concat(upperCaseTrue, specialCharTrue);
      password += usableChar[Math.floor(Math.random() * usableChar.length)];
    }
    else if(upper === false && lower && number === false && special) {
      usableChar = usableChar.concat(lowerCaseTrue, specialCharTrue);
      password += usableChar[Math.floor(Math.random() * usableChar.length)];
    }
    else if(upper === false && lower === false && number && special) {
      usableChar = usableChar.concat(numbersTrue, specialCharTrue);
      password += usableChar[Math.floor(Math.random() * usableChar.length)];
    }

    // one possibilities
    else if(upper && lower === false && number === false && special === false) {
      usableChar = usableChar.concat(upperCaseTrue);
      password += usableChar[Math.floor(Math.random() * usableChar.length)];
    }
    else if(upper === false && lower && number === false && special === false) {
      usableChar = usableChar.concat(lowerCaseTrue);
      password += usableChar[Math.floor(Math.random() * usableChar.length)];
    }
    else if(upper === false && lower === false && number && special === false) {
      usableChar = usableChar.concat(numbersTrue);
      password += usableChar[Math.floor(Math.random() * usableChar.length)];
    }
    else if(upper === false && lower === false && number === false && special) {
      usableChar = usableChar.concat(specialCharTrue);
      password += usableChar[Math.floor(Math.random() * usableChar.length)];
    }
    else {
      window.alert("Please provide a valid response!")
      return generatePassword();
    }
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
generateBtn.addEventListener("click", function() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

})

