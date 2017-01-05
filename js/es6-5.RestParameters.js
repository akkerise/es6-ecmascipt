// Tham số còn lại
function restParameters(domain,sub,...other){
	console.log('Domain' + domain);
	console.log('Sub' + sub);
	console.log('*Other' + other);
}

restParameters('freetuts.net','Thanh','fuck','waiter','abc');

// Truyền vào vừa đủ thì sẽ có giá trị là một mảng rỗng
restParameters('fancy.com','Everywhere');

