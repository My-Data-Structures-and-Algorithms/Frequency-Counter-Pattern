//Write a function called same, which accepts two arrays. The function should
//return true if every value in the array has its corresponding value squared
//in the second array. The frequency of values must be the same
/*
    Uderstand the problem
    i. Putting it in my own words: compare two arrays (array1 and array2). 
       Return True if all values in array1 appear squared in array 2; the sequence
       the values matters, if a value appears two times in array 1, it should have
       two equivalent squared values in array 2
    ii. inputs: two numeric arrays
    iii. outputs: boolean true
    iv. Assuming the question takes into account all other missing assumptions
        then yes, I have all the information I need
    v. function name: same, inputs: array1, array2, output: true or false

    Explore Concrete Examples
    i. Given same([1,2,3],[4,1,9]) // result = true
    ii. Given same([1,2,3],[1,9]]) // return false ,same([1,2,1],[4,4,1]]) // return false
    iii. Given same([],[4,9,16]) or same([2,5,7][], [][]) //return false
    iv. Given [3,'hi'][1,4] or [2,4][5, ''] //return false
    
    Break my solution down (Pseudo code)
    i. If the two arrays do not contain the same number of elements, then result is
       automatically false
    ii. In a loop, check to see if for a given value in the first array, there exists an index
        for the SQUARE of that value in the second array
    iii. If an index is not found return false
    iv. If it is found, remove that value from the second array and proceed to the next value
        in the second array 
   
*/

//Solve/Simplify the problem
// same([1,2,3],[4,1,9]) // result = true
// same([1,2,3][1,9]]) // return false
// same([1,2,1][4,4,1]]) // return false

//BASIC SOLUTION 0(N^2)
// let same = (arr1, arr2) => {
//     //If the two arrays do not contain the same number of elements, then result i
//     //automatically false
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     //In a loop, check to see if for a given value in the first array, there exists an index
//     //for the SQUARE of that value in the second array
//     for (let i = 0; i < arr1.length; i++) {
//         let correctIndex = arr2.indexOf(arr1[i] ** 2);
//         if (correctIndex === -1) {
//             return false;
//         }
//         arr2.splice(correctIndex,1);
//     }
//     return true;
// }

//FREQUENCY COUNTER IMPLEMENTATION
// let same = (arr1, arr2) => {
//     //create two objects that count the individual frequency of each value
//     //within the two different arrays
//     //same([1,2,3],[4,1,9])
//     let freqCounter1 = {};
//     let freqCounter2 = {};

//     for (const val of arr1) {
//         freqCounter1[val] = ++freqCounter1[val] || 1;
//     }

//     for (const val of arr2) {
//         freqCounter2[val] = (freqCounter2[val] || 0) + 1;
//     }

//     //compare frequencies in freqCounter1 with those in freqCounter2
//     for (const key in freqCounter1) {
//         if (!(key ** 2) in freqCounter2) {
//             return false;
//         }

//         if (freqCounter2[key ** 2] !== freqCounter1[key]) {
//             return false;
//         }
//     }

//     return true;

// }

let same = (arr1, arr2) => {
	//return false if length of the two arrays is not equal
	if(arr1.length !== arr2.length) return false;
	
	//create two empty objects to store freq of each value in the two arrays
	let arr1_freq = {};
	let arr2_freq = {};
	
	for(let val of arr1) {
		arr1_freq[val] = ++arr1_freq[val] || 1; //{1:1, 2:1, 3:1}
	}
    
	for(let val of arr2) {
		arr2_freq[val] = ++arr2_freq[val] || 1; //{1:1, 4:1, 9:1}
	}

	//compare the two objects to see if squared values for one object exist in the second object
	for(const key in arr1_freq) {
		//check to see if keys in one object exist in the other object
		if(!((key ** 2) in arr2_freq)) {
			return false;
		}

		if(arr2_freq[key ** 2] !== arr1_freq[key]) {
			return false;
		}
	}
	
	return true;
}  


console.log(same([1,2,3],[4,1,9])) // result = true
console.log(same([1,2,3],[1,9])); // return false
console.log(same([1,2,1],[4,4,1])); // return false



// Lookback and refactor
//     i. Does my code work
//     ii. Can I derive the solution in another way
//     iii. Can I understand my solution at a glance
//     iv. Can I refactor my solution
//     v. Can I improve my solution's performance
//     vi. Can I use my solution to solve a problem I have encountered in the past
//     vii. How have others solved the same problem

