

// Tách phần tử trong mảng

// let date = [4,1,2016];
// let [d,m,Y] = date;

// vẫn có thể bỏ qua 2 biến ban đầu và lấy mỗi giá trị cuối
// let [,,Y] = date;

// console.log(d);
// console.log(m);
// console.log(Y);


// Tách phần tử trong object

// let date = {
//   day: 4,
//   month: 1,
//   year: 2016
// };
//
// // let {
// //   day: d,
// //   month: m,
// //   year: y
// // } = date;
//
// // bỏ không lấy 2 giá trị đầu
// let {
//   year: y
// } = date;
//
// // console.log(d);
// // console.log(m);
// console.log(y);







// Một sô ví dụ nâng cao khác
var person = {name: 'Cuong' , email: 'nguyenthanh.rise.88@gmail.com'};
var {name: n , email: e} = person;
console.log(n); // return:  Cuong


//// truy cập vào phần tử không tồn tại
var {fooz: bar} = {foor: 'baz'};
console.log(bar); // undefined


//// truy cập vào phần tử không tồn tại
let domain = ['free'];
let [main,sub] = domain;
console.log(sub); // undefined

//// có thể gán giá trị mặc định để tránh lỗi undefined
let domain1 = ['freetuts'];
let [main1,sub1 = 'Gán giá trị bừa'] = domain1;
console.log(sub1); // return: Gán giá trị bừa





// Sử dụng function

var domain2 = () => {
  return [
    'something' , 'else'
  ];
};

let [main2,sub2] = domain2();
console.log(main2);
console.log(sub2);
