// Assignment Code
let generateBtn = document.getElementById("generate");
let capChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowChar = "abcdefghijklmnopqrstuvwxyz";
let numChar = "1234567890";
let specialChar = "!#-_~.";
let passwordChars = '';


function writePassword() {

  let lengthConfirm = prompt("How many characters would you like your password to contain?", "Please enter a number between 8 and 128.")
  verifyAnswer(lengthConfirm);

  function verifyAnswer(input) {
    if(input < 8 || input > 128 || isNaN(input)){
      lengthConfirm = prompt("How many characters would you like your password to contain?", "Please enter a number between 8 and 128.")
      writePassword(lengthConfirm);
    };
  };

  function askForPreferences() {

    let capConfirm = confirm("Do you want your password to contain capital letters?");
      if(capConfirm !== true) {
        alert("Your password will not include capital letters.")
      }
    let lowConfirm = confirm("Do you want your password to contain lowercase letters?");
      if(lowConfirm !== true) {
        alert("Your password will not include lowercase letters.")
      }
    let numConfirm = confirm("Do you want your password to contain numbers?");
      if(numConfirm !== true) {
        alert("Your password will not include numbers.")
      }
    let charConfirm = confirm("Do you want your password to contain special characters?");
      if(charConfirm !== true) {
        alert("Your password will not include special characters.")
      }

    function createJumboString(capital, lowercase, numbers, characters){
      if(capital === true){
        passwordChars += capChar;
      }
      if(lowercase === true){
        passwordChars += (lowChar);
      }
      if(numbers === true){
        passwordChars += (numChar);
      }
      if(characters === true){
        passwordChars += (specialChar);
      }
    }

    createJumboString(capConfirm, lowConfirm, numConfirm, charConfirm);
    return;
  }

askForPreferences();

    function generatePassword(max) {
      let password = '';
   
      for(let i = 0; i < max; i++) {
        password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
        console.log(password);
      }

       // Write password to the #password input
       generateBtn.onclick = printPassword(password);

      function printPassword(password){
        let passwordText = document.getElementById("password");
        passwordText.value = password;
      }

    }
   generatePassword(lengthConfirm);
}

writePassword();


/* 
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/