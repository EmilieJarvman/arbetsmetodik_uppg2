// -------- FUNCTION 5 --------
// Function that will make a string the argument and return true if it is a palindrome, and false if it is not a palindrome


const palindrome = (palindromeString) => {
    const palindromified = palindromeString.toLowerCase().replace(" ", "").split("").reverse().join("");
    return palindromified === palindromeString.toLowerCase().replace(" ", "");
};


module.exports = palindrome;

// TRUE PALINDROMES TO TEST:
// "borrow or rob"
// "taco cat"
// "was it a car or a cat I saw"