const info = {
	name: 'Nguyen Anh Thanh',
	domain: 'freetuts.net'
}
console.log(info);

// khai báo lại là sẽ bị báo lỗi
// const domain = 'freetuts.net';
// domain = 'sorrychange.pp';


{
	const baby = 'Fuck';
	console.log(baby);
}

// Do const baby được khai báo trong phạm vi {} khác nên ta không thể gọi nó ra được ở dưới
// Biến var thì cho phép global nên ta sẽ gọi được chúng ở dưới thông qua biến baby
// {
// 	console.log(baby);
// }


// const với vòng lặp

var domains = [
	'freetuts.net',
	'google.com',
	'vnxpress.net'
];

for (domain of domains) {
	const mess = domain;
	console.log('Mess:' + mess);
}
