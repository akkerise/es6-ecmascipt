// Trong bài này chúng ta tìm hiểu về Symbol và ứng dụng của nó trong việc tạo các key của đối tượng Map hoặc các ký tự unique.

// Trong ES6 xuất hiện thêm một kiểu dữ liệu Symbol, đây là kiểu dữ liệu dạng primitive type, nó sẽ tạo ra các ký tự duy nhất (unique) và không trả về một chuỗi mà nó chỉ là một dạng được gọi như một function, vì vậy bạn sẽ không thể thấy được ký tự nó generate là gì.

// Để khởi tạo một Symbol thì ta dùng cú pháp sau:
let symbol1 = Symbol();
let symbol2 = Symbol('symbol2');

console.log(symbol1 === symbol2);
console.log(typeof symbol1); // return symbol



// Sử dụng Symbol như 1 key trong object
const MY_KEY = Symbol();
// let obj = {
// 	[MY_KEY]: 123
// };
// console.log(obj[MY_KEY]);

let map = new Map();
map.set(MY_KEY, 'freetuts.net');
console.log([...map]); //  Array [ Array[2] ]
