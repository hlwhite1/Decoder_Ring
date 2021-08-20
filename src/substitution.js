// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  // basic alphabet in a string 
  const arrangmentOfLetters = 'abcdefghijklmnopqrstuvwxyz';
  
  function substitution(input, alphabet, encode = true) {
    // your solution code here
 
    // checks if no sub alphabet is inputed or more then 26 chars
    if(!alphabet) return false;
    if(alphabet.length != 26) return false;
    // empty string to hold char 
    let result = '';
    // sets two aplhabets one for reguler alphabet and the other for the sub alphabet 
    let startingAlphabet = arrangmentOfLetters;
    let targetAlphabet = alphabet;
    // if encode is false switches what aphabet to use
    if(!encode) {
      startingAlphabet = alphabet;
      targetAlphabet = arrangmentOfLetters;
   }
    // loops through alphabet chars 
    for(let i = 0; i < input.length; i ++) {
      // checks if the alphabet does not contain duplicate chars 
      let arr = alphabet.split(alphabet[i]);
      if (arr.length > 2) return false;
      // sets all chars to lowercase 
      let inputChar = input[i].toLowerCase();
      // checks if there is a special char 
      let index = startingAlphabet.indexOf(inputChar);
      if(index === -1) { 
        result += inputChar; 
      } else {
      // grabs each char from the target alphabet index  
      let newChar = targetAlphabet[index];     
      result += newChar;
      } 
    }
    return result;
  }  
  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
