// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  function caesar(input, shift, encode = true) {
    // your solution code here
    // if shift amount is 0, above 25, or less then -25 early returns false 
    if (!shift || shift === 0 || shift < -25 || shift > 25) {
      return false;
    };
    // sets empty result to empty string 
    let result = '';
    // for decoding, this reverses the switch to do the oppisite of encoding 
    if(!encode) shift  *= -1;
    // loops through the input 
    for(let i = 0; i < input.length; i++) {
      // sets input to lowercase   
      let char = input[i].toLowerCase();     
      // checks for special char 
      let index = alphabet.indexOf(char);
      if (index === -1) {
        result += char;
        continue;
      } else {
        // switches the chars
        let newIndex = index + shift;
        if (newIndex < 0) newIndex += 26;
        if (newIndex > 25) newIndex %= 26;
        let newChar = alphabet.charAt(newIndex);
        result += newChar;
        
      }}
   return result;   
  }
    
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
