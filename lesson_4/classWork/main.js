//+    - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
//     function  smallestNumber (a, b, c) {
//         if (a < b && a < c) {
//             console.log(a);
//         } else if (b < a && b < c) {
//             console.log(b);
//         } else if (a === b || b === c || c === a) {
//             console.log(`Ви ввели як мінімум два однакових числа`)
//         } else {
//             console.log(c);
//         }
//     }
//     (smallestNumber(40, 3, 33));

//+    - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
//     function  largestNumber (a, b, c) {
//         if (a > b && a > c) {
//             console.log(a);
//         } else if (b > a && b > c) {
//             console.log(b);
//         } else if (a === b || b === c || c === a) {
//             console.log(`Ви ввели як мінімум два однакових числа`)
//         } else {
//             console.log(c);
//         }
//     }
//     (largestNumber(40, 45, 40));

//+    - створити функцію яка повертає найбільше число з масиву
//     let array = [12, 3330, 93, 2, 9, 999, 8];
//     function largestElementOfArray (arr) {
//         let number = arr[0];
//         for (const element of arr) {
//             if (element > number) {
//                 number = element;
//             }
//         }
//         return number;
//     }
//     console.log(largestElementOfArray(array));

//+    - створити функцію яка повертає найменьше число з масиву
//     let array = [12, 3330, 93, 2, 9, 999, 8];
//     function smallestElementOfArray (arr) {
//         let number = arr[0];
//         for (const element of arr) {
//             if (element < number) {
//                 number = element;
//             }
//         }
//         return number;
//     }
//     console.log(smallestElementOfArray(array));

//+    - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//       Приклад [1, 2, 10] -> 13
//     let array = [1, 2, 10];
//     function sumElementsArray (arr) {
//         let sum = 0;
//         for (const element of arr) {
//             sum = element + sum;
//         }
//         return sum;
//     }
//     console.log(sumElementsArray(array));

//+    - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//     let array = [1, 2, 10, 3];
//     function sumElementsArray (arr) {
//         let sum = 0;
//         for (const element of arr) {
//             sum = (element + sum);
//             result = sum/arr.length;
//         }
//         return result;
//     }
//     console.log(sumElementsArray(array));

//+    - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//       (Math використовувати заборонено);
//     function returnsSmallestOutputsLargest (...arg) {
//         let minNumber = arguments[0];
//         let maxNumber = arguments[0];
//         for (const element of arg) {
//             if (element < minNumber) {
//                 minNumber = element;
//             }
//             if (element > maxNumber) {
//                 maxNumber = element;
//             }
//         }
//         console.log(maxNumber);
//         return document.write(minNumber);
//     }
//     returnsSmallestOutputsLargest(12, 35, 1, 30, 333);

//+    - створити функцію яка заповнює масив рандомними числами
//       (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//     function arrayOfRandomNumbers(argumentLength) {
//         let arr = [];
//         for (let i = 0; i < argumentLength; i++) {
//             arr.push(Math.round(Math.random()*100));
//         }
//         return arr;
//     }
//     console.log(arrayOfRandomNumbers(4));

//+    - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//       limit - аргумент, який характеризує кінцеве значення діапазону.
// function arrayOfRandomNumbers(argumentLength, limit) {
//     let arr = [];
//     for (let i = 0; i < argumentLength; i++) {
//         arr.push(Math.round(Math.random()*limit));
//     }
//     return arr;
// }
// console.log(arrayOfRandomNumbers(4, 50));

//+    - функція приймає масив та робить з нього новий масив у зворотньому порядку. [1,2,3] -> [3, 2, 1].
//     function reverseArr(arr){
//         let output = [];
//         for (let i = arr.length - 1; i> -1; i--){
//             output.push(arr[i]);
//         }
//         return output;
//     }
//     console.log(reverseArr([1, 2, 3]));