"user strict"
//let userName = prompt('What is your name?');

// проверка на пустую строку отмену или esc. Правильно ли это???
/* if (userName === undefined || userName === null || userName === '') {
    alert('Enter your name')
};


let userAge = +prompt('How old are you?',);

let pet = prompt('Do you have a pet?');

if (pet === undefined || pet === null || pet === '') {
    alert('Enter right meaning')
};

let petName = prompt('What is the name of this pet?');
if (petName === undefined || petName === null || petName === '') {
    alert('Enter right meaning')
};

alert(`Hay, my name is ${userName},  I am ${userAge} year old. ${pet} I have a pet  and  it's name ${petName}`) */

// Task # 1
let a = -3;
if (a >= 0) {
    console.log('Верно')
} else {
    console.log('Не верно')
}

// Task # 2
let test = true;
if (test === true) {
    console.log('Верно')
} else {
    console.log('Неверно')
}

test = true ? 'Верно' : 'Неверно'


// Task #3
let b = 3;
if (b === 0 || b === 2) {
    b += 7;
    console.log(b);
} else
    b = b / 10;
console.log(b);


let month = +prompt('Введите месяц года в формате 1,2 ...12')
switch (month) {
    case 1:
        alert('Январь');
        break;
    case 2:
        alert('Февраль');
        break;
    case 3:
        alert('Март');
        break;
    case 4:
        alert('Апрель');
        break;
    case 5:
        alert('Май');
        break;
    case 6:
        alert('Июнь');
        break;
    case 7:
        alert('Июль');
        break;
    case 8:
        alert('Август');
        break;
    case 9:
        alert('Сентябрь');
        break;
    case 10:
        alert('Октябрь');
        break;
    case 11:
        alert('Ноябрь');
        break;
    case 12:
        alert('Декабрь');
        break;
    default:
        alert(month + '- такого месяца нет в году');
}

switch (month) {
    case 1:
    case 2:
    case 12:
        alert('Это зимний месяц');
        break;
    case 3:
    case 4:
    case 5:
        alert('Это весенний месяц');
        break;
    case 6:
    case 7:
    case 8:
        alert('Это летний месяц');
        break;
    case 9:
    case 10:
    case 11:
        alert('Это осенний месяц');
        break;
    default:
        alert(month + '- такого месяца нет в году');

}