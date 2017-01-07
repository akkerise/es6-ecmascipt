// Map là một kiểu dữ liệu tương tự như Set,
// tuy nhiên với Map thì có cấu trúc dạng key => value còn với Set thì chỉ có value.
//
// Chúng ta có các thao tác chính với map như sau:

// Khởi tạo: let map = new Map()
// Thêm phần tử: map.set('Name', 'Nguyen Van Cuong');
// Lấy phần tử dựa theo key L map.get('key_name');
// Xóa phần tử: map.delete("Name");
// Kiểm tra phần tử tồn tại: map.has('Name')
// Đếm tổng số phần tử: map.size
// Xóa toàn bộ phần tử: map.clear();
//// Đối với Map thì các key không được trùng, vì vậy nếu bạn truyền vào 2 key giống nhau thì nó chỉ lưu đè vào một key duy nhất.

let map = new Map([
	['Name', 'Nguyen Anh Thanh'],
	['Address' , 'Vinh Phuc'],
	['Website' , 'akkerise.com']
	]);

// Thêm phần tử vào Map
map.set('SDT' ,'08888888888');
// Xóa phần tử trong Map
map.delete('Name');
// Kiểm tra phần tử trong Map
console.log(map.has('Name')); // false vì đã xóa ở trên
// Đếm tổng số phần tử trong mảng
console.log(map.size); // 3 vì vừa thêm vừa xóa 1 phần tử

/** Key bạn có thể là một string, number, const hay thậm chí là một NaN. **/

// key là const
const KEY1 = {};
map.set(KEY1,'Nguyễn Vạn Lông');
console.log(map.get(KEY1));

const KEY2 = {};
map.set(KEY2,'Fuck');
console.log(map.get(KEY2));

// key là NaN
map.set(NaN,'Not error');
console.log(map.get(NaN));


//// CÁC HÀM HỖ TRỢ CHO Map

// hàm keys()

for (var key of map.keys()) {
	console.log(key); // xuất ra từng key trong map
}

// hàm values()

for (var value of map.values()) {
	console.log(value); // xuất ra từng value trong map
}

// hàm entries()
// hàm lồng này khá khó hiểu
for (var entry of map.entries()) {
	console.log(entry[0] + ' - ' + entry[1]);
}


//// Lặp qua các phần tử trong Map với for()

let map1 = new Map([
		['name' , 'Nguyễn Văn Anh Danh'],
		['domain' , 'abcd.com']
	]);

for(var [key , value] of map1){
	console.log(key + ' - ' + value)
}
// Kết quả
// name - Nguyễn Văn Anh Danh
// domain - abcd.com


//// Sử dụng hàm forEach()

map1.forEach((value,key) => {
	console.log(key + ' - ' + value);
});
// Kết quả
// name - Nguyễn Văn Anh Danh
// domain - abcd.com


////// Mapping & Filtering

// Hàm map()
let map2 = new Map().set(1,'a').set(2,'b').set(3,'c').set(4,'d').set(5,'e');
// chuyển đổi
let map3 = new Map(
		[...map2].map(
				([key,value]) => [key + value , key + '-' + value]
			)
	);
console.log(map3);

/* Lưu ý hàm map là khá khó hiểu cần đọc lại kỹ*/

// Hàm filter() hàm lọc phần tử thỏa mãn điều kiện

let map4 = new Map(
		[...map2].filter(
			([key,value]) => value == 'a' 		// Map {1 => "a"}
			// ([key,value]) => key % 2 == 0 	// Map {2 => "b", 4 => "d"}
			)
	);
console.log(map4);