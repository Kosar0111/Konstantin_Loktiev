let equal = (arr1, arr2) => {

    if (arr1.length !== arr2.length) {
        return false
    }

    for (i = 0; i < arr1.length; i++);
    for (k = 0; k < arr2.length; k++);
    if (arr1[i] !== arr2[k]) {
        return false;
    }
    return true;
}
console.log(equal([1, 2, 3], [1, 2, 3]));

// next

let str = (strn) => {
    let totalStr = [];
    for (let i = 0; i < strn.length; i++) {
        if (strn[i] == strn[i].toUpperCase()) {
            totalStr.push(strn[i].toLowerCase());
        } else
            if (strn[i] == strn[i].toLowerCase()) {
                totalStr.push(strn[i].toUpperCase());
            }
    }

    return totalStr.join('');

};
console.log((str('КаЖдЫй ОхОтНиК')));

//=================

let nArray = (array, n) => {
    if (array.length == null)
        return false;

    if (n == null)
        return false;
    return array.reverse().slice(0, n);
}

console.log(nArray([1, 3, 5, 7, 9, 11, 13, 15, 17], 2))

//====================

let arr1 = [1, 2, 3, 7, 8, 9, 13];
let arr2 = [4, 5, 6, 10, 11, 12];
let arr3 = [];
for (let i = 0; i < arr1.length; i++)
    for (let k = 0; k < arr2.length; k++) {
        if (i == k) {
            arr3.push(arr1[i] + arr2[k])
        }
    }

console.log(arr3)

//========


let addA = (size, value) => Array.apply(null, Array(size)).map(() => value
);
console.log(addA(3, 'a'));
///====

let union = array => new Set(array);
console.log(union([7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7], [7, 'z', 7, 'z', 3, 5, 9, 7], 7, 'z', 7, 'z', 3, 5, 9, 7))

//====

let moveArr = (arr4, from, to) => {
    arr4.splice(to, 0, arr4.splice(from, 1)[0])
    return arr4
};

console.log(moveArr([152, 56562, 443], 0, 1))
console.log(moveArr(['fg', 'hf', 154, true, 'a', 'g', 'po', 'po154'], 5, 1))

//========

let Xobj = (obj1, obj2) =>
    Object.keys(obj1).filter(itm => itm in obj2);

console.log(Xobj({ a: 1, b: 2 }, { c: 1, b: 2 }))

//===========

let years = (year1, year2) => {
    let arrYear = [];
    for (let i = year1; i <= year2; i++) {
        if ((i % 4 == 0 && i % 100 !== 0) || (i % 100 == 0 && i % 400 == 0))
            arrYear.push(i);
    };
    return arrYear;
};

console.log(years(1880, 2050))


//======
let stR = 'JavaScript';

function char(item, index, str) {
    return str.slice(index - 1, index + 2)
};

let modStr = Array.from(stR).map.call(stR, char);
console.log(modStr)

//=====

/* let enterNum = prompt('Enter the number', 5555);
let num = (enterNum) => {
    Array.from(enterNum).map(() => {
        console.log(enterNum)
        for (i = 1; i < enterNum.length; i++);
        if ((enterNum[i - 1] % 2 !== 0) && (enterNum[i] % 2 == 0)) {
            return (`${enterNum[i - 1]}:${enterNum[i]} `)
        }
        else {
            return (`${enterNum[i - 1]}${enterNum[i]} `)
        }
    })
    return enterNum.join('');
}

console.log(num()) */

let enterNum = prompt('Enter the number', 5555);
let numEnter = (enterNum) => {
    let num = [enterNum[0]]
    for (i = 1; i < enterNum.length; i++) {
        if ((enterNum[i - 1] % 2 !== 0) && (enterNum[i] % 2 !== 0)) {
            num.push(':', enterNum[i]);
        }
        else {
            num.push(enterNum[i]);
        }
    }
    return num.join('');
}

console.log(numEnter(enterNum))

