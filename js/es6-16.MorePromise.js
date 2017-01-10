// var promise = new Promise(function(resolve,reject){
//     // resolve();
//     reject();
// });

// promise.catch(function(){
//     // Something
//     console.log('ERRR');
// });

// console.log(promise);


// * Thenable liên tiếp

// var promise = new Promise(function(resolve,reject){
//     resolve();
// });
// promise.then(function(){
//     console.log(1);
// }).then(function(){
//     console.log(2);
// }).then(function(){
//     console.log(3);
// });


// // Trường hợp 1
// var promise = new Promise(function(resolve,reject){
//     reject();
// });

// promise.then(function(){
//     console.log(1); // reject không chạy vào đây
// }).then(function(){
//     console.log(2); // Đây là 1 Fulfilled nên nó sẽ chạy vào reject() ở dưới
// },function(){
//     console.log('ERROR'); // chạy vào đây
// }).then(function(){
//     console.log(3); // và chạy vào đây
// });

/* RETURN */
// 3
// ERROR
/* END RETURN */ 

// Trường hợp dùng catch()

// var promise = new Promise(function(resolve,reject){
//     reject();
// });

// promise.then(function(){ // then() số 1 nhận về promise reject() thì then() tiếp theo sẽ nhận về reject()
//     console.log(1);
// }).then(function(){ // then() số 2 nhận về promise reject() thì then() tiếp theo sẽ nhận về reject()
//     console.log(2); 
// }).then(function(){ // then() số 3 nhận về promise reject() thì then() tiếp theo sẽ nhận về reject()
//     console.log(3);
// }).catch(function(){
//     console.log('Error');
// });

/* RETURN */
// Error
/* END RETURN */


// TRƯỜNG HỢP QUAN TRỌNG NHẤT ĐỂ HIỂU VỀ then()

asyncPromise1()
.then(function(){
    return asyncPromise2();
})

.then(function(){
        return asyncPromise3();
    })
.catch(function(){
        return asyncRecovery1();
    })

.then(function(){
        return asyncPromise4();
    },function(){
        return asyncRecovery2();
    })
.catch(function(){
        console.log('Đừng lo lắng gì cả!');
    })

.then(function(){
    console.log('Mọi thứ đã xong');
});
