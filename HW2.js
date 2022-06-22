// bubble

let arr = [5, 8, 1, 9, 2, 6, 3, 7, 4]
for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr.length - 1; j++) {
        if (arr[j] > arr[j + 1]) {
            let bubble = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = bubble

        }
    }
}
console.log(arr)

// fibonacci
let fib = 11;
let a = 1, b = 1;
for (let i = 3; i <= fib; i++) {
    let c = a + b;
    a = b;
    b = c;
    console.log(c)
}

//fibbonacci recurcively

function fib2(n) {
    return fib2(n - 1) + fib2(n - 2);
}

//array
let arr1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(arr1[1][0]);


//arr 3
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr3.join('-'));



