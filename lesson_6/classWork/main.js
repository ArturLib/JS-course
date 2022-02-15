//+    - Дано список імен.
//       let n1 = 'Harry..Potter'
//       let n2 = 'Ron---Whisley'
//       let n3 = 'Hermione__Granger'
//       Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
//       let n1 = 'Harry Potter'
//       let n2 = 'Ron Whisley'
//       let n3 = 'Hermione Granger'
//     let n1 = 'Harry..Potter';
//     let n2 = 'Ron---Whisley';
//     let n3 = 'Hermione__Granger';
//     let normalizer = (str, someSymbol) => str.split(someSymbol).join(' ');
//         console.log(normalizer(n1,'..'));
//         console.log(normalizer(n2,'---'));
//         console.log(normalizer(n3,'__'));

//+    - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
//     let randomArr = (length, num) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random()*num));
//         }
//         return arr;
//     }
//     console.log(randomArr(5, 100));

//+     - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//        Відсортувати його за допомоги sort
//     let randomArrSort = (length, num) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random()*num));
//         }
//         return arr.sort((a, b) => (a - b));
//     }
//     console.log(randomArrSort(5, 100));

//+    - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень.
//       Відфільтрувати його за допомоги filter, залишивши тільки парні числа
//     let randomArrFilter = (length, num) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random()*num));
//         }
//         return arr.filter(item => item%2 === 0);
//     }
//     console.log(randomArrFilter(5, 100));

//+    - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції).
//       За допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
//     let randomArrToString = (length, num) => {
//     let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random()*num));
//         }
//         return arr.map(value => value + '');
//     }
//     console.log(randomArrToString(5, 100));

//+    - створити функцію sortNums(direction), яка приймає масив чисел, та сортує його від більшого до меншого,
//       або навпаки в залежності від значення аргументу direction.
//       let nums = [11,21,3];
//       sortNums('ascending') // [3,11,21]
//       sortNums('descending') // [21,11,3]
//     let nums = [11, 21, 3];
//     let sortNums = (arr, direction) => {
//         if (direction === 'ascending') {
//             return arr.sort((a, b) => (a - b));
//         } else {
//             if (direction === 'descending') {
//                 return arr.sort((a, b) => (b - a));
//             }
//         }
//     }
//     console.log(sortNums(nums, 'ascending'));
//     console.log(sortNums(nums,'descending'));

//+    - є масив
//       let coursesAndDurationArray = [
//           {title: 'JavaScript Complex', monthDuration: 5},
//           {title: 'Java Complex', monthDuration: 6},
//           {title: 'Python Complex', monthDuration: 6},
//           {title: 'QA Complex', monthDuration: 4},
//           {title: 'FullStack', monthDuration: 7},
//           {title: 'Frontend', monthDuration: 4}
//       ];
//
//     -- відсортувати його за спаданням за monthDuration
//     let sortArr = (arr) => {
//         return arr.sort((a, b) => (b.monthDuration - a.monthDuration));
//     }
//     console.log(sortArr(coursesAndDurationArray));
//
//     -- відфільтрувати, залишивши тільки курси з тривалістю більше 5 місяців
//     let filterArr = (arr) => {
//         return arr.filter(item => item.monthDuration > 5);
//     }
//     console.log(filterArr(coursesAndDurationArray));