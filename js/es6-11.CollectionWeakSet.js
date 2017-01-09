// WeakSet có thể được coi là một phiên bản tương tự như Set, tuy nhiên với WeakSet thì dữ liệu truyền vào luôn phải là một đối tượng (object, class, function) và bạn phải tạo một giá trị (key) trước khi lưu vào, điều này khác hoàn toàn với Set là Set có thể lưu trữ mọi dữ liệu kể cả number và string.

var weak = new WeakSet();

// Danh sách key
var key1 = {
    name: 'thehalfheart'
};
var key2 = {
    website: 'freetuts.net'
};

// Thêm phần tử
weak.add(key1);
weak.add(key2);


// Kiểm tra tồn tại
console.log(weak.has(key1));
console.log(weak.has(key2));
