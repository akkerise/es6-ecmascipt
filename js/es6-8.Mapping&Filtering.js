
////// MAPPING
let set = new Set([1,2,3]);
// let arr = [...set];
// let arr = [...set].map(function(x) {
// 	return x*2;
// });
// SAME
// for (a of arr) {
// 	console.log(a*2);
// }
// console.log(arr); // arr = [2,4,6];
// console.log(set); // set = [1,2,3];


////// FILTERING
let arr = [...set].filter(function (x){
	return (x % 2) == 0;
});
console.log(arr); // return [2]