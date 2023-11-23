// let fruits = prompt("jimsnii neree taslalaar tusgaarlat oruulna uu: ");

// let array = fruits.split(" ") 
// console.log(array)
// let string2 = fruits.join(" ")
// console.log(string2)





// let fruits = prompt("jimsnii neree taslalaar tusgaarlat oruulna uu: ");
// fruits = fruits.split(",");
// fruits.push("banana");
// console.log(fruits);







// let numbers = [];

// numbers.push(1);
// numbers.push(2);
// numbers.push(3);

// console.log(numbers);







// let names = prompt("neree taslalaar tusgaarlan oruulaarai: ").split(',');
// let index = names.indexOf('nomin');
// alert("end 'nomin' baina: " + index);






// let ages = prompt("Насаа зайгаар тусгаарлан оруулна уу:").split(',').map(Number);
// let index = ages.indexOf(40);

// if (index === -1) {
//     alert("ийм утга алгач");
// } else {
//     alert("ийм утга байна");
// }







// let colors = prompt("ongoo taslalaar tusgaarlan oruulna uu:").split(',');

// let lastColor = colors.pop();

// alert(colors);





// let animals = prompt("amitni neree taslalaar tusgaarlan oruulna uu: ").split(',');

// let removedAnimals = animals.splice(0, 2);

// alert( animals.join(", "));



// let numbers = [1,2,3,4];

// numbers.length = 0;

// console.log(numbers);



// let numbers = [1, 2, 3];
// let newNumbers = [...numbers, 4];

// console.log(newNumbers);






// let numbers = prompt("toogoo taslalaar tusgaarlan oruulna uu: ").split(',');

// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }





// let numbers = prompt("toogoo taslalaar tusgaarlan oruulna uu: ");


// let numbersArray = numbers.split(",");

// let threediv = [];
// for (let i = 0; i < numbersArray.length; i++) {
//     if (numbersArray[i] % 3 === 0) {
//         threediv.push(numbersArray[i]);
//     }
// }

// if (threediv.length === 0) {
//     alert("3 huvaagddag too alga");
// } else {
//     alert("3 huvaadag too: " + threediv.join(", "));
// }






// let start = prompt("taslalaar toogoo oruulna uu: ");

// let numbers = [];
//     for (let i = 0; i <= start.length; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             numbers.push(i);
//         }
//     }

//     // Display the numbers using an alert
//     if (numbers.length > 0) {
//         alert(numbers.join(", "));
//     } else {
//         alert("3 bolon 5 huvaadag too alga bn.");
//     }





// let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// let input = prompt('ugee oruulna uu:', '').toLowerCase();
// let result = [];

// for (let i = 0; i < input.length; i++) {
//     if (alphabet.includes(input[i])) {
//         result.push(alphabet.indexOf(input[i]) + 1);
//     }
// }

// alert(result.join(', '));








// const students = [
//     { name: "Alice", point: 90 },
//     { name: "Bob", point: 55 },
//     { name: "Charlie", point: 78 },
//     { name: "David", point: 22 },
//     { name: "Eve", point: 68 },
//     { name: "Frank", point: 36 },
//     { name: "Grace", point: 95 },
//     { name: "Hannah", point: 89 },
//     { name: "Ivy", point: 83 },
//     { name: "Jack", point: 41 },
//     { name: "Katie", point: 87 },
//     { name: "Liam", point: 84 },
//     { name: "Mia", point: 79 },
//     { name: "Noah", point: 93 },
//     { name: "Olivia", point: 86 },
//     { name: "Peter", point: 57 },
//     { name: "Quinn", point: 94 },
//     { name: "Ryan", point: 80 },
//     { name: "Sophia", point: 75 },
//     { name: "Tyler", point: 46 }
//   ];

// const grade = prompt("Select grades A, B, C, D, F:").toUpperCase();


// const filteredStudents = students.filter(student => {
//  if (grade === "A") {
//     return student.point >= 90;
//  } else if (grade === "B") {
//     return student.point >= 80 && student.point < 90;
//  } else if (grade === "C") {
//     return student.point >= 70 && student.point < 80;
//  } else if (grade === "D") {
//     return student.point >= 60 && student.point < 70;
//  } else if (grade === "F") {
//     return student.point < 60;
//  }
// });


// const studentNames = filteredStudents.map(student => student.name);

// alert("niit suragchid " + grade + ": " + studentNames.join(", "));






// const gradeStatus = prompt("unasan bolon unaagui gesen utga oruul':").toLowerCase();


// const filteredStudents = students.filter(student => {
//  if (gradeStatus === "unasan") {
//     return student.gradeStatus === "FAILED";
//  } else if (gradeStatus === "unaagui") {
//     return student.gradeStatus === "PASSED";
//  }
// });

// const studentNames = filteredStudents.map(student => student.name);


// alert("suragchiin odoogiin baidal " + gradeStatus + ": " + studentNames.join(", "));