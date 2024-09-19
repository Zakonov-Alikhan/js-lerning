// Тест модульности, в этом нет строгой необходимости, ибо проект маленький,
// но почему не затестить новую тему? 
import { createHeader } from './header.js';
import { createFooter } from './footer.js';

document.body.prepend(createHeader());
document.body.append(createFooter());

/*Проверяем прогрузились ли HTML-элементы*/
document.addEventListener('DOMContentLoaded', () => {
    //Page 1
    const lox_button = document.getElementById("lox_button");

    if (lox_button) {
        function lox_detector(){
            const name = prompt("Как твое имя, лох?");
            const lox = document.getElementById("lox");

            lox.textContent = `ВНИМАНИЕ!!! ${name} - ЛОХ`;
        }

        lox_button.addEventListener("click", lox_detector);
    } else {
        console.log('lox_detector element not found on this page');
    }
    
    const add_lox_button = document.getElementById("add_lox");
    if (add_lox_button) {
        function Add_lox_func(){
            const container = document.getElementById("add_lox_block");
            const content = document.createElement("div");
            
            content.classList.add("lox_content");
            content.textContent = "Ты Лох!";

            container.appendChild(content);
        }

        add_lox_button.addEventListener("click", Add_lox_func);
    } else {
        console.log('add_lox_button element not found on this page');
    }

    const remove_All_btn = document.getElementById("remove_all");
    if (remove_All_btn) {
        function remove_text_func(){
            const container = document.getElementById("add_lox_block");
            container.textContent = "";
        }

        remove_all.addEventListener("click", remove_text_func);
    } else {
        console.log('remove_All_btn element not found on this page');
    }

    //Page 2
    const FizzBuzz_button = document.getElementById("FizzBuzz_button");
    if (FizzBuzz_button) {
        function FizzBuzz() {
            const prompt_num = prompt("Напиши число, лох");
            const fizzBuzz_block = document.getElementById("FizzBuzz_block");

            if (!isPositiveInteger(+prompt_num)) {
                fizzBuzz_block.textContent = `Тебе сказали ввести ЧИСЛО, дебил`; 
                return 
            }

            let res = '';
            
            if (+prompt_num % 3 == 0 && +prompt_num % 5 == 0){
                fizzBuzz_block.textContent = `FizzBuzz`;
                return
            } else if (+prompt_num % 5 == 0){
                fizzBuzz_block.textContent = `Buzz`;
                return
            } else if (+prompt_num % 3 == 0){
                fizzBuzz_block.textContent = `Fizz`;
                return
            } else {
                for (let i = 0; i < +prompt_num; i++){
                    res += `${i}, `
                }
                res += +prompt_num
                fizzBuzz_block.textContent = `${res}`;
                return
            }
        }

        FizzBuzz_button.addEventListener("click", FizzBuzz);
    } else {
        console.log('FizzBuzz element not found on this page');
    }

    //Page 3
    const Game_1_button = document.getElementById("game_1");
    if (Game_1_button) {
        function Game_1_func() {
            const computerChoiseBlock = document.getElementById("computerChoiseBlock");
            const userChoiseBlock = document.getElementById("userChoiseBlock");
            const resultBlock = document.getElementById("resultBlock");
            const start = prompt("Добро пожаловать в игру: Камень, Ножницы, Бумага!\nВведи цифру обозначающую твой выбор?\n1.Камень\n2.Ножницы\n3.Бумага");
            let myChoice = "";
                if (+start == 1) {
                    myChoice = 'Камень';
                } else if (+start == 2) {
                    myChoice = 'Ножницы';
                } else if (+start == 3) {
                    myChoice = 'Бумага';
                } else {
                    computerChoiseBlock.textContent = ``;
                    userChoiseBlock.textContent = ``;
                    resultBlock.textContent = `Ты долбаёб? Такого ответа - нет!`;
                    resultBlock.className = `result-block text-center text-white bg-red black-border`;
                    return;
                }

            let random = Math.floor(Math.random()*3)+1;
            console.log(random);

            let computer_choice = "";
                if (random == 1) {
                    computer_choice = 'Камень';
                } else if (random == 2) {
                    computer_choice = 'Ножницы';
                } else {
                    computer_choice = 'Бумага';
                }

            let res = "";
                if (+start == 1 && random == 2 || 
                    +start == 2 && random == 3 || 
                    +start == 3 && random == 1) {
                    res = 'ПОБЕДА!'
                } else if (random == 1 && +start == 2 ||
                            random == 2 && +start == 3 || 
                            random == 3 && +start == 1) {
                    res = 'ПОРАЖЕНИЕ'
                } else {
                    res = 'НИЧЬЯ'
                }

            //Стрелочная функция для замены цвета фона
            const setBgClass = (elem, condition) => {
                elem.classList.remove('bg-red', 'bg-green', 'bg-yellow', 'invisible');

                if (condition === 'НИЧЬЯ') {
                    resultBlock.classList.add(`bg-yellow`);
                } else if (condition === 'ПОБЕДА!') {
                    resultBlock.classList.add(`bg-green`)
                } else if (condition === 'ПОРАЖЕНИЕ') {
                    resultBlock.classList.add(`bg-red`)               
                } else {
                    resultBlock.classList.add(`bg-red`)               
                }
            }

            setBgClass(resultBlock, res);
                
            computerChoiseBlock.textContent = `Выбор Компьютера: ${computer_choice}`; 
            userChoiseBlock.textContent = `Ваш выбор: ${myChoice}`;
            resultBlock.textContent = `Результат: ${res}`;
        }

    Game_1_button.addEventListener("click", Game_1_func);   
    } else {
        console.log('Game_1_button element not found on this page');
    }

    // Проверяет является ли значение целым, положительным числом
    function isPositiveInteger(value) {
        return /^\d+$/.test(value);
    };

    // Функция для проверки и получения элемента *НУЖНА ДОРАБОТКА
    // function MyGetElementById(id) {
    //     const element = document.getElementById(id);
    //     if (!element) {
    //         console.error(`Элемент с ID ${id} не найден`);
    //         return null;
    //     }
    //     return element;
    // }

    // Калькулятор принимает два числа и оператор
    function MyCalc(n1, n2, oper) {
        switch(oper) {
            case '+': 
                return n1 + n2;
            case '-': 
                return n1 - n2;
            case '*': 
                return n1 * n2;
            case '/': 
                return n1 / n2;
            default: return "Ошибка";
        }
    };


    //Page 4
    const calcSubmit = document.getElementById("calc-submit");
    if (calcSubmit) {
        const calcInput1 = document.getElementById("calc-input-1");
        const calcInput2 = document.getElementById("calc-input-2");
        const sum = document.getElementById("calc-sum");
        const sub = document.getElementById("calc-subtract");
        const divide = document.getElementById("calc-divide");
        const mult = document.getElementById("calc-multiply");
        const calcResult = document.getElementById("calc-result");

        let operator = '+';

        sum.onclick = function() {
            operator = '+';
        };

        sub.onclick = function() {
            operator = '-';
        };

        mult.onclick = function() {
            operator = '*';
        };

        divide.onclick = function() {
            operator = '/';
        };
        calcSubmit.onclick = function() {
            let num_1 = Number(calcInput1.value);
            let num_2 = Number(calcInput2.value);
            let res = MyCalc(num_1, num_2, operator);
            if (!isPositiveInteger(num_1) || !isPositiveInteger(num_2)) {
                res = "Wrong Input"
            }
            calcResult.textContent = res;
        };

        // Массив операторов и массив классов которые нужно присвоить элементу
        const actions = [sum, sub, divide, mult];
        const classes = ['fa-beat-fade','fa-lg'];

        // Применяем функцию к каждому оператору
        actions.forEach(elem => {
             elem.onmouseover = () => multiClassToggle(elem.firstChild, classes);
             elem.onmouseout = () => multiClassToggle(elem.firstChild, classes);
             elem.onfocus = () => multiClassToggle(elem.firstChild, classes);
             elem.onblur = () => multiClassToggle(elem.firstChild, classes);
        });
    } else {
        console.log('calcSubmit element not found on this page');
    }

    // Принимает элемент и массив классов, которые нужно переключить
    function multiClassToggle(elem, clsArr) {
        clsArr.forEach(cls => {
            elem.classList.toggle(cls);
        });
    }

   //Page 5
    const notesInput = document.getElementById("notesInput");
    if (notesInput) {
        const addBtn = document.getElementById("addBtn");
        const noteList = document.getElementById("noteList");

        const notes = [
            {
                title: "Дефолтная заментка 1",
                complited: true,
            }, 
            {
                title: "Дефолтная заметка 2",
                complited: false,
            }
        ];

        function getNoteTmpl(note, index) {
            return `
            <li id="defaultNote" class="note notes-element rounded">
                <span class = "${note.complited ? 'text-decoration-line-through' : ''}">${note.title}</span>
                <div class="note-button ps-1 pe-1 mb-1">
                    <span class="btn bg-${note.complited ? 'yellow' : 'green'} text-white" data-index="${index}" data-type="toggle">+</span>
                    <span class="btn bg-red text-white" data-index="${index}"data-type="remove">x</span>
                </div>
            </li>
            `
        }

        function render(){
            noteList.textContent = ""
            if (notes.length === 0) {
                noteList.innerHTML = `<p class="align-items-center">Заметок нет</p>`
            }
            for (let i = 0; i < notes.length; i++){
                noteList.insertAdjacentHTML('beforeend', getNoteTmpl(notes[i], i));
                notesInput.value = ""
            }
        }

        render()

        addBtn.onclick = function () {
            if (notesInput.value.length === 0) {
                return
            }
            let newNote = {
                title: notesInput.value,
                complited: false
            }
            notes.push(newNote)
            render()
        }

        noteList.onclick = function (event) {
            console.log(event.target.dataset.index)
            if (event.target.dataset.index){
                const index =  Number(event.target.dataset.index)
                const type = event.target.dataset.type

                if (type === 'toggle'){
                    console.log('toggle', index)
                    notes[index].complited = !notes[index].complited
                } else if (type === 'remove'){
                    console.log('remove', index)
                    notes.splice(index, 1)
                } 
                render()
            }
        }

        
    } else {
        console.log('notesInput element not found on this page');
    }
    
    //Page 6
    const timeContainer = document.getElementById("time_container");
    if (timeContainer) {
        const timeResult = document.getElementById("time_result");
        let mode = 'time';  
    
        // функция с замыканием можно было и без него, 
        // но почему бы и да
        function bindMode(typeName) {
             return function() {
                 mode = typeName;
                 update();
             }
         }
    
        const time_block_nav = document.getElementById("time_block_nav");
        time_block_nav.onclick = function (event) {
             console.log(event.target.id)
    
             switch (event.target.id) {
                 case 'time_date': 
                     bindMode('date')();
                     break;
                 case 'time_timer':
                     bindMode('timer')();
                     break;
                 case 'time_actual': 
                     bindMode('time')();
                     break;
                 default: 
                     mode = 'time';
             }
             
             console.log(mode)
             console.log(event.target)
             console.log(event.target.data_check)
             activeTimeFormatBtn(event.target)
    
             // если то на что мы кликнули кнопка
             if (event.target.tagName === 'BUTTON') {
                 // мы удаляем класс активной кнопки со всех кнопок
                 document.querySelectorAll('.time-block-nav button').forEach(btn => {
                     btn.classList.remove('active-time-btn');
                     btn.data_check = 'false';
                 }); 
    
                 // после того как всё удалили, на выжженой земле сажаем новый класс, туда куда нажали
                 event.target.classList.add('active-time-btn');
                 event.target.data_check = 'true';
             }
        }
    
        setInterval(() => { update() }, 1000);
        update() // объявляем эту функцию, чтобы не ждать отображения
    
        function update() {
             timeResult.textContent = formatTime(mode);
        }
    
        function formatTime (formatMode) {
             const now = new Date;
             switch (formatMode) {
                 case 'time': 
                     return now.toLocaleTimeString();
                 case 'date': 
                     return now.toLocaleDateString();
                 case 'timer': 
                     return `Данный блок ещё в разработке
                     :(`
                 default: 'Ошибка';
             }
        }
    
        function activeTimeFormatBtn(target) {
             if (target.activ) {
                 target = `<button class="${target.className} active-time-btn" id="${target.id}" activ="${target.activ}" value="${target.value}">${target.value}</button>`
             } else { 
                 target = `<button class="${target.className} " id="${target.id}" activ="${target.activ}" value="${target.value}">${target.value}</button>`
             }
        }
    }
});






// function alertFunction() {
//     alert("YAY! YOU DID IT!");
//   }
//   const btn = document.getElementById("btn");
  
  // METHOD 3
//   btn.addEventListener("click", function (e) {
//     e.target.style.background = "blue";
//   });

// let firstName = null;
// let lastName = "Lox";
// let nickName = "Суперкодер";
// let res = (firstName, lastName, nickName) => {
//     let a = firstName ?? "- "
//     let b = lastName ?? "- "
//     let c = nickName ?? "- "
//     return a + b + c
// } 

// показывает первое значение, которое определено:
// alert(res(firstName, lastName, nickName) ?? "Аноним"); // Суперкодер


// let num = prompt("");
// let arr, arr1, arr2 = [];

// for (i=1; i<= +num; i++){
//     arr.push(`${i}`);
// }

// arr1 = arr.filter(n => n % 2 === 1);
// arr2 = arr.filter(n => n % 2 === 0);

// console.log(arr1);
// console.log(arr2);

// let age = prompt("Сколько Вам лет?", 18);

// let welcome = (age < 18) ?
//   () => alert("5"+5 ) :
//   () => alert("Здравствуйте!");

// welcome();

// alert(location.href); // показывает текущий URL
// if (confirm("Перейти на Wikipedia?")) {
//   location.href = "https://wikipedia.org"; // перенаправляет браузер на другой URL
// }
// let user = {
//     username: "Lox", 
//     email: "",
//     login: function() {
//         console.log(`${this.username} has logged in`)
//     }
// }

// user.login()

// let book = {
//     title: "\"Lox ne Mamont\"", 
//     author: "Lox", 
//     year: 2024,
//     getSummary: function () {
//         console.log(`${this.title} by ${this.author} (${this.year})`)
//     }
// }

// book.getSummary()

// function make_Counter() {
//     let count = 1; 
    
//     function up_Counter() {
//         console.log(count++)
//     }

//     return up_Counter
// }

// const counter = make_Counter(); 
// counter()
// counter()
// counter()

// function createCounter() {
//     let count = 0; // Приватная переменная

//     return {
//         // увеличивает count 
//         increment: function() {
//             count++;
//             console.log(count);
//         },
//         // С помщью этого метода мы можем достать локальную переменную
//         getCount: function() { 
//             return count;
//         }
//     };
// }
// let xy = "lox"

// let book = {
//     title: `"Lox ne Mamont"`,
//     author: "Lox Loxovich",
//     pages: 300,
//     getDescription: function(){
//         console.log(`${this.title} by ${this.author}, Pages: ${this.pages}`)
//     },
//     y: xy
// }
// xx = "loxushka"
// book.getDescription()
// book.publisher = "Loxovich.INC"
// console.log(book.publisher)
// delete book.pages
// console.log(book.pages)
// console.log(book.x = "loxushka")
// console.log(book.y)

// let std_name = prompt("What's your name, student?")
// let std_age = prompt("How old are you?")
// let std_grade = prompt("What's your grade?") 
// let student = {
//     name: std_name,
//     age: std_age,
//     grade: std_grade,
//     introduce: function() {
//         console.log(`${this.name} is ${this.age} years old is in ${this.grade} grade`)
//     }
// }

// student.introduce()

// student.school = "School #5"
// delete student.age

// console.log(student.age) 

// let tchr_name = "Mr.Lox"
// let tchr_subject = "Loxopedia"
// let tchr_students = ["Lox1", "Lox2", "Lox3", "Loxushka1"]
// let teacher = {
//     name: tchr_name,
//     subject: tchr_subject,
//     students: tchr_students,
    
//     introduce: function() {
//         console.log(`${this.name} teaches ${this.subject}. Students: ${this.students}`)
//     }
// }

// teacher.introduce()

// let tchr_students = ["Lox1", "Lox2", "Lox3", "Loxushka1"]

// let course = {
//     title: "???",
//     description: "???",
//     students: tchr_students,

//     addStudent: function(name) {
//         tchr_students.push(name)
//     },
//     removeStudent: function(name) {
//         let index = this.students.indexOf(name);
//         if (index !== -1) {
//             this.students.splice(index, 1);
//         }
//     },
//     listStudents: function(){
//         console.log(this.students)
//     }
// }

// course.addStudent("Nelox")
// course.listStudents()
// course.removeStudent("Lox1")
// course.listStudents()

// let numbers = [1, 2, 3, 4, 5]

// let sum = function(arr){
//     let res = 0;
//     for (let i = 0; i < arr.length; i++){
//         res += arr[i]
//     }
//     return res
// }

// let max = function(arr) {
//    let res = 0;
   
//    for (let i = 0; i < arr.length; i++){
//     if (res < arr[i]) {
//         res = arr[i];
//     }
//    }
//    return res
// }

// let chot = function(arr) {
//     let res = arr.filter(n => n % 2 === 0);
//     return res
// }

// let res = sum(numbers);
// let res2 = max(numbers);
// let res3 = chot(numbers);
// console.log(res);
// console.log(res2);
// console.log(res3);

// let students = [
//     {name: "Oleg", grade: "4"}, 
//     {name: "Pasha", grade: "5"},
//     {name: "Asshat", grade: "0"},
//     {name: "Dalbek", grade: "69"},
//     {name: "Lox", grade: "3"}
// ];

// let gradeThreePlus = function(arr){
//     let res = [];
//     for (let i = 0; i < arr.length; i++){
//         if (+arr[i].grade > 3){
//             res.push(arr[i].name)
//         }
//     }
//     return res
// }

// console.log(gradeThreePlus(students))

// let middleGrade = function(arr){
//     let res = 0;
//     for (let i of arr){ // альтернатива для (let i = 0; i < arr.length; i++)
//         res += +i.grade
//     }
//     return res / arr.length
// }

// console.log(middleGrade(students))


// let promise = new Promise(function(resolve, reject){
//     let age = 8;

//     setTimeout( () =>
//         (age >= 18) ? resolve("Регистрация успешна!"): reject("Ошибка: Пользователь слишком молод для регистрации")
//     , 2000)
// })

// promise
//     .then(result => console.log(result))
//     .catch(error => console.log(error));
// console.log("Ожидание завершения промиса...");

// function checkUserAge(age) {
//     return new Promise(function(resolve, reject) {
//         setTimeout(() => {
//             if (age >= 18) {
//                 resolve("Регистрация успешна!");
//             } else {
//                 reject("Ошибка: Пользователь слишком молод для регистрации");
//             }
//         }, 2000);
//     });
// }

// async function registerUser(age) {
//     try {
//         let result = await checkUserAge(age); // Ожидание результата промиса
//         console.log(result); // Вывод успешного результата
//     } catch (error) {
//         console.log(error); // Обработка ошибки
//     }
// }

// registerUser(20); // Пример успешной регистрации
// // registerUser(16); // Пример ошибки регистрации
// console.log("Ожидание завершения регистрации...");


// async function getData() {
//     try {
//         let res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//         let data = await res.json();
//         console.log(data);
//     } catch (error) {
//         console.log('Ошибка:', error);
//     }
// }
// getData();

// document.getElementById('userForm').addEventListener('submit', function(event) {
//     event.preventDefault()

//     const name = document.getElementById('userRegLogin').value
//     const age = document.getElementById('userRegAge').value
//     const url = 'https://jsonplaceholder.typicode.com/posts'

//     try {
//         const response = fetch(url, {
//             method: 'POST', 
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({name: name, age: age})
//         });

//         if(!response.ok) {
//             throw new Error('Что-то пошло не так')
//         } 
//         response.json()
//         document.getElementById('responseMessage').innerHTML = `Данные отправленны успешно`;
//     } catch(error) {
//         document.getElementById('responseMessage').innerHTML =`Ошибка: ` + error.message
//     }
// })



// const readline = require('readline');

// // Чтение входных данных
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('', (input) => {})

//задача 3
    // const readline = require('readline');
    // const rl = readline.createInterface({
    //     input: process.stdin,
    //     output: process.stdout
    // });
    
    // let inputLines = [];
    // let inputCount = 0;
    
    // rl.on('line', (input) => {
    //     inputLines.push(input.trim()); 
    //     inputCount++;
    
    //     if (inputCount === 3) {
    //         rl.close();
    //     }
    // });
    
    // rl.question('', (input1) => {
    //     rl.question('', (input2) => {
    //         rl.question('', (input3) => {
    //             function GuesPassWord(input1, input2, input3){
    //                 let len = Number(input3);
    //                 let res = ""
    //                 let finalRes = ""
    //                 let letters = input2.split('');
    //                 let allLetters = input1.split('');
                    
    //                 for (i = 0; i <= allLetters.length; i++){
    //                     for (j = 0; j <= letters.length; j++){
    //                         if(allLetters[i]==letters[j]){
    //                             res+=allLetters[i]
    //                         } else {
    //                             j = 0;
    //                             i--
    //                         }
    //                     }
    //                 }
    //                 return finalRes
    //             }
    //         }
    //     }
    // });

    const DividerCounter = (n) => {
        let count = 0;
        for (let i = 1; i * i <= n; i++) {
            if (n % i === 0) {
                count++;
                if (i !== n / i) {
                    count++;
                }
            }
        }
        return count;
    }
    
    function isPrime(num) {
        if (num <= 1) return false;
        if (num <= 3) return true;
        if (num % 2 === 0 || num % 3 === 0) return false;
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) return false;
        }
        return true;
    }
    
    function DividerCountersCounter(input) {
        let [l, r] = input.split(' ').map(Number);
        let count = 0;
        
        for (let i = l; i <= r; i++) {
            let divisorCount = DividerCounter(i);
            if (isPrime(divisorCount)) {
                count++;
            }
        }

        return count.toString()
    }
    
    let input = "1 9";
    DividerCountersCounter(input); // Выводит количество чисел в диапазоне от 1 до 9, количество делителей которых является простым числом
    