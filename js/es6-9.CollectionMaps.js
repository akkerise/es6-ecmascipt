// Map là một kiểu dữ liệu tương tự như Set, 
// tuy nhiên với Map thì có cấu trúc dạng key => value còn với Set thì chỉ có value.
// 
// Chúng ta có các thao tác chính với map như sau:

// Khởi tạo: let map = new Map()
// Thêm phần tử: map.set('Name', 'Nguyen Van Cuong');
// Xóa phần tử: map.delete("Name");
// Kiểm tra phần tử tồn tại: map.has('Name')
// Đếm tổng số phần tử: map.size
// Xóa toàn bộ phần tử: map.clear();
//// Đối với Map thì các key không được trùng, vì vậy nếu bạn truyền vào 2 key giống nhau thì nó chỉ lưu đè vào một key duy nhất.