const promise = new Promise(( resolve, reject ) => {
  setTimeout(() => {
    // resolve({
    //   name: 'data',
    //   age: 1
    // });
    reject('error');
  }, 1500);
});

console.log('before');

promise
  .then((data) => {
  console.log(data);
  })
  .catch((error) => {
    console.log('error:', error );
  });

console.log('after');