// "use strict";
var hello = (name,message) => {
	console.log('My name is: ' + name + ' ' + message);
}
hello('Cuong' , 'This is hello function !' );

var log_hello = (name,message) => console.log('Fail ' + name + ' ' + message);
log_hello('Thanh' , 'I want give more money ...');

var log_hello_one = name => {
	console.log(name);
};
log_hello_one('Nguyen Anh Thanh');

var log_hello_not_param = () => {
	console.log('Welcome to laravelshop53');
};
log_hello_not_param();
var domain = ["freetuts.net", 'qa.freetuts.net', 'demo.freetuts.net'];

// domain.map(function(val, key){
//     console.log(val.toUpperCase());
// 		domain[key] = val.toUpperCase();
// });

domain.map((val, key) => {
    console.log(val.toUpperCase());
});
// console.log(domain);
setInterval(() => {
	console.log('3s troi qua');
},3000);

// let date = [10,3,2016];
// let [d,m,Y] = date;
// console.log('Day is : ' + d );
// console.log('Month is : ' + m);
// console.log('Year is : ' + Y);

let data = { day: 30 , month: 12 , year: 2016};
let {day : d, month : m, year : y} = data;
console.log('Day is: ' 		+ d);
console.log('Month is: ' 	+ m);
console.log('Year is: ' 	+ y);

// let data = {
// 	day: 30,
// 	month: 12,
// 	year: 2016
// };
//
// let {
// 	year: y
// } = data;
