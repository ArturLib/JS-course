//     - Є масив
// let simpsons = [
//     {
//         name: 'Bart',
//         surname: 'Simpson',
//         age: 10,
//         info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв ' +
//             'мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. ' +
//             'У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього ' +
//             'учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
//         photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
//     },
//     {
//         name: 'Homer',
//         surname: 'Simpson',
//         age: 40,
//         info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». ' +
//             'Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. ' +
//             'Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
//         photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
//     },
//     {
//         name: 'Marge',
//         surname: 'Simpson',
//         age: 38,
//         info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — '+
//             'постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. '+
//             'Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на '+
//             'оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску.'+
//             'Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме,'+
//             'детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов.'+
//             ' Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность '+
//             'не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир.' +
//             ' Любимое блюдо — лапша с маслом.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
//     },
//     {
//         name: 'Lisa',
//         surname: 'Simpson',
//         age: 9,
//         info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». ' +
//             'Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего ' +
//             'своим умом и рассудительностью.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
//     },
//     {
//         name: 'Maggie',
//         surname: 'Simpson',
//         age: 1,
//         info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала ' +
//             '«Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night ' +
//             '(англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом,' +
//             ' пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга.' +
//             ' После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на ' +
//             'телеканале Fox, дебют произошёл 17 декабря 1989 года.',
//         photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
//     },
// ];

//+    - Проітерувати його, створивши для кожного елементу масиву <div class='member'>.
//     for (const item of simpsons) {
//         let createDivEl = document.createElement('div');
//         createDivEl.classList.add('member');
//
//         let photoSimpson = document.createElement('img');
//         photoSimpson.src = item.photo;
//
//         createDivEl.innerHTML = (`NAME - ${item.name} <br>
//          SURNAME - ${item.surname} <br>
//           AGE - ${item.age} <br>
//            INFO - ${item.info} <br> <br>`);
//
//         document.body.appendChild(createDivEl);
//         createDivEl.appendChild(photoSimpson);
//     }

//+    - Взяти попередній масив з сімпсонами.
//       Проітерувати його, створивши для кожного елементу масиву <div class='member'>. Для кожної властивості
//       елементу створити окремий блок, та помістити його у div.member
//     for (const item of simpsons) {
//         let createDivEl = document.createElement('div');
//         createDivEl.classList.add('member');
//
//         let createDivNameEl = document.createElement('div');
//         createDivNameEl.innerHTML = `<strong>NAME</strong> - ${item.name}`;
//
//         let createDivSurnameEl = document.createElement('div');
//         createDivSurnameEl.innerHTML = `<strong>SURNAME</strong> - ${item.surname}`;
//
//         let createDivAgeEl = document.createElement('div');
//         createDivAgeEl.innerHTML = `<strong>AGE</strong> - ${item.age}`;
//
//         let createDivInfoEl = document.createElement('div');
//         createDivInfoEl.innerHTML = `<strong>INFO</strong> - ${item.info}`;
//
//         let photoSimpson = document.createElement('img');
//         photoSimpson.src = item.photo;
//
//         createDivEl.appendChild(createDivNameEl);
//         createDivEl.appendChild(createDivSurnameEl);
//         createDivEl.appendChild(createDivAgeEl);
//         createDivEl.appendChild(createDivInfoEl);
//         createDivEl.appendChild(photoSimpson);
//         document.body.appendChild(createDivEl);
//     }

//    - Є масив
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js',
//             'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];

//+    - Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення
//     окремих властивостей, для властивості modules зробити список з елементами.
//     Приклад структури знаходиться у файлі example.png
//     for (const item of coursesArray) {
//         let generalDiv = document.createElement('div');
//
//         let createTitleEl = document.createElement('div');
//         createTitleEl.innerHTML = `<strong>COURSE TITLE: ${item.title}</strong>`;
//
//         let innerDivEl = document.createElement('div');
//         innerDivEl.style.cssText = `display: flex`;
//
//         let createMonthDurationEl = document.createElement('div');
//         createMonthDurationEl.style.cssText = `margin-right: 20px`
//         createMonthDurationEl.innerText = `Month duration of courses - ${item.monthDuration}`;
//
//         let createHourDurationEl = document.createElement('div');
//         createHourDurationEl.innerText = `Hour duration of courses - ${item.hourDuration}`;
//
//         let createUl = document.createElement('ul');
//         createUl.style.cssText = `margin-top: 0px`;
//
//         for (const element of item.modules) {
//             let createModuleLiEl = document.createElement('li');
//             createModuleLiEl.innerText = element;
//             createUl.appendChild(createModuleLiEl);
//         }
//
//         generalDiv.appendChild(createTitleEl);
//         generalDiv.appendChild(innerDivEl);
//         innerDivEl.appendChild(createMonthDurationEl);
//         innerDivEl.appendChild(createHourDurationEl);
//         generalDiv.appendChild(createUl);
//         document.body.appendChild(generalDiv);
//     }