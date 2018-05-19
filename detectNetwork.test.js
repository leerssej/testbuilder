const expect = chai.expect;

const range = (start, end) => Array(end - start + 1).fill(start).map((value, i) => value + i);

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

for (let i = 0; i < netDir.length; i++) {
  describe(netDir[i].card, function() {
  netDir[i].prefix.forEach((prefix) => {
      netDir[i].length.forEach((ccnLen) => {
        let ccn = prefix.toString().padEnd(String(ccnLen), '1234567890');
        it(`has a prefix of ${prefix} and a length of ${ccnLen}: with CCN: ${ccn}`, function() {
          expect(detectNetwork(ccn)).to.equal(netDir[i].card);
        });
      });
    });
  });
}
