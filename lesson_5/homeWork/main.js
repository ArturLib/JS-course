//+    - створити функцію яка обчислює та повертає площу прямокутника
//     let areaOfRectangle = (a, b) => a*b;
//     console.log(areaOfRectangle(2,8));

//+    - створити функцію яка обчислює та повертає площу кола
//     let areaOfCircle = (r) => Math.PI*(Math.pow(r, 2));
//     console.log(areaOfCircle(4));

//+    - створити функцію яка обчислює та повертає площу циліндру
//     let areaOfCylinder = (h, r) => 2*Math.PI*r*(h+r);
//     console.log(areaOfCylinder(5, 3));

//+    - створити функцію яка приймає масив та виводить кожен його елемент
//     let arr = [1, 5, 'bo', false, -35];
//     let acceptsArray = (arr) => {
//         for (let i = 0; i < arr.length; i++) {
//             document.write(`${arr[i]}, `);
//         }
//     }
//     acceptsArray(arr);

//+    - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//     let createsParagraph = (text) => {
//         for (let i = 0; i < 4; i++) {
//             document.write(`<p>${text}</p>`);
//         }
//     }
//     createsParagraph('some random text!');

//+    - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//     let createsUl = (text) => {
//         document.write(`<ul>`);
//             document.write(`<li>${text}`);
//             document.write(`<li>${text}`);
//             document.write(`<li>${text}`);
//         document.write(`</ul>`);
//     };
//     createsUl('some random list');

//+    - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//       Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//     let createsUlWithArg = (text, argument) => {
//         document.write(`<ul>`);
//             for (let i = 0; i < argument; i++) {
//                 document.write(`<li>${text}`);
//             }
//         document.write(`</ul>`);
//     };
//     createsUlWithArg('some random list', 5);

//+    - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список
//     let someArray = [45, -45, 'string', false, 0];
//     let arrayOfPrimitiveElements = (array) => {
//         document.write(`<ul>`);
//             for (let i = 0; i < array.length; i++) {
//                 document.write(`<li>${array[i]}`);
//             }
//         document.write(`</ul>`);
//     };
//     arrayOfPrimitiveElements(someArray);

//+    - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
//       Для кожного об'єкту окремий блок.
//     let arrayOfObjects = [{id: 1, name: 'Gala', age: 88}, {id: 2, name: 'Viktor', age: 5}];
//     let functionTakesArray = (array) => {
//         for (const element of array) {
//             document.write(`<p>${element.id}: ${element.name}, age - ${element.age}</p>`)
//         }
//     };
//     functionTakesArray(arrayOfObjects);