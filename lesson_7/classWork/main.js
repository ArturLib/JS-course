//+    - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
//       рік випуску, максимальна швидкість, об'єм двигуна. Додати в об'єкт функції:
//       -- drive() - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//       -- info() - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//       -- increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//       -- changeYear(newValue) - змінює рік випуску на значення newValue
//       -- addDriver(driver) - приймає об'єкт який "водій" з довільним набором полів,
//          і додає його в поточний об'єкт car
//     function Car (model, manufacturer, year, maxSpeed, engine) {
//         this.model = model;
//         this.manufacturer = manufacturer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.engine = engine;
//         this.drive =  function () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//         };
//         this.info = function () {
//             console.log(`Model - ${this.model}, manufacturer - ${this.manufacturer}, year - ${this.year}, maxSpeed -
//             ${this.maxSpeed}, engine - ${this.engine}`)
//         };
//         this.increaseMaxSpeed = function (newSpeed) {
//             this.maxSpeed = this.maxSpeed + newSpeed;
//             console.log(this.maxSpeed);
//         };
//         this.changeYear = function (newValue) {
//             console.log(this.year = newValue);
//         };
//         this.driver = function (driver, age) {
//             console.log(`New driver - ${(this.driver = driver)}, age - ${age}`);
//         };
//     }
//     let volvoCar = new Car('Volvo V90CC', 'Sweden', 2020, 180, 2.0);
//     console.log(volvoCar);
//     volvoCar.drive();
//     volvoCar.info();
//     volvoCar.increaseMaxSpeed(50);
//     volvoCar.changeYear(2019);
//     volvoCar.driver('Max', 32);

//+    - (Те саме, тільки через клас)
//     Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
//     максимальна швидкість, об'єм двигуна. Додати в об'єкт функції:
//     -- drive() - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info() - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed(newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear(newValue) - змінює рік випуску на значення newValue
//     -- addDriver(driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//     class Car {
//         constructor(model, manufacturer, year, maxSpeed, engine) {
//             this.model = model;
//             this.manufacturer = manufacturer;
//             this.year = year;
//             this.maxSpeed = maxSpeed;
//             this.engine = engine;
//             };
//             drive () {
//             console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
//             };
//             info () {
//                 console.log(`Model - ${this.model}, manufacturer - ${this.manufacturer}, year - ${this.year}, maxSpeed -
//                 ${this.maxSpeed}, engine - ${this.engine}`);
//             };
//             increaseMaxSpeed (newSpeed) {
//                 this.maxSpeed = this.maxSpeed + newSpeed;
//                 console.log(this.maxSpeed);
//             };
//             changeYear (newValue) {
//                 console.log(this.year = newValue);
//             };
//             driver (driver, age) {
//                 console.log(`New driver - ${(this.driver = driver)}, age - ${age}`);
//             };
//     }
//     let subaruCar = new Car ('Subaru WRX', 'Japan', 2009, 250, 2.5);
//     console.log(subaruCar);
//     subaruCar.drive();
//     subaruCar.info();
//     subaruCar.increaseMaxSpeed(30);
//     subaruCar.changeYear(2004);
//     subaruCar.driver('Jim', 22);

//+    - Створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//       Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//       За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//       Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//     function Cinderella (name, age, footSize) {
//         this.name = name;
//         this.age = age;
//         this.footSize = footSize;
//     }
//     let cinderellas = [
//         new Cinderella('Ira', 15, 34),
//         new Cinderella('July', 38, 39),
//         new Cinderella('Oksa', 22, 35),
//         new Cinderella('Sveta', 19, 37),
//         new Cinderella('Zoya', 22, 38),
//         new Cinderella('Ira', 19, 36),
//         new Cinderella('Jesika', 30, 39),
//         new Cinderella('Oksana', 20, 38),
//         new Cinderella('Svetlana', 9, 15),
//         new Cinderella('Zoryana', 25, 39),
//     ];
//     console.log(cinderellas);
//     function Prince (name, age, foundShoe) {
//         this.name = name;
//         this.age = age;
//         this.foundShoe = foundShoe;
//     }
//     let princeMax = new Prince('Max', 33, 36);
//     console.log(princeMax);
//     let couple = (cinderellas, princeMax) => {
//         for (let item of cinderellas) {
//             if (item.footSize === princeMax.foundShoe) {
//                 return `Congratulations, your Cinderella's name is - ${item.name}`;
//             }
//         }
//     }
//     console.log(couple(cinderellas, princeMax));
//     let findCinderella = cinderellas.find((item)=> item.footSize === princeMax.foundShoe);
//     console.log(findCinderella);