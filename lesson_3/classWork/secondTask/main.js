//     зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18] та:
//     let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

//+    1. перебрати його циклом while
//     let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     let i = 0;
//     while (i < someArray.length) {
//         console.log(someArray[i]);
//         i++;
//     }

//+    2. перебрати його циклом for
//     let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     for (let i = 0; i < someArray.length; i++) {
//         console.log(someArray[i]);
//     }

//+    3. перебрати циклом while та вивести числа тільки з непарним індексом
//     let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     let i = 0;
//     while (i < someArray.length) {
//         if ([i]%2 === 1) {
//             console.log(someArray[i]);
//         }
//         i++;
//     }

//+    4. перебрати циклом for та вивести числа тільки з непарним індексом
//     let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     for (let i = 0; i < someArray.length; i++) {
//         if ([i]%2 === 1) {
//             console.log(someArray[i]);
//         }
//     }

//+    5. перебрати циклом while та вивести числа тільки парні значення
//     let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     let i = 0;
//     while (i < someArray.length) {
//         if (someArray[i]%2 === 0) {
//             console.log(someArray[i]);
//         }
//         i++;
//     }

//+    6. перебрати циклом for та вивести числа тільки парні значення
//     let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     for (let i = 0; i < someArray.length; i++) {
//         if (someArray[i]%2 === 0) {
//             console.log(someArray[i]);
//         }
//     }

//+    7. замінити кожне число кратне 3 на слово "okten"
//     let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     for (let i = 0; i < someArray.length; i++) {
//         if (someArray[i]%3 === 0) {
//             someArray[i] = 'okten';
//         }
//         console.log(someArray[i]);
//     }

//+    8. вивести масив в зворотньому порядку.
//     let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     for (let i = someArray.length-1; i >= 0; i--) {
//         console.log(someArray[i]);
//     }

//+    9. всі попередні завдання (окрім 8), але в зворотному циклі (с заду на перед)

//+    1. перебрати його циклом while
//     let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     let i = 0;
//     while (i < someArray.length) {
//         for (let i = someArray.length-1; i >= 0; i--) {
//         console.log(someArray[i]);
//         }
//         break;
//         i++;
//     }

//+    2. перебрати його циклом for
//     let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     for (let i = someArray.length-1; i >= 0; i--) {
//         console.log(someArray[i]);
//     }

//+    3. перебрати циклом while та вивести числа тільки з непарним індексом
//     let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     let i = 0;
//     while (i < someArray.length) {
//         for (let i = someArray.length-1; i >= 0; i--) {
//             if ([i]%2 === 1) {
//                 console.log(someArray[i]);
//             }
//         }
//         break;
//         i++;
//     }

//+    4. перебрати циклом for та вивести числа тільки з непарним індексом
//     let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     for (let i = someArray.length-1; i >= 0; i--) {
//         if ([i]%2 === 1) {
//             console.log(someArray[i]);
//         }
//     }

//+    5. перебрати циклом while та вивести числа тільки парні значення
//     let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     let i = 0;
//     while (i < someArray.length) {
//         for (let i = someArray.length-1; i >= 0; i--) {
//             if (someArray[i]%2 === 0) {
//                 console.log(someArray[i]);
//             }
//         }
//         break;
//         i++;
//     }

//+    6. перебрати циклом for та вивести числа тільки парні значення
//     let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     for (let i = someArray.length-1; i >= 0; i--) {
//         if (someArray[i]%2 === 0) {
//             console.log(someArray[i]);
//         }
//     }

//+    7. замінити кожне число кратне 3 на слово "okten"
//     let someArray = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];
//     for (let i = someArray.length-1; i >= 0; i--) {
//         if (someArray[i]%3 === 0) {
//             someArray[i] = 'okten';
//         }
//         console.log(someArray[i]);
//     }