//+    - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!).
//     let smallestNumber = (firstNumber, secondNumber, thirdNumber) => {
//         if (firstNumber < secondNumber && firstNumber < thirdNumber) {
//             document.write(firstNumber);
//         } else if (secondNumber < firstNumber && secondNumber < thirdNumber) {
//             document.write(secondNumber);
//         } else if (firstNumber === secondNumber || secondNumber === thirdNumber || firstNumber === thirdNumber) {
//             document.write(`Ви ввели як мінімум два однакових числа!`);
//         } else {
//             document.write(thirdNumber);
//         }
//     };
//     smallestNumber(5,8,6);

//+    - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!).
//     let largestNumber = (firstNumber, secondNumber, thirdNumber) => {
//         if (firstNumber > secondNumber && firstNumber > thirdNumber) {
//             document.write(firstNumber);
//         } else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
//             document.write(secondNumber);
//         } else if (firstNumber === secondNumber || secondNumber === thirdNumber || firstNumber === thirdNumber) {
//             document.write(`Ви ввели як мінімум два однакових числа!`);
//         } else {
//             document.write(thirdNumber);
//         }
//     };
//     largestNumber(5,4,3);

//+    - створити функцію яка повертає найбільше число з масиву.
//     let someArray = [132, 10, 490, 98, 20];
//     let largestNumberOfArray = (array) => {
//         let max = array[0];
//         for (const element of array) {
//             if (max < element) {
//                 max = element;
//             }
//         }
//         return max;
//     }
//     console.log(largestNumberOfArray(someArray));

//+    - створити функцію яка повертає найменьше число з масиву.
//     let someArray = [132, 100, 490, 98, 20];
//     let smallestNumberOfArray = (array) => {
//         let min = array[0];
//         for (const element of array) {
//             if (min > element) {
//                 min = element;
//             }
//         }
//         return min;
//     }
//     console.log(smallestNumberOfArray(someArray));

//+    - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
//       Приклад [1, 2, 10] -> 13
//     let someArr = [1, 2, 10, 3];
//     let sumArray = (array) => {
//         let sum = 0;
//         for (const element of array) {
//             sum = element + sum;
//         }
//         return sum;
//     }
//     console.log(sumArray(someArr));

//+    - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
//     let someArr = [1, 2, 10, 3, 4];
//     let arithmeticMean = (array) => {
//         let sum = 0;
//         for (const element of array) {
//             sum = element + sum;
//         }
//         return sum/array.length;
//     }
//     console.log(arithmeticMean(someArr));

//+    - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
//       (Math використовувати заборонено).
//     let returnsSmallestOutputsLargest = (...arg) => {
//         let minNumber = arg[0];
//         let maxNumber = arg[0];
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
//     let arrayOfRandomNumbers = (argumentLength) => {
//         let arr = [];
//         for (let i = 0; i < argumentLength; i++) {
//             arr.push(Math.round(Math.random()*100));
//         }
//         return arr;
//     }
//     console.log(arrayOfRandomNumbers(7));

//+    - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit.
//       limit - аргумент, який характеризує кінцеве значення діапазону.
//     let arrayOfRandomNumbers = (argumentLength, limit) => {
//         let arr = [];
//         for (let i = 0; i < argumentLength; i++) {
//             arr.push(Math.round(Math.random()*limit));
//         }
//         return arr;
//     }
//     console.log(arrayOfRandomNumbers(5, 20));

//+    - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1, 2, 3] -> [3, 2, 1].
//     let reverseArr = (arr) => {
//         let output = [];
//         for (let i = arr.length - 1; i> -1; i--){
//             output.push(arr[i]);
//         }
//         return output;
//     }
//     console.log(reverseArr([1, 2, 3]));