// "use strict";
// let x = 10;
// if( x == 20 ){
//   if (false) {
//     console.log(x);
//   }
// }else{
//   console.log(x);
// }


// var a = 12;
// var b = 20;
// if (a < b) {
//   var tmp = a;
//   a = b;
//   b = tmp;
// }
// // console.log('a :' + a );
// // console.log('b :' + b );
// console.log('tmp :' + tmp );

var a = 12;
var b = 20;
if (a < b) {
  let tmp = a;
  a = b;
  b = tmp;
}
console.log('a :' + a );
console.log('b :' + b );
console.log('tmp :' + tmp ); // lỗi do biến chỉ tồn tại trong if
// Nếu để let tmp thì biến tmp chỉ tồn tại trong lệnh if nên khi muốn xuất nó ra thì bị lỗi
