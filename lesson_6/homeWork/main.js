//+     - Знайти та вивести довжину наступних стрінгових значень
//        'hello world', 'lorem ipsum', 'javascript is cool'
// <------------ простий-прямий спосіб ------------>
//     let helloWorldString = 'hello world';
//         console.log(helloWorldString.length);
//     let loremIpsumString = 'lorem ipsum';
//         console.log(loremIpsumString.length);
//     let javascriptIsCoolString = 'javascript is cool';
//         console.log(javascriptIsCoolString.length);
// <------------ універсальний спосіб ------------>
//     let somePhrases = ['hello world', 'lorem ipsum', 'javascript is cool'];
//     let lengthOfStringValues = (arr) => {
//         for (const element of arr) {
//             console.log(element.length);
//         }
//     };
//     lengthOfStringValues(somePhrases);

//+    - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
// <------------ простий-прямий спосіб ------------>
//     let helloWorldToUppercase = 'hello world';
//     let doHelloWorldToUppercase = helloWorldToUppercase.toUpperCase();
//         console.log(doHelloWorldToUppercase);
//     let loremIpsumToUppercase = 'lorem ipsum';
//     let doLoremIpsumToUppercase = loremIpsumToUppercase.toUpperCase();
//         console.log(doLoremIpsumToUppercase);
//     let javascriptIsCoolToUppercase = 'javascript is cool';
//     let doJavascriptIsCoolToUppercase = javascriptIsCoolToUppercase.toUpperCase();
//         console.log(doJavascriptIsCoolToUppercase);
// <------------ універсальний спосіб ------------>
//     let somePhrases = ['hello world', 'lorem ipsum', 'javascript is cool'];
//     let upperOfStringValues = (arr) => {
//         for (const element of arr) {
//             console.log(element.toUpperCase());
//         }
//     };
//     upperOfStringValues(somePhrases);

//+    - Перевести до нижнього регістру наступні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// <------------ простий-прямий спосіб ------------>
//     let helloWorldToLowerCase = 'HELLO WORLD';
//     let doHelloWorldToLowerCase = helloWorldToLowerCase.toLowerCase();
//         console.log(doHelloWorldToLowerCase);
//     let loremIpsumToLowerCase = 'LOREM IPSUM';
//     let doLoremIpsumToLowerCase = loremIpsumToLowerCase.toLowerCase();
//         console.log(doLoremIpsumToLowerCase);
//     let javascriptIsCoolToLowerCase = 'JAVASCRIPT IS COOL';
//     let doJavascriptIsCoolToLowerCase = javascriptIsCoolToLowerCase.toLowerCase();
//         console.log(doJavascriptIsCoolToLowerCase);
// <------------ універсальний спосіб ------------>
//     let somePhrases = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
//     let lowerOfStringValues = (arr) => {
//         for (const element of arr) {
//             console.log(element.toLowerCase());
//         }
//     };
//     lowerOfStringValues(somePhrases);

//+    - Є "брудна" стрінга let str = ' dirty string   '. Почистити її від зайвих пробілів.
//     let str = ' dirty string   ';
//     let trimString = str.trim();
//         console.log(trimString);

//+    - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//       let str = 'Каждый охотник желает знать';
//       let arr = stringToarray(str);
//       document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']
//     let str = 'Каждый охотник желает знать';
//     let stringToArray = (string) => string.split(' ');
//         document.write(stringToArray(str));

//+     - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної
//        кількості символів.
//        let str = 'Каждый охотник желает знать';
//        document.writeln(delete_characters(str, 7)); // Каждый
//     let str = 'Каждый охотник желает знать';
//     let delete_characters = (str, index) => str.substr(0, index);
//     document.write(delete_characters(str,7));

//+    - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами.
//       При цьому всі символи рядка необхідно перевести у верхній регістр.
//       let str = "HTML JavaScript PHP";
//       document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//     let str = "HTML JavaScript PHP";
//     let insert_dash = (str) => str.split(' ').join('-').toUpperCase();
//     document.write(insert_dash(str));

//+    - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка
//       з нижнього регістру у верхній.
//     let toUppercaseFirstLetter = (str) => str[0].toUpperCase() + str.slice(1);
//         console.log(toUppercaseFirstLetter('some random text'));

//+    - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
//     let str = 'chop your own wood and it will warm you twice';
//     let capitalize = (str) => str.split(' ').map(item=>item.charAt(0).toUpperCase()+item.slice(1)).join(' ');
//     console.log(capitalize(str));