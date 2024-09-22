// Promise: eventual completion (or failure) of an asynchronous operation and its resulting value.

const promise = new Promise((resolve, reject) => {
  console.log('🔯 fetching data');

  setTimeout(() => {
    const success = true;

    if (success) {
      resolve('data [BucketName: S57] fetched successfully!');
    } else {
      reject('failed to fetch data.');
    }
  }, 500);
});

// 👇 handle the success or failure of a Promise using .then() and .catch():
promise
  .then(message => {
    console.log(`✅ success: ${message}`);
  })
  .catch(error => {
    console.log(`❌ error: ${error}`);
  });

console.log('⌛ waiting for promise');
