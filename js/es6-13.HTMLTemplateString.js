// Template String sẽ thay thế cách nối chuỗi thông thường.
// Template String được bao bọc bởi cặp dấu ``.
let website = 'freetuts.net';
let temp = `Chào mừng bạn đến với ${website}`;
console.log(temp);

// Lặp đơn giản
var domains = [
    'fetch',
    'google.com',
    'facebook'
];

domains.map(function(domain, key) {
    console.log(`<h1>${domain}</h1>`);
});

// <h1>fetch</h1>
// <h1>google.com</h1>
// <h1>facebook</h1>