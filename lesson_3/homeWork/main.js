//+  1. Створити масив з:
//      - з 5 числових значень
//      - з 5 стрічкових значень
//      - з 5 значень стрічкового, числового та булевого типу
//      - та вивести його в консоль
//     let numberArr = [3, 45, -1, 994, 0];
//         console.log(numberArr);
//     let stringArr = ['1', 'one', 'name', 'item', '234'];
//         console.log(stringArr);
//     let mixedArr = ['string', 'hy', 23, 100, false];
//         console.log(mixedArr);

//+  2. Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу.
//      Вивести в консоль
//     let arr = [];
//     arr[0] = 'Fall';
//     arr[1] = 'down';
//     arr[2] = 7;
//     arr[3] = 'times';
//     arr[4] = 'stand';
//     arr[5] = 'up';
//     arr[6] = 8;
//     console.log(arr);

//+  3. Робота з циклами:
//     - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
//     for (let i=0; i < 10; i++) {
//         document.write(`<div>some random text</div>`);
//     }
//     - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
//     for (let j=0; j < 10; j++) {
//         document.write(`<div>some random text with index inside - ${j}</div>`);
//     }
//     - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
//     let i = 0;
//     while (i < 20) {
//         document.write(`<h1>some random text</h1>`);
//         i++;
//     }
//     - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//     let j = 0;
//     while (j < 20) {
//         document.write(`<h1>some random text with index inside - ${j}</h1>`)
//         j++;
//     }

//+  4. Робота з масивами:
//     - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
//     let numberArr = [99, -132, 5, 0, -3, 576, 4, 132, 9, 0];
//         for (let i = 0; i < numberArr.length; i++) {
//             console.log(numberArr[i]);
//         }
//     - Створити масив з 10 стрічкових елементів. Вивести в консоль всі його елементи в циклі.
//     let stringArr = ['two', 'name', '5', 'hy', 'some', 'text', 'string', '132', 'number', '0'];
//         for (let i = 0; i < stringArr.length; i++) {
//             console.log(stringArr[i]);
//         }
//     - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
//     let mixedArr = ['name', -132, 'some', false, '-3', true, 'number', 132, 'text', 0];
//         for (let i = 0; i < mixedArr.length; i++) {
//             console.log(mixedArr[i]);
//         }
//     - Створити масив з 10 елементів числового, стрічкового і булевого типу.
//       За допомогою if та typeof вивести тільки булеві елементи.
//     let mixedArr = ['name', -132, 'some', false, '-3', true, 'number', 132, 'text', 0];
//         for (let i = 0; i < mixedArr.length; i++) {
//             if (typeof mixedArr[i] === "boolean") {
//                 console.log(mixedArr[i]);
//             }
//         }
//     - Створити масив з 10 елементів числового, стрічкового і булевого типу.
//       За допомогою if та typeof вивести тільки числові елементи.
//     let mixedArr = ['name', -132, 'some', false, '-3', true, 'number', 132, 'text', 0];
//         for (let i = 0; i < mixedArr.length; i++) {
//             if (typeof mixedArr[i] === "number") {
//                 console.log(mixedArr[i]);
//             }
//         }
//     - Створити масив з 10 елементів числового, стрічкового і булевого типу.
//       За допомогою if та typeof вивести тільки рядкові елементи.
//     let mixedArr = ['name', -132, 'some', false, '-3', true, 'number', 132, 'text', 0];
//         for (let i = 0; i < mixedArr.length; i++) {
//             if (typeof mixedArr[i] === "string") {
//                 console.log(mixedArr[i]);
//             }
//         }

//+  5. Подальша робота з масивами:
//     - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних
//       індексів. Вивести в консоль всі його елементи в циклі.
//     let someArr = [];
//         someArr[0] = 'Every';
//         someArr[1] = 'solution';
//         someArr[2] = 'breeds';
//         someArr[3] = 'new';
//         someArr[4] = 'problems';
//         someArr[5] = true;
//         someArr[6] = 100;
//         someArr[7] = '%';
//         someArr[8] = '100%';
//         someArr[9] = 'exactly';
//         for (let i = 0; i < someArr.length; i++) {
//             console.log(someArr[i]);
//         }
//     - Створити цикл for на 10 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//     for (let i = 0; i < 10; i++) {
//         console.log(`Current step number - ${i}`);
//         document.write(`Current step number - ${i};<br>`);
//     }
//     - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
//     for (let i = 0; i < 100; i++) {
//         console.log(`Current step number - ${i}`);
//         document.write(`Current step number - ${i};<br>`);
//     }
//     - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
//     for (let i = 0; i < 100; i+=2) {
//         console.log(`Current step number - ${i}`);
//         document.write(`Current step number - ${i};<br>`);
//     }
//     - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//     for (let i = 0; i < 100; i++) {
//         if (i%2 === 0) {
//             console.log(`Current step number - ${i}`);
//             document.write(`Current step number - ${i};<br>`);
//         }
//     }
//     - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
//     for (let i = 0; i < 100; i++) {
//         if (i%2 === 1) {
//             console.log(`Current step number - ${i}`);
//             document.write(`Current step number - ${i};<br>`);
//         }
//     }