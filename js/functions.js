/**
 * Checks if string length fits in specified max length
 * @param {String} string String whose length to check
 * @param {Number} maxLength Max length of a string
 * @returns True if less than max length, false otherwise
 */
const stringFits = (string, maxLength) => string.length <= maxLength;

/**
 * Tests 'stringFits' function
 * @returns True if tests completed succesfully, false otherwise
 */
const stringFitsTests = () => {
  const testStr = 'Test string for testing string test';

  const res1 = stringFits(testStr, 10) === false;
  const res2 = stringFits(testStr, 20) === false;
  const res3 = stringFits(testStr, 100) === true;
  const res4 = stringFits(testStr, 200) === true;

  return res1 && res2 && res3 && res4;
};

export const stringFitsResults = stringFitsTests();

/**
 * Checks if string is a palindrome
 * @param {String} string String
 * @returns True if string is a palindrome, false otherwise
 */
const isPalindrome = (string) => {
  const formattedString = string.toLowerCase().replaceAll(' ', '');
  let reversedString = '';

  for (let i = formattedString.length - 1; i >= 0; i--) {
    reversedString += formattedString[i];
  }

  return reversedString === formattedString;
};

/**
 * Tests 'stringFits' function
 * @returns True if tests completed succesfully, false otherwise
 */
const isPalindromeTests = () => {
  const res1 = isPalindrome('топот') === true;
  const res2 = isPalindrome('штаны') === false;
  const res3 = isPalindrome('ДовОд') === true;
  const res4 = isPalindrome('Лёша на полке клопа нашёл ') === true;

  return res1 && res2 && res3 && res4;
};

export const isPalindromeResults = isPalindromeTests();
