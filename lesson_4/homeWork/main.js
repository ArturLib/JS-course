//+    - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//     function areaRectangle (a, b) {
//         return (a*b);
//     }
//     console.log(areaRectangle(4,4));

//+    - створити функцію яка обчислює та повертає площу кола з радіусом r
//     function areaCircle (r) {
//         return (Math.PI*(Math.pow(r, 2)));
//     }
//     console.log(areaCircle(5));

//+    - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіусом r
//     function areaSideSurfaceCylinder (h, r) {
//         return (2*Math.PI*h*r);
//     }
//     console.log(areaSideSurfaceCylinder(5,3));

//+    - створити функцію яка приймає масив та виводить кожен його елемент
//     let arr = [1, 3, 99, false, 'hy'];
//     function someArr (arr) {
//         for (let i = 0; i < arr.length; i++) {
//             document.write(`<p>${arr[i]}</p>`);
//         }
//     }
//     someArr(arr);

//+    - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//     function createParagraph (text) {
//         for (let i = 0; i < 4; i++) {
//             document.write(`<p>${text}</p>`);
//         }
//     }
//     createParagraph('some text');

//+    - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//     function createUlLi (text) {
//         document.write(`<ul>`);
//             document.write(`<li>${text}</li>`);
//             document.write(`<li>${text}</li>`);
//             document.write(`<li>${text}</li>`);
//         document.write(`</ul>`);
//     }
//     createUlLi('some text');

//+    - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
//       Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//     function createUlLiArg (text, arg) {
//         document.write(`<ul>`);
//             for (let i = 0; i < arg; i++) {
//                 document.write(`<li>${text}</li>`);
//             }
//         document.write(`</ul>`);
//     }
//     createUlLiArg('some text', 3);

//+    - створити функцію яка приймає масив примітивних елементів (числа, стрінги, булеві), та будує для них список
//     let arr2 = [1, 3, 99, false, 'hy'];
//     function someArr (arr) {
//         document.write(`<ul>`);
//         for (let i = 0; i < arr.length; i++) {
//             document.write(`<li>${arr[i]}</li>`);
//         }
//         document.write(`</ul>`);
//     }
//     someArr(arr2);

//+    - створити функцію яка приймає масив об'єктів з наступними полями id, name, age, та виводить їх в документ.
//       Для кожного об'єкту окремий блок.
//     let arrayOfObjects = [
//         {id: 1, name: 'Oz', age: 99},
//         {id: 2, name: 'Max', age: 3},
//         {id: 3, name: 'Olga', age: 18},
//         {id: 4, name: 'Taras', age: 22},
//         {id: 5, name: 'Max', age: 2}
//     ];
//     function objectsOfArray (arr) {
//         for (const object of arr) {
//             document.write(`<p>ID - ${object.id}. NAME - ${object.name}. AGE - ${object.age}</p>`);
//         }
//     }
//     objectsOfArray(arrayOfObjects);