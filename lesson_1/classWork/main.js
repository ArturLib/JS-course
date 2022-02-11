//+  1. Створити масив з 10 чисел (можна використовувати Math.random та Math.floor).
//      Скласти результат цих чисел в змінній result.
//     let arr = [
//         Math.floor((Math.random()*10)),
//         Math.floor((Math.random()*10)),
//         Math.floor((Math.random()*10)),
//         Math.floor((Math.random()*10)),
//         Math.floor((Math.random()*10)),
//         Math.floor((Math.random()*10)),
//         Math.floor((Math.random()*10)),
//         Math.floor((Math.random()*10)),
//         Math.floor((Math.random()*10)),
//         Math.floor((Math.random()*10)),
//     ]
//         console.log(arr);
//
//     let result = (arr[0] + arr[1] + arr[2] + arr[3] + arr[4] + arr[5] + arr[6] + arr[7] + arr[8] + arr[9]);
//         console.log(result);

//+  2. Створити об'єкт book з наступними полями - назва, кількість сторінок, жанр
//     let book1 = {
//         title: 'ABC book',
//         numberOfPages: 345,
//         genre: 'novel'
//     }
//     console.log(book1);

//+  3. Створити об'єкт book з наступними полями - назва, кількість сторінок, жанр, автори
//     let book2 = {
//         title: 'A Briefer History of Time',
//         numberOfPages: 176,
//         genre: 'scientific',
//         authors: {
//             author1: 'Stephen Hawking',
//             author2: 'Leonard Mlodinow',
//         },
//     }
//     console.log(book2);

//+  4. Створити масив об'єктів book з наступними полями - назва, кількість сторінок, жанр, автори.
//      Вивести кожну книгу як окремий об'єкт
//     let books = [
//         {
//             title: '1984',
//             numberOfPages: 370,
//             genre: 'anti-utopia novel',
//             author: 'George Orwell'
//         },
//         {
//             title: 'Harry Potter and the Philosophers Stone',
//             numberOfPages: 352,
//             genre: 'fantasy',
//             author: 'Joanne Rowling'
//         },
//         {
//             title: 'The adventures of Tom Sawyer',
//             numberOfPages: 252,
//             genre: 'adventures',
//             author: 'Mark Twain'
//         }
//     ]
//     console.log(books[0]);
//     console.log(books[1]);
//     console.log(books[2])

//+  5. Напишіть код, який вираховує площу прямокутника висотою 23см. (змінна height) та шириною 10см (змінна width).
//      Значення площі зберігати в змінній s.
//     let height = 23;
//     let width = 10;
//     let s = (height*width);
//         console.log(s)

//+  6. Напиши код, який знаходить об'єм циліндра заввишки 10м (змінна heightC) та діаметром основи 4м (dC),
//      результат помістіть у змінну v.
//     let heightC = 10;
//     let dC = 4;
//     let v = Math.PI*(Math.pow(dC, 2)/4)*heightC;
//         console.log(v);

//+  7. У прямокутного трикутника дві сторони n (зі значенням 3) та m (зі значенням 4).
//      Знайдіть гіпотенузу k за теоремою Піфагора (потрібно використовувати функцію Math.pow (число, ступінь)
//      або оператор зведення в ступінь **).
//     let n = 30;
//     let m = 4;
//     let k = Math.sqrt((Math.pow(n, 2)+(Math.pow(m, 2))));
//     console.log(k);