var detectNetwork = function(cardNumber) {
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

  // Helper functions
  const isTrue = (value) => Boolean(value);
  const checkPrefix = val => cardNumber.startsWith(val);

  for(let i = 0; i < netDir.length; i++) {
    if (((netDir[i].prefix).map(val => cardNumber.startsWith(val)).some(isTrue)) && netDir[i].length.includes(cardNumber.length)) {
      return netDir[i].card
    }
  }
  return 'no corresponding network found'
};
