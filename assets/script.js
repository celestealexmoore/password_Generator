// Assignment Code
let generateBtn = document.getElementById("generate");
let capChar = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let lowChar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let numChar = ["1","2","3","4","5","6","7","8","9","0"];
let specialChar = ["!","#","-","_","~","."];

// Write password to the #password input
function writePassword() {
  // let password = generatePassword();
  // let passwordText = document.getElementById("#password");

  // passwordText.value = password;

  let capConfirm = confirm("Do you want your password to contain capital letters?");
    if(capConfirm === true) {
      alert("Your password will include capital letters.")
      console.log("Include capital letters");
    }else{
      alert("Your password will not include capital letters.")
      console.log("Do not include capital letters");
    }
  let lowConfirm = confirm("Do you want your password to contain lowercase letters?");
    if(lowConfirm === true) {
      alert("Your password will include lowercase letters.")
      console.log("Include lowecase letters");
    }else{
      alert("Your password will not include lowercase letters.")
      console.log("Do not include lowercase letters");
    }
  let numConfirm = confirm("Do you want your password to contain numbers?");
    if(numConfirm === true) {
      alert("Your password will include numbers.")
      console.log("Include numbers");
    }else{
      alert("Your password will not include numbers.")
      console.log("Do not include numbers");
    }
  let charConfirm = confirm("Do you want your password to contain special characters?");
    if(charConfirm === true) {
      alert("Your password will include special characters.")
      console.log("Include special characters");
    }else{
      alert("Your password will not include special characters.")
      console.log("Do not include special characters");
    }


}

// Add event listener to generate button
generateBtn.onclick = writePassword();
