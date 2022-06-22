let goods = [
    {
        name: 'Cup',
        price: 99,
    },
    {
        name: 'Plate small',
        price: 119
    },
    {
        name: 'Black Tea',
        price: 159
    },
    {
        name: 'Drip coffee Bag',
        price: 30,
    },
    {
        name: 'Tea bomb',
        price: 19
    }
];


function sortGoods(a, prop, param) {
    let arr = a.slice(); // копируем массив
    arr.sort(function (a, b) {
        if (a[prop] < b[prop] && a[param] < b[param]) {
            return 1;
        }
        else if (a[prop] < b[prop] && a[param] < b[param]) {
            return -1;
        }
        else {
            return 0;
        }
    });
    console.log(arr);
}
sortGoods(goods, 'name', 'price');




let str = 'border-left-color';
let rez = str.replace(/-/gi, " ");
let rez2 = rez.replace(/\bb/, "B",);
let rez3 = rez2.replace(/\bl/, "L");
let rez4 = rez3.replace(/\bc/, "C");
console.log(rez);
console.log(rez4);

// vowels

function vowelCount(str) {
    let splitString = str.split('');
    let obj = {};
    let vowels = "aeiou";
    splitString.forEach((letter) => {
        if (vowels.indexOf(letter.toLowerCase()) !== -1) {
            if (letter in obj) {
                obj[letter]++;
            } else {
                obj[letter] = 1;
            }
        }

    });
    return obj;
}

console.log(vowelCount('asdeaqokfficyrrdhgdrhhthtgoaeqwervxiiii'));


let total = 0;
let sum = function (value) {
    total += value;
    return sum;
};

sum(5)(8)(-4)(-1)(3)(-5)(1)(-3);
console.log(total);