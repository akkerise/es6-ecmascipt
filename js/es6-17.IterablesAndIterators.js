// Trong Javascript thì iterators có chung cấp phương thức next() và phương thức này sẽ return về phần tử kết tiếp, đồng thời ghi nhận luôn phần tử đã lặp là phần tử next(). Phương thức next() sẽ return về một Object gồm hai thuộc tính là value và done.

// 1. Iterators

let arr = ['a','b','c'];
var iterator = arr[Symbol.iterator]();
console.log(iterator.next()); // a
console.log(iterator.next()); // b
console.log(iterator.next()); // c
console.log(iterator.next()); // undefined

// 2. Iterable và iterator protocol

// Iterable

var array = [1,2,3,4];
for (let x of array){
    console.log(x);
}
console.log(...array);