//+    - Створити функцію конструктор для об'єктів User з полями id, name, surname, email, phone
//       створити пустий масив, наповнити його 10 об'єктами new User(....)
//     function User (id, name, surname, email, phone) {
//             this.id = id;
//             this.name = name;
//             this.surname = surname;
//             this.email = email;
//             this.phone = phone;
//     }
//     let users = [
//         new User (10, 'Viktor', 'Kwin', 'kwinviktor@mail.com', 380675643456),
//         new User (2, 'Vika', 'Pina', 'pina@mail.com', 380569871234),
//         new User (31, 'Max', 'Power', 'powermax@mail.com', 380935677654),
//         new User (43, 'Sasha', 'Shose', 'shossasha@mail.com', 380679876543),
//         new User (5, 'Masha', 'Shine', 'shinemasha@mail.com', 380505679812),
//         new User (60, 'Nadja', 'Noda', 'nodanadja@,ail.com', 380503451243),
//         new User (7, 'Roman', 'Rivar', 'rivaroma@mail.com', 380678451352),
//         new User (85, 'Oksana', 'Zivert', 'zivertoks@mail.com', 380939098809),
//         new User (18, 'Sem', 'Jonson', 'jonsonsem@mail.com', 380508120943),
//         new User (1, 'Ira', 'Kira', 'kiraira@mail.com', 380678157602)
//     ];
//     console.log(users);

//+    - Взяти масив з User[] з попереднього завдання, та відфільтрувати, залишивши тільки об'єкти з парними id (filter)
//     let filterArr = (arr) => arr.filter(item => item.id%2 === 0);
//     console.log(filterArr(users));

//+    - Взяти масив з User[] з попереднього завдання, та відсортувати його по id - по зростанню (sort)
//     let sortArr = (arr) => arr.sort((a,b) => (a.id - b.id));
//     console.log(sortArr(users));

//+    - Створити клас для об'єктів Client з полями id, name, surname, email, phone, order
//       (поле є масивом зі списком товарів). Створити пустий масив, наповнити його 10 об'єктами Client
//     class Client {
//         constructor(id, name, surname, email, phone, order) {
//             this.id = id;
//             this.name = name;
//             this.surname = surname;
//             this.email = email;
//             this.phone = phone;
//             this.order = order;
//         }
//     }
//     let clients = [
//         new Client (10, 'Viktor', 'Kwin', 'kwinviktor@mail.com', 380675643456,
//             ['tomato', 'garlic', 'jus', 'watch', 'phone', 'sausage']),
//         new Client (2, 'Vika', 'Pina', 'pina@mail.com', 380569871234,
//             ['jus', 'watch', 'wheel', 'phone']),
//         new Client (31, 'Max', 'Power', 'powermax@mail.com', 380935677654,
//             ['car', 'book']),
//         new Client (43, 'Sasha', 'Shose', 'shossasha@mail.com', 380679876543,
//             ['umbrella', 'wheel', 'hat', 'watch']),
//         new Client (5, 'Masha', 'Shine', 'shinemasha@mail.com', 380505679812,
//             ['sausage']),
//         new Client (60, 'Nadja', 'Noda', 'nodanadja@,ail.com', 380503451243,
//             ['house', 'garlic', 'jus']),
//         new Client (7, 'Roman', 'Rivar', 'rivaroma@mail.com', 380678451352,
//             ['laptop', 'phone']),
//         new Client (85, 'Oksana', 'Zivert', 'zivertoks@mail.com', 380939098809,
//             ['hat']),
//         new Client (18, 'Sem', 'Jonson', 'jonsonsem@mail.com', 380508120943,
//             ['notebook', 'programming courses']),
//         new Client (1, 'Ira', 'Kira', 'kiraira@mail.com', 380678157602,
//             ['trip to the sea']),
//     ];

//+    - Взяти масив (Client [] з попереднього завдання). Відсортувати його за кількістю товарів в полі
//       order по зростанню (sort)
//     let sortArr = (arr) => arr.sort((a,b) => (a.order.length - b.order.length));
//     console.log(sortArr(clients));