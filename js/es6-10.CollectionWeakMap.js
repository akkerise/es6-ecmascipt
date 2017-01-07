// WeakMap là một loại kiểu dữ liệu giống như Map vậy, nghĩa là sẽ tồn tại hai tham số key => value cho mỗi phần tử. Tuy nhiên với WeakMap thì key truyền vào phải là một biến và biến này phải là một Object (class, function, object), con với Map thì bạn có thể thiết lập key là chuỗi, number, object đều được.


// Khởi tạo
var weak = new WeakMap();

// Danh sách key
var key1 = {};
var key2 = {};

// Thêm phần tử
weak.set(key1,'Giá trị 01');
weak.set(key2,'Giá trị 02');

// Lấy giá trị
console.log(weak.get(key1));
console.log(weak.get(key2));

// Kiểm tra tồn tại
var other_key = {};
console.log(weak.has(key1));
console.log(weak.has(key2));
console.log(weak.has(other_key));

// Xóa phần tử

