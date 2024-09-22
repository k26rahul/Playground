const fetchData = () => {
  console.log('😊 i promise i will give you data');

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

  return promise;
};

// fetchData()
//   .then(message => {
//     console.log(`✅ success: ${message}`);
//   })
//   .catch(error => {
//     console.log(`❌ error: ${error}`);
//   });

// 👇 chain multiple .then() calls to perform a series of asynchronous operations
// fetchData()
//   .then(message => {
//     console.log(`👏 thank you for fulfilling your promise`);
//     return 'mission accomplished';
//   })
//   .then(message => {
//     console.log(`✅ success: ${message}`);
//   })
//   .catch(error => {
//     console.log(`✅ success: ${message}`);
//   });

// 👇 using async and await
const fetchDataAsync = async () => {
  try {
    const data = await fetchData();
    console.log(`✅ success: ${data}`);
  } catch (error) {
    console.log(`✅ success: ${message}`);
  }
};

fetchDataAsync();
