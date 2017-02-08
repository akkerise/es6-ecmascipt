// Tham số còn lại hay còn gọi là tham số cuối cùng
function restParameters(domain,sub,...other){
	console.log('Domain' + domain);
	console.log('Sub' + sub);
	console.log('*Other' + other);
}
// Tham số other sẽ có giá trị là 'fuck' , ' waiter' , 'abc'
restParameters('freetuts.net','Thanh','fuck','waiter','abc');

// Truyền vào vừa đủ thì tham số other sẽ có giá trị là một mảng rỗng
restParameters('fancy.com','Everywhere');

