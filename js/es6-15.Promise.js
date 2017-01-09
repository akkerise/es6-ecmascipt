var promise = new Promise(function(resolve,reject){
    // resolve('Success !');
    reject('Error !');
});
promise.then(
    function(message){
        console.log(message);
    },
    function(message){
        console.log('Callback error');
        console.log(message);
    }
).catch(function(message){
        console.log('Catch!');
        console.log(message);
    });