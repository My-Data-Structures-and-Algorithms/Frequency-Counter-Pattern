/** Given two strings, write a function to determine if the second is an anagram of the first
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as
 * cinema formed from iceman
 * 
 * Plan to slove problem(UEBSL)
 * Understand the problem
 * i. In my own words: a function that determines if the frequency of characters in two strings 
 * are the same
 * ii. Inputs: two strings ('cinema', 'iceman')
 * iii. Output: boolean true or boolean false if condition is not true
 * iv. Yes, I have been given details of all the necessary edge cases
 * v. Important pieces of data: function name - validAnagram, inputs: str1, str2, 
 *    Outputs: true/false, characters - char
 * 
 * Explore Concrete Examples
 * 1. Simple Examples: validAnagram('cinema','iceman') // returns true
 * 2. Complex Examples: validAnagram('texttwisttime is clear','timetwisttext clear is') //returns true
 * 3. Empty Inputs: validAnagram(,) //do nothing
 * 4. Invalid Inputs:  validAnagram(0,0), validAnagram(3,9) //do nothing
 * 
 * Break it down
 * 1. Crude Method
 *    i. return false if length of the two strings is not the same
 *    ii. loop through the first string and for each character,
 *    iii. check if there exists and index for that character in the second string
 *    iv. If it doesn't exist, return false
 *    v. If it exists, remove it from the second string and proceed to the next char 
 *       in first string
 * 
 * 2. Frequency Counter Method
 *    i. create two empty objects to store the frequency of each char in the two strings
 *    ii. if length of the two strings doesn't match, return false
 *    ii. Compare the two objects to determine if the frequencies of the chars in the two
 *        objects match
 */

//Solve/Simplify
//Crude method
// let validAnagram = (str1, str2) => {
//     //split the two strings so you can work on them as arrays
//     str1Arr = str1.split('');
//     str2Arr = str2.split('');

//     //return false if length of the two strings is not the same
//     if (str1Arr.length !== str2Arr.length) {
//         return false;
//     }
    
//     //validAnagram('cinema','iceman')
//     //loop through the first string and for each character,
//     for (let i = 0; i < str1Arr.length; i++) {

//         //check if there exists and index for that character in the second string
//         let correctIndex = str2Arr.indexOf(str1Arr[i]);

//         //if it does not exist, return false
//         if (correctIndex === -1) {
//             return false;
//         }

//         //If it exists, remove it from the second string and proceed to the next 
//         //char in first string
//         str2Arr.splice(correctIndex,1);
//     }

//     return true;
// }

// //Solve/Simplify
// //Frequency Counter method 1
// let validAnagram = (str1, str2) => {
//     //create two empty objects to store the frequency of each chars in the two strings
//     let freqCounter1 = {};
//     let freqCounter2 = {};

//     //if length of the two strings doesn't match, return false
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     //store the frequency of characters in string one
//     for (const char of str1) {
//         if (freqCounter1[char]) {
//             freqCounter1[char] += 1;
//         } else {
//             freqCounter1[char] = 1;
//         }
//     }

//     //store the frequency of characters in string two
//     for (const char of str2) {
//         if (freqCounter2[char]) {
//             freqCounter2[char] += 1;
//         } else {
//             freqCounter2[char] = 1;
//         }
//     }

//     for (const key in freqCounter1) {
//         //check to see if key in object one exists in object two
//         if(!(key in freqCounter2)) {
//             return false;
//         }

//         //check to see if the count of the char in obj one match those in obj two
//         if (freqCounter2[key] !== freqCounter1[key]) {
//             return false
//         }
//     }
    
//     return true;


// }

//Solve/Simplify
//Frequency Counter method 2
// let validAnagram = (str1, str2) => {
//     //If length of two strings does not match, return false
//     if (str1.length !== str2.length) {
//         return false;
//     }

//     //Create one object to store the frequency (count) of elements from 
//     //either of the two strings
//     let obj = {}

//     for (const char of str1) {
//         if (obj[char]) {
//             obj[char] += 1;
//         } else {
//             obj[char] = 1
//         }
//     }

//     console.log(obj);

//     //Loop over the second string to check if the count of a given 
//     //element within the object is not zero. For every element you loop over,
//     //keep reducing the count in the object by 1
//     for (const char of str2) {
//         if (!obj[char]) {
//             return false;
//         } else {
//             obj[char] -= 1;
//         }
//     }

//     //Return true if the comparison never returns a false  
//     return true;
// }

//practice solution
let validAnagram = (str1, str2) => {
	//return false if length of two strings doesn’t match
	if(str1.length !== str2.length) return false;
	
	// create a new empty object to hold the count of each char in the first string
	let obj = {}

	for(let char of str1) {
		obj[char] = ++obj[char] || 1; // {c:1, i:1, n:1, e:1, m:1, a:1 }
	}
	
	// iterate/loop over the second string to see if the count of char matches those in the new 
    // object
	for(let char of str2) {
		if(!obj[char]) {
			return false;
		} else {
			obj[char] -= 1;
		}
	}

	return true;
}  

console.log(validAnagram('','')); //true
console.log(validAnagram('aaz','zza')); //false
console.log(validAnagram('anagram','nagaram')); //true
console.log(validAnagram('rat','car')); //false
console.log(validAnagram('awesome','awesom')); //false
console.log(validAnagram('qwerty','qeywrt')); //true
console.log(validAnagram('texttwisttime','timetwisttext')); //true
console.log(validAnagram('texttwisttime ','timetwisttext ')); //true


