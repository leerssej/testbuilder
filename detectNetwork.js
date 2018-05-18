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
 

// TODO: 
  // TODO move data on CC Network to this object after get more data together
    // const networkDirectory = [
    //   {card: 'Diner\'s Club',
    //   {prefix: [38, 39]}
    // ]
    // Visa always has a prefix of 4 and a length of 13, 16, or 19.
    // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
    // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
    // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
    // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

    
  // TODO refactor prefix slicer
        // let prefix = prefLen => Number(cardNumber.slice(0, prefLen));

  // TODO eliminate prefix slicing all together
   //initialize range function
   //create array of objects containing defined credit card prefixes, lengths, and names
   
      //str.startsWith(searchString[, position])
        //if(cardNumber.startsWith( 38, 0))
        // console.log(('380000').startsWith('38'))

        // get to work on list of numbers
        //console.log(['38', '39'].map(val => cardNumber.startsWith(val)));

        const range = (start, end) => Array(end - start + 1).fill(start).map((value, i) => value + i);

        const netDir = [
          {
           card: 'Diner\'s Club',
           prefix: [38, 39],
           length: [14],
          },

          //  if ([34, 37].includes(prefix) && ccnLen === 15) return 'American Express'
          {
           card: 'American Express',
           prefix: [34, 37],
           length: [15],
          },
         // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.
          {
           card: 'MasterCard',
           prefix: [51, 52, 53, 54, 55],
           length: [16],
          },
          // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.
          {
           card: 'Discover',
           prefix: [6011, ...range(644, 649), 65],
           length: [16, 19],
          },
          // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
          {
           card: 'Maestro',
           prefix: [5018, 5020, 5038, 6304],
           length: [...range(12, 19)],
          },          
          // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
          {
           card: 'China UnionPay',
           prefix: [...range(622126, 622925), ...range(6282, 6288), ...range(624, 626)],
           length: [...range(16, 19)],
          },
          // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
          {
           card: 'Switch',
           prefix: [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759],
           length: [16, 18, 19],
          },
         // Visa always has a prefix of 4 and a length of 13, 16, or 19.
          {
           card: 'Visa',
           prefix: [4],
           length: [13, 16, 19],
          },
        ];

        // test if any of those were true]
    // Helper functions
    const isTrue = (value) => Boolean(value);
    const checkPrefix = val => cardNumber.startsWith(val);
    
    // Establish card attributes
    const ccnLen = cardNumber.length;

    for(let i = 0; i < netDir.length; i++) {
      if (((netDir[i].prefix).map(val => cardNumber.startsWith(val)).some(isTrue)) && netDir[i].length.includes(ccnLen)) {
        return netDir[i].card
      }
    }
    return 'no corresponding network found'
};
        

          
  //  // Check number and Return Network
  //  // take prefix
  //   // slice off prefix length

  //   let stringPrefix = cardNumber.slice(0, 2)
  // // convert to number
  //   let prefix = Number(stringPrefix);
  //   // take length
  //   // length method
  //  // determine if prefix && length correspond to network
  //  // compare to object with correctly listed attributes
  //    // if found ? return network
  //  if ([38, 39].includes(prefix) && ccnLen === 14) return 'Diner\'s Club';
  //  if ([34, 37].includes(prefix) && ccnLen === 15) return 'American Express';
  //  if ([51, 52, 53, 54, 55].includes(prefix) && ccnLen === 16) return 'MasterCard';
  //  if ([65].includes(prefix) && [16, 19].includes(ccnLen)) return 'Discover';

  //  //if not found, set prefix to first digit in cardNumber
  //  stringPrefix = cardNumber.slice(0, 1);
  //  prefix = Number(stringPrefix);
  //  if ([4].includes(prefix) && [13, 16, 19].includes(ccnLen)) return 'Visa';

  //  stringPrefix = cardNumber.slice(0, 3);
  //  prefix = Number(stringPrefix);
  //  if ([644, 645, 646, 647, 648, 649].includes(prefix) && [16, 19].includes(ccnLen)) return 'Discover';

  //  stringPrefix = cardNumber.slice(0, 4);
  //  prefix = Number(stringPrefix);
  //  if ([6011].includes(prefix) && [16, 19].includes(ccnLen)) return 'Discover';
  //  // Maestro always has a prefix of 5018, 5020, 5038, or 6304, and a length of 12-19.
  //  if ([5018, 5020, 5038, 6304].includes(prefix) && [12, 13, 14, 15, 16, 17, 18, 19].includes(ccnLen)) return 'Maestro';


   // if not found? return 'no corresponding network found'
   // return 'no corresponding network found'


  // MasterCard always has a prefix of 51, 52, 53, 54, or 55 and a length of 16.

// };
