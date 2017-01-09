// // ĐOẠN 1
// var message = 'Website freetuts.net thật tuyệt';
 
// // ĐOẠN 2
// $.ajax({
//     url : "some-url",
//     data : {},
//     success : function(result){
//         message = 'Giá trị đã được thay đổi';
//     }
// });
 
// // ĐOẠN 3
// alert(message); // kết quả là Website freetuts.net thật tuyệt ? What the Fuck?
// ĐOẠN 1
var message = 'Website freetuts.net thật tuyệt';
 
// ĐOẠN 2
$.ajax({
    url : "http://localhost/es6-ecmascipt/index.html",
    data : {}
    success : function(result){
        message = 'Giá trị đã được thay đổi';
    }
});
 
// ĐOẠN 3
setTimeout(function(){
    alert(message); 
}, 10000);
 
//// Giá trị đã được thay đổi