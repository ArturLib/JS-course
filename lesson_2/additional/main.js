//+  1. Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//      Потрібно зробити перевірку якщо кількість елементів у масиві більше або дорівнює 3,
//      то виводиться повідомлення про те, що це великий масив, в якому 3 і більше елементи.
//      Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
//     let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
//     friends.length >= 3 ? alert('Це великий масив, в якому 3 і більше елементи') : alert('Це маленький масив,' +
//         ' в якому менше 3-х елементів')

//+  2. Маємо 3 числа і між ними нам потрібно знайти те що посередині.
//      Знайти, яке з них є середнім (більше одного, але менше за інше).
//      Перевірити, чи знаходиться перше число між двома іншими.
//     let firstNumber = +prompt('Введіть перше число');
//     let secondNumber = +prompt('Введіть друге число');
//     let thirdNumber = +prompt('Введіть третє число');
//         if (firstNumber > secondNumber && firstNumber < thirdNumber) {
//             console.log(firstNumber);
//         } else if (thirdNumber > secondNumber && thirdNumber < firstNumber) {
//             console.log(thirdNumber);
//         } else if (firstNumber === secondNumber || firstNumber === thirdNumber || secondNumber === thirdNumber) {
//             console.log('Ви ввели, як мінімум, два однакових числа');
//         } else {
//             console.log(secondNumber);
//         }

//+  3. Перепишіть конструкцію if з використанням умовного оператора '?':
//          let result;
//          if (a + b < 4) {
//          result = 'Мало';
//          } else {
//          result = 'Багато';
//          }
//     let a = +prompt('Введіть перше число');
//     let b = +prompt('Введіть друге число');
//     let result = (a + b);
//     (result < 4) ? console.log('Мало') : console.log('Багато')

//+  4. Маємо будь-яке число від -100, 0, +100 потрібно перевірити яким є число: позитивним, негативним або нулем
//      напишіть це тернарним оператором
//     let number = +prompt('Введіть число від -100 до 100');
//     (number === 0) ? console.log('Число дорівнює 0') : (number <= 0) ? console.log('Число є негативним') :
//     console.log('Число є позитивним')