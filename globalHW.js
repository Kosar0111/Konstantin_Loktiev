"use strict"

console.log(
    [1, 4, 3, 0, 4, 5, 4].filter(element => !(element % 2))
        .reduce((accumulator, element) => accumulator + Math.sqrt(element), 0)
);


// next

let arr = [1, 9, 4, 2, 3, 6, 7, 1, 5];
function sort(arr) {
    const odds = arr
        .filter(x => x % 2 != 0)
        .sort((a, b) => a - b);

    return arr.map(x => x % 2 ? odds.shift() : x);
}
console.log(sort(arr));



// next 2
let arr1 = [1, 2, 3, 4, 1, 2];
function unique(arr) {
    return Array.from(new Set(arr1));
};
console.log(unique(arr1));

//// test
let sort1 = arr1.sort();
let dubli = function (num) {

    for (let i = 0; i < num.length; i++) {

        if (num[i] === num[i - 1]) {
            num.splice(i, 1);
            ;
        }
    }

    return num;
};

console.log(dubli(sort1));


// вроде что-то получилось.
let arr2 = [1, 2, 3, 4, 1, 2];
let arr3 = arr2.sort();
let sortArr = [];
arr3.filter(function (value) {

    if (arr3.indexOf(value) === arr3.lastIndexOf(value)) {
        sortArr.push(value);
    };
});

console.log(sortArr)



// next 2

let isPlainObject = (element) => typeof element === 'object' && !Array.isArray(element) && element !== null;



// next 3

let obj = {
    a: 1,
    b: 2
};
let array = () => {

    return Object.entries(obj);
}
console.log(array(obj));

// 
let creatingArray = (object) => {

    let arra = [];

    for (let prop in object) {
        if (object.hasOwnProperty(prop)) {
            arra.push([prop, object[prop]])
        }
    }
    return arra;
}
console.log(creatingArray(obj))



// next 4
let obj1 = { a: 1, b: 5, c: 10 };
let oneProp = (prop, ...rest) => {
    let objProp = { ...prop };

    rest.forEach((item) => {
        delete objProp[item];
    });

    return objProp;
};
console.log(oneProp(obj1, 'b', 'c'))


// next... task

let empty = (obj) => {

    for (key of obj) {
        if (key !== null || key !== undefined || key !== NaN)

            return true;

    } return false;
};
// 

let objEmpty = (object1) => {
    let objEmptyKey = Object.keys(object1);
    if (objEmptyKey.length === 0) {

        return true;
    }

    return false
};

// next... task



// next... task.
let addA = (size, value) => Array.apply(null, Array(size)).map(() => value
);
console.log(addA(3, 'a'));

// next

let filterArray = [0, 1, false, 2, undefined, '', 3, null];
let res = filterArray.filter(item => item);

console.log(res)

