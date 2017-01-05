// Kiểu dữ liệu tập hợp Set với các giá trị truyền vào tùy ý kèm theo tốc độ xử lý nhanh chóng.

// Chúng ta có bốn thao tác chính khi làm việc với set như sau:
//// Khởi tạo: let set = new Set();
//// Thêm phần tử: set.add(value);
//// Xóa phần tử: set.delete(value);
//// Kiểm tra tồn tại giá trị: set.has(value);
//// Đếm tổng số phần tử: set.size;
//// Xóa toàn bộ phần tử: set.clear();

//// **Đối với Set thì các giá trị không được trùng, 
//// vì vậy nếu bạn cố tình thêm vào hai giá trị giống nhau thì nó chỉ lưu một lần mà thôi.
///


var numbers = new Set([1,2,3,4]);

// Thêm phần tử
//// numbers.add(5,4,6,7,8); // chỉ có thể truyền vào duy nhất số 5
//// numbers.add([5,34,43,2,5,34]); // truyền vào 1 mảng mới


// Xóa 1 phần tử
// numbers.delete(3); // xóa phần tử số 3 trong Set


// Kiểm tra phần tử tồn tại trong Set
// console.log(numbers.has(1)); // true vì có 1 
// console.log(numbers.has(5)); // false vì ko có 5


// Đếm số phần tử trong Set
// console.log(numbers.size); // trả về 4 vì có 4 phần tử


// Xóa tất cả các phần tử
// numbers.clear();
// console.log(numbers); // trả về NULL vì rỗng do xóa hết


//// VÒNG LẶP VỚI SET
// for (number of numbers) {
// 	console.log(number);
// }
// return
// 1
// 2
// 3
// 4


//// CHUYỂN SET SANG ARRAY

// let arrNumbers = [...numbers]; // chuyển set về dạng array
// console.log(arrNumbers);

//// CHUYỂN ARRAY SANG SET
// let arrNumbers = [1,2,3,4,5,1,1,2,3];
// let setNumbers = new Set(arrNumbers);
//// LƯU Ý : khi chuyển từ array sang set thì nếu có 2 phần tử trùng giá trị thì sẽ chỉ còn 1 phần tử
// console.log(setNumbers); // trả về :  Set {1, 2, 3, 4, 5}

