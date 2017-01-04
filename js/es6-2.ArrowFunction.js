// Cú pháp căn bản:

var functionName = (val1,val2) => {
  // Nội dung function
}

var hello = (name , mes) => {
  console.log('Chào : ' + name + ' ' + mes);
}

hello('Thanh' , ' . This is basic Arrow Function');

// Nội dung là một câu lệnh đơn:

var hello1 = (name , mes) => console.log('Chào : ' + name + ' ' + mes);
hello1('Thanh' , ' . This is single');

// Trường hợp một tham số:

var hello2 = mess => {
  console.log(mess);
}
hello2('This is a parameter');


// Trường hợp không có tham số:

var hello3 = () => {
  console.log('Not a parameter');
}
hello3();


// Một số ví dụ arrow function trong ES6

var domain = ["freetuts.net", 'qa.freetuts.net', 'demo.freetuts.net'];

// // không lưu lại biến domain nên vẫn như bình thường
// domain.map(function (val,key){
//   console.log(val.toUpperCase());
// });
//
// // domain vẫn như thế
// console.log(domain);


// // lưu lại biến domain nên sẽ có sự thay đổi như bình thường
// domain.map(function (val,key){
//   console.log(val.toUpperCase());
//   domain[key] = val.toUpperCase();
// });
//
// // domain vẫn như thế
// console.log(domain);




// Sử dụng Arrow Function để viết

domain.map((val,key) => {
  console.log(val.toUpperCase());
});


// Callback function của hàm setTimeout()

setTimeout( () => {
  console.log('3s trôi qua rồi sao ?');
},3000);
