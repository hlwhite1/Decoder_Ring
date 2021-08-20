// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  // in the codex object, each a-z letter is assigned its corresponding value in the polybius square.
  const codex = {
    'a': 11,
    'b': 21,
    'c': 31,
    'd': 41,
    'e': 51,
    'f': 12,
    'g': 22,
    'h': 32,
    'i': 42,
    'j': 42,
    'k': 52,
    'l': 13,
    'm': 23,
    'n': 33,
    'o': 43,
    'p': 53,
    'q': 14,
    'r': 24,
    's': 34,
    't': 44,
    'u': 54,
    'v': 15,
    'w': 25,
    'x': 35,
    'y': 45,
    'z': 55
  };

  function polybius(input, encode = true) {
    // your solution code here
      /// encode block
    if (encode) {
      const encodedMessage = input.toLowerCase().split('')
        .map((char) => {
        /* this for...in loop changes each character in the input into a digit pair,
             based on the codex object.
          */
          for (let letter in codex) {
            if (letter === char) {
              return `${codex[letter]}`;
            }
            // if the character is a space, it is unchanged instead.
            else if (char.charCodeAt(0) === 32) {
              return char;
            }
          }
        });
      return encodedMessage.join('');
    }
    // decode block
    else if (!encode) {
      const checkingInputLength = input.split('').filter((char) => {
        return (char.charCodeAt(0) >= 48 && char.charCodeAt(0) <= 53);
      });
      // early return to check if there are an even number of digits in the input.
      if (checkingInputLength.length % 2 === 1) {
        return false;
      }
      // each word is split into its own index in the new array with the split method.
      const splitInput = input.split(' ')
        .map((word) => {
        /* each word is then put into a new array (inside the splitInput array), where each
           index is a digit pair using the match method below.
        */
          return word.match(/.{1,2}/g);
        });
      // in block below, digit pairs are transformed into their corresponding a-z characters.
      const decodedOutput = splitInput.map((word) => {
        return word.map((pair) => {
          // if digit pair is 42, return (i/j) instead of i or j.
          if (pair == 42) {
            return '(i/j)';
          }
          else {
            /* in this for...in loop, all other digit pairs are turned into their corresponding letter,
               according to the codex object.
            */
            for (let letter in codex) {
              if (pair == codex[letter]) {
                return `${letter}`;
              }
            }
          }
        });
      });
      // transformed letters that constitute one word are rejoined in code below.
      const rejoinedOutput = decodedOutput.map((word) => {
        return word.join('');
      });
      // join method below joins all words with a space, if there are multiple words.
      return rejoinedOutput.join(' ');
    }
  }
  

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
