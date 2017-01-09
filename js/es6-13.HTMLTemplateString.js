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


// Lặp phức tạp
var domain1 = [
    {
        domi: 'face',
        val: 'fuck'
    },
    {
        domi: 'fast',
        val: 'fetch'    
    }
];

domain1.map(function(domain,key){
    var tmpl = `
        <div>
            <h1>${domain.domi}</h1>
            <h2>${domain.val}</h2>
        </div>
    `;
    console.log(tmpl);
});