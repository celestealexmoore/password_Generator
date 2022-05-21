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
  // console.log(lengthConfirm);

  function verifyAnswer(input) {
    if(input < 8 || input > 128 || isNaN(input)){
      let newLengthConfirm = prompt("How many characters would you like your password to contain?", "Please enter a number between 8 and 128.")
      writePassword(newLengthConfirm);
      // console.log(newLengthConfirm);
    };
  }

  let capConfirm = confirm("Do you want your password to contain capital letters?");
    if(capConfirm === true) {
      alert("Your password will include capital letters.")
    }else{
      alert("Your password will not include capital letters.")
    }
  let lowConfirm = confirm("Do you want your password to contain lowercase letters?");
    if(lowConfirm === true) {
      alert("Your password will include lowercase letters.")
    }else{
      alert("Your password will not include lowercase letters.")
    }
  let numConfirm = confirm("Do you want your password to contain numbers?");
    if(numConfirm === true) {
      alert("Your password will include numbers.")
    }else{
      alert("Your password will not include numbers.")
    }
  let charConfirm = confirm("Do you want your password to contain special characters?");
    if(charConfirm === true) {
      alert("Your password will include special characters.")
    }else{
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

    function generatePassword(max) {
      // jumble it up and only give me 16 chars back.
      let password = '';
   
      for(let i = 0; i < max; i++) {
        password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
        console.log(password);
      }
    }
   generatePassword(lengthConfirm);
}

// Add event listener to generate button
generateBtn.onclick = writePassword();
 // Write password to the #password input
    // let password = generatePassword();
    // let passwordText = document.getElementById("#password");
    // passwordText.value = password;


/* 
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
*/