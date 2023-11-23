// ## Ex1

// function calculate(B, C, D) {
//     var A = B * C - D;
//     return A;
//    }

//    console.log("A = ", calculate(5, 10, 3));


// ## Ex2

// function totalTime(day, time) {
//     let totalTime = (day) * 24 + time;
//     return totalTime;
// }

// console.log("Total Time:", totalTime(3,10)); 
// console.log("Total Time: " , totalTime ( 3,10 ) ) ;


// ## Ex3

// function max(num1, num2) {
//     return (num1 > num2) ? num1 : num2;
//    }

// console.log("max number : ", max(10, 20));

// ## Ex 4

// function calculateArea(length, width) {
//     return length * width;
// }
// console.log("Тэгш өнцөгтийн талбай нь:", calculateArea(20, 30));


// ## Ex 5

// function checkPoint(score) {
//     let grade;
   
//     if (score >= 90) {
//        grade = 'A';
//     } else if (score >= 80) {
//        grade = 'B';
//     } else if (score >= 70) {
//        grade = 'C';
//     } else if (score >= 60) {
//        grade = 'D';
//     } else {
//        grade = 'F';
//     }

//     return grade;
//    }
   
//    console.log("Yсгэн үнэлгээнүүд:", checkPoint(85));

// ## Ex 6

// function findLargestElement(array) {
//     let largestElement = array[0];
   
//     for (let i = 1; i < array.length; i++) {
//        if (array[i] > largestElement) {
//          largestElement = array[i];
//        }
//     }
   
//     return largestElement;
//    }
   
//    const numbers = [3, 8, 1, 12, 5, 7];
//    console.log("Hamgiin ih element ni : " , findLargestElement ( numbers ) ) ; 

// ## Ex 7

// const originalArray = [1, 2, 3, 4, 5];

// function reverseArray(arr) {
//     let reversedArray = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         reversedArray.push(arr[i]);
//     }
//     return reversedArray;
// }

// console.log("Reversed Array:", reverseArray(originalArray));


// ## Ex 7 bonus 

// const unsortedArray = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
// function sortArray(unsortedArray) {
//     return unsortedArray.sort((a, b) => a - b);
// }

// sortArray(unsortedArray);
// console.log("eremblegdsen array:", unsortedArray);