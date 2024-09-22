import fetch from 'node-fetch';

console.log('start process...');

// task 1: fetch xkcd data
fetch('https://xkcd.com/info.0.json')
  .then(response => response.json())
  .then(data => {
    console.log('task 1 complete: fetched xkcd comic');
    console.log(data.title);

    // task 2: fetch github user data
    fetch('https://api.github.com/users/k26rahul')
      .then(response => response.json())
      .then(data => {
        console.log('task 2 complete: fetched github user');
        console.log(`github user: ${data.login}`);

        // task 3: fetch a todo from jsonplaceholder
        fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then(data => {
            console.log('task 3 complete: fetched jsonplaceholder todo');
            console.log(`todo: ${data.title}`);

            // task 4: fetch users from jsonplaceholder and print first user
            fetch('https://jsonplaceholder.typicode.com/users')
              .then(response => response.json())
              .then(data => {
                console.log('task 4 complete: fetched jsonplaceholder users');
                console.log('first user in the list:');
                console.log(`name: ${data[0].name}`);
                console.log(`email: ${data[0].email}`);
                console.log('all tasks complete!');
              })
              .catch(error => console.error('error in task 4:', error));
          })
          .catch(error => console.error('error in task 3:', error));
      })
      .catch(error => console.error('error in task 2:', error));
  })
  .catch(error => console.error('error in task 1:', error));
