// // "use strict";
// var hello = (name,message) => {
// 	console.log('My name is: ' + name + ' ' + message);
// }
// hello('Cuong' , 'This is hello function !' );

// var log_hello = (name,message) => console.log('Fail ' + name + ' ' + message);
// log_hello('Thanh' , 'I want give more money ...');

// var log_hello_one = name => {
// 	console.log(name);
// };
// log_hello_one('Nguyen Anh Thanh');

// var log_hello_not_param = () => {
// 	console.log('Welcome to laravelshop53');
// };
// log_hello_not_param();
// var domain = ["freetuts.net", 'qa.freetuts.net', 'demo.freetuts.net'];

// // domain.map(function(val, key){
// //     console.log(val.toUpperCase());
// // 		domain[key] = val.toUpperCase();
// // });

// domain.map((val, key) => {
//     console.log(val.toUpperCase());
// });
// // console.log(domain);
// setInterval(() => {
// 	console.log('3s troi qua');
// },3000);

// // let date = [10,3,2016];
// // let [d,m,Y] = date;
// // console.log('Day is : ' + d );
// // console.log('Month is : ' + m);
// // console.log('Year is : ' + Y);

// let data = { day: 30 , month: 12 , year: 2016};
// let {day : d, month : m, year : y} = data;
// console.log('Day is: ' 		+ d);
// console.log('Month is: ' 	+ m);
// console.log('Year is: ' 	+ y);

// // let data = {
// // 	day: 30,
// // 	month: 12,
// // 	year: 2016
// // };
// //
// // let {
// // 	year: y
// // } = data;

// let test_undefined = ['freetuts.net'];
// let [main,sub] = test_undefined;
// console.log(main);
// console.log(sub);

// let map = new Map([
// 		['name' , 'Nguyen Anh Thanh'],
// 		['address' , 'Vinh Yen']
// 	]);
// for(var entry of map.entries()){
// 	console.log(entry[0] + ' - ' + entry[1]);
// }

// let map = new Map([
// 	['name','Nguyen Thanh'],
// 	['address' , 'Vinh Yen']
// ]);

// // for(var [key,value] of map){
// // 	console.log(key + ' ' + value);
// // }

// map.forEach((v,k) => {
// 	console.log(v + ' ' + k);
// });

let map = new Map().set(1,'a').set(2,'b').set(3,'c').set(4,'d').set(5,'e');

// Chuyển đổi
let map1 = new Map(
	[...map].map(
		([key,value]) => [key,key + ' - ' + value]
	)
	);

console.log(map1);