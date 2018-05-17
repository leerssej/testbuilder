// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

// IOCE
  // i: [string] Credit Card Num
  // o: [string] network name

// Strategy
   // take prefix
   // take length
   // determine if prefix && length correspond to network
     // if found ? return network
     // if not found? return 'no corresponding network found'

// Stubbing
  // Check number and Return Network
   // take prefix
    // slice off prefix length
    // convert to number

   // take length
    // length method

   // determine if prefix && length correspond to network
   // compare to object with correctly listed attributes
     // if found ? return network
     // if not found? return 'no corresponding network found'
 

    // TODO move data on CC Networks to this object after get more data together
    // const networkDirectory = {
    //   'Diner\'s Club': {}
    // }

   // Check number and Return Network
   // take prefix
    // slice off prefix length
    let stringPrefix = cardNumber.slice(0, 2)
  // convert to number
    let prefix = Number(stringPrefix);
    // take length
    // length method
    const ccnLen = cardNumber.length;
   // determine if prefix && length correspond to network
   // compare to object with correctly listed attributes
     // if found ? return network
   if ([38, 39].includes(prefix) && ccnLen === 14) return 'Diner\'s Club';
   if ([34, 37].includes(prefix) && ccnLen === 15) return 'American Express';
   if ([51, 52, 53, 54, 55].includes(prefix) && ccnLen === 16) return 'MasterCard';

   //if not found, set prefix to first digit in cardNumber
   stringPrefix = cardNumber.slice(0, 1);
   prefix = Number(stringPrefix);
   if ([4].includes(prefix) && [13, 16, 19].includes(ccnLen)) return 'Visa';

   // if not found? return 'no corresponding network found'
   return 'no corresponding network found'

  // Visa always has a prefix of 4 and a length of 13, 16, or 19.
  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

};
