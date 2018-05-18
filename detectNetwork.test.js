  // Helper functions
  const range = (start, end) => Array(end - start + 1).fill(start).map((value, i) => value + i);
  const isTrue = (value) => Boolean(value);
  const checkPrefix = val => cardNumber.startsWith(val);

  const netDir =  [
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










/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

// describe('Introduction to Mocha Tests - READ ME FIRST', function() {
//   // A Mocha test is just a function!
//   // If the function throws an error when run, it fails.
//   // If it doesn't throw an error when run, it doesn't fail.
//   // To read more about mocha, visit mochajs.org

//   // Once you've read and understood this section, please comment it out.
//   // You will not be able to proceed with a failing test.

//   it('Doesn\'t throw an error, so it doesn\'t fail', function() {
//     // This test doesn't really test anything at all! It will pass no matter what.
//     var even = function(num){
//       return num/2 === 0;
//     }
//     return even(10) === true;
//   });

//   // In tests, we want to compare the expected behavior to the actual behavior.
//   // A test should only fail if the expected behavior doesn't match the actual.
//   it('Throws an error when expected behavior does not match actual behavior', function() {
//     var even = function(num){
//       return num%2 === 0;
//     }

//     if(even(10) !== true) {
//       throw new Error('10 should be even!');
//     }
//   });
// });
const expect = chai.expect;
const assert = chai.assert;
const should = chai.should;

// const range = (start, end) => Array(end - start + 1).fill(start).map((value, i) => value + i);

// describe('Diner\'s Club', function() {

//   it('has a prefix of 38 and a length of 14', function() {
 
//     if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
//       throw new Error('Test failed');
//     }
//   });

//   it('has a prefix of 39 and a length of 14', function() {
//     if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
//       throw new Error('Test failed');
//     }
 
//   });
// });

// describe('American Express', function() {
//   // It can get annoying to keep typing the if/throw, so here is a
//   // helper function to throw an error if the input statement isn't true. 
//   var assert = function(isTrue) {
//     if(!isTrue) {
//       throw new Error('Test failed');
//     }
 
//   };

//   it('has a prefix of 34 and a length of 15', function() {
//     assert(detectNetwork('343456789012345') === 'American Express');
//   });

//   it('has a prefix of 37 and a length of 15', function() {
//     assert(detectNetwork('373456789012345') === 'American Express');
//   });
// });

// describe('Visa', function() {
//   // Chai is an entire library of helper functions for tests!
//   // Chai provides an assert that acts the same as our previous assert.
//   // Search the documentation to figure out how to access it. 
//   //   http://chaijs.com/ 

//   it('has a prefix of 4 and a length of 13', function() {
//     assert(detectNetwork('4123456789012') === 'Visa');
//   });

//   it('has a prefix of 4 and a length of 16', function() {
//     assert(detectNetwork('4123456789012345') === 'Visa');
//   });

//   it('has a prefix of 4 and a length of 19', function() {
//     assert(detectNetwork('4123456789012345678') === 'Visa');
//   });
// });

// describe('MasterCard', function() {
//   // Chai lets you write more human-readable tests that throw helpful errors.
//   // Expect syntax is one way to do this, but there are others. 
//   // If you want to know more, check out the documentation. 
//   //   http://chaijs.com/api/bdd/
 
//   it('has a prefix of 51 and a length of 16', function() {
//     expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
//   });
 
//   it('has a prefix of 52 and a length of 16', function() {
//     expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
//   });
 
//   it('has a prefix of 53 and a length of 16', function() {
//     expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
//   });
 

//   // You can also use should instead of expect, which changes the style
//   // slightly. It really doesn't matter which one you use - check out 
//   // http://chaijs.com/guide/styles/ for more info, but it's important
//   // to be consistent (unlike in this file, where we use BOTH expect
//   // and should, but that's just for learning), so once you've gotten 
//   // these tests to pass using should syntax, refactor your tests to 
//   // use either expect or should, but not both. 

  
//   it('has a prefix of 54 and a length of 16', function() {
//     expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
//   });
 
//   it('has a prefix of 55 and a length of 16', function() {
//     expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
//   })
 
// });

// describe('Discover', function() {
//   // Tests without a function will be marked as "pending" and not run
//   // Implement these tests (and others) and make them pass!
//   // Discover always has a prefix of 6011, 644-649, or 65, and a length of 16 or 19.

//   [6011, 644, 645, 646, 647, 648, 649, 65].forEach(prefix => {
//     [16, 19].forEach(ccnLen => {
//       let ccn = prefix.toString().padEnd(String(ccnLen), '1234567890');
//       it(`has a prefix of ${prefix} and a length of ${ccnLen}: with CCN: ${ccn}`, function() {
//         expect(detectNetwork(ccn)).to.equal('Discover');
//       });
//     });
//   });
 // });

//0 diner, 1 american, 2 master, 3 discover, 4 maestro, 5 china ,6 china, 7 switch, 8 visa
for (let i = 0; i < netDir.length; i++) {
  describe(netDir[i].card, function() {
  netDir[i].prefix.forEach((prefix, j) => {
      netDir[i].length.forEach((ccnLen, k) => {
        let ccn = prefix.toString().padEnd(String(ccnLen), '1234567890');
        it(`has a prefix of ${prefix} and a length of ${ccnLen}: with CCN: ${ccn}`, function() {
          expect(detectNetwork(ccn)).to.equal(netDir[i].card);
        });
      });
    });
  });
}

// describe('Maestro', function() {

//   [5018, 5020, 5038, 6304].forEach(prefix => {
//     [12, 13, 14, 15, 16, 17, 18, 19].forEach(ccnLen => {
//       let ccn = prefix.toString().padEnd(String(ccnLen), '1234567890');
//       it(`has a prefix of ${prefix} and a length of ${ccnLen}: with CCN: ${ccn}`, function() {
//         expect(detectNetwork(ccn)).to.equal('Maestro');
//       });
//     });
//   });
// });

// describe('should support China UnionPay', function() {
//   const longPrefixes = range(622126, 622925)
//   const mediPrefixes = range(6282, 6288)
//   const shrtPrefixes = range(624, 626)
//   const allPrefixes = [...longPrefixes, ...mediPrefixes, ...shrtPrefixes]

//   allPrefixes.forEach(prefix => {
//     range(16, 19).forEach(ccnLen => {
//       let ccn = prefix.toString().padEnd(String(ccnLen), '1234567890');
//       it(`has a prefix of ${prefix} and a length of ${ccnLen}: with CCN: ${ccn}`, function() {
//         expect(detectNetwork(ccn)).to.equal('China UnionPay');
//       });
//     });
//   });
// });

// describe('should support Switch', function() {
// // Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
//   [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759].forEach(prefix => {
//     [16, 18, 19].forEach(ccnLen => {
//       let ccn = prefix.toString().padEnd(String(ccnLen), '1234567890');
//       it(`has a prefix of ${prefix} and a length of ${ccnLen}: with CCN: ${ccn}`, function() {
//         expect(detectNetwork(ccn)).to.equal('Switch');
//       });
//     });
//   });
// });


