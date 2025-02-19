const palindromes = function(s) {
    let cleanedS = s.replace(/[^0-9A-Z]+/gi,"");
    let reverseS = cleanedS.toLowerCase().split("").reverse().join("");
    return reverseS == cleanedS.toLowerCase() ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
