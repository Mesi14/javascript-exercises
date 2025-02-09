const reverseString = function(mystr) {
  let reversedString = '';
  for(let i=mystr.length-1;i>=0;i--) reversedString += mystr[i];
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
