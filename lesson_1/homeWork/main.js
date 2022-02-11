//+  1. Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7,
//      16, true, false.
//      Вивести кожну змінну за допомогою: console.log , alert, document.write
//     let hello = 'hello';
//         console.log(hello);
//         alert(hello);
//         document.write(`<div>${hello}</div>`);
//
//     let owu = 'owu';
//         console.log(owu);
//         alert(owu);
//         document.write(`<p>${owu}</p>`);
//
//     let com = 'com';
//         console.log(com);
//         alert(com);
//         document.write(`<div>${com}</div>`);
//
//     let ua = 'ua';
//         console.log(ua);
//         alert(ua);
//         document.write('<div>' + ua + '</div>');
//
//     let one = 1;
//         console.log(one);
//         alert(one);
//         document.write(`<p>${one}</p>`);
//
//     let ten = 10;
//         console.log(ten);
//         alert(ten);
//         document.write('<h2>' + ten + '</h2>');
//
//     let minus999 = -999;
//         console.log(minus999);
//         alert(minus999);
//         document.write(`<p>${minus999}</p>`);
//
//     let number = 123;
//         console.log(number);
//         alert(number);
//         document.write(`<h3>${number}</h3>`);
//
//     let pi = 3.14;
//         console.log(pi);
//         alert(pi);
//         document.write('<h2>' + pi + '</h2>');
//
//     let number2 = 2.7;
//         console.log(number2);
//         alert(number2);
//         document.write('<div>' + number2 + '</div>');
//
//     let sixteen = 16;
//         console.log(sixteen);
//         alert(sixteen);
//         document.write(`<h3>${sixteen}</h3>`);
//
//     let truth = true;
//         console.log(truth);
//         alert(truth);
//         document.write('<h1>' + truth + '</h1>')
//
//     let lie = false;
//         console.log(lie);
//         alert(lie);
//         document.write('<h1>' + lie + '</h1>')

//+  2. Переприсвоїти кожній змінній з завдання значення на довільне.
//      Вивести кожну змінну за допомогою: console.log , alert, document.write
//     hello = 'hy';
//         console.log(hello);
//         alert(hello);
//         document.write(`<div>${hello}</div>`);
//
//     owu = 'lite';
//         console.log(owu);
//         alert(owu);
//         document.write(`<p>${owu}</p>`);
//
//     com = 'teg';
//         console.log(com);
//         alert(com);
//         document.write(`<div>${com}</div>`);
//
//     ua = 'svg';
//         console.log(ua);
//         alert(ua);
//         document.write('<div>' + ua + '</div>');
//
//     one = 11;
//         console.log(one);
//         alert(one);
//         document.write(`<p>${one}</p>`);
//
//     ten = 100;
//         console.log(ten);
//         alert(ten);
//         document.write('<h2>' + ten + '</h2>');
//
//
//     minus999 = -99;
//         console.log(minus999);
//         alert(minus999);
//         document.write(`<p>${minus999}</p>`);
//
//     number = 321;
//         console.log(number);
//         alert(number);
//         document.write(`<h3>${number}</h3>`);
//
//     pi = 6666;
//         console.log(pi);
//         alert(pi);
//         document.write('<h2>' + pi + '</h2>');
//
//     number2 = 270;
//         console.log(number2);
//         alert(number2);
//         document.write('<div>' + number2 + '</div>');
//
//     sixteen = 6;
//         console.log(sixteen);
//         alert(sixteen);
//         document.write(`<h3>${sixteen}</h3>`);
//
//     truth = false;
//         console.log(truth);
//         alert(truth);
//         document.write('<h1>' + truth + '</h1>')
//
//     lie = true;
//         console.log(lie);
//         alert(lie);
//         document.write('<h1>' + lie + '</h1>')

//+  3. Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
//      З'єднати їх в одну змінну person. (Не об'єкт)
//     let firstName = 'Artur';
//     let middleName = 'Bogdanovich';
//     let lastName = 'Liber';
//     let name = 'Hy my name is' + ' ' + firstName + ' ' + middleName + ' ' + lastName;
//         console.log(name);
//     let name2 = `Hy my name is ${firstName} ${middleName} ${lastName}`;
//         console.log(name2);

//+  4. За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//      Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".
//     let youName = prompt('Напишіть Ваше імя');
//     let youPib = prompt('Як звати Вас по-батькові?');
//     let youAge = prompt('Скільки Вам років?');
//      alert(`Вітаю ${youName} ${youPib}. Тобі ${youAge} років!`);

//+  5. За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//     let a = 100;
//         console.log(typeof a);
//     let b = '100';
//         console.log(typeof b);
//     let c = true;
//         console.log(typeof c);

//+  6. Визначити відповідний оператор в виразах що б вийшов відповідний результат.
//      В однакових виразах не використовувати однакові оператори!!!
//   5 ? 6 -> true
//   5 ? 6 -> false
//   5 ? 6 -> false
//   5 ? 6 -> false
//   10 ? 10 -> true
//   10 ? 10 -> true
//   10 ? 10 -> false
//   10 ? 10 -> false
//   10 ? 10 -> false
//   123 ? '123' -> false
//   123 ? '123' -> true
//     console.log(5 < 6); //true
//     console.log(5 > 6); //false
//     console.log(5 >= 6); //false
//     console.log(5 === 6); //false
//     console.log(10 == 10); //true
//     console.log(10 === 10); //true
//     console.log(10 != 10); //false
//     console.log(10 !== 10); //false
//     console.log(10 > 10); //false
//     console.log(123 != '123'); //false
//     console.log(123 == '123'); //true

//+  7. Подумайте Какие значения выведет в окно браузера следующий фрагмент кода? и почему?
//     let str = "20";
//     let a = 5;
//     document.write(str + a + "<br/>");    //--> 205
//     document.write(str - a + "<br/>");    //--> 15
//     document.write(str * "2" + "<br/>");  //--> 40
//     document.write(str / 2 + "<br/>");    //--> 10