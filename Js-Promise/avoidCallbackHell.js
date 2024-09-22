import fetch from 'node-fetch';

console.log('start process...');

// function to fetch xkcd data
const fetchXKCD = () => {
  return fetch('https://xkcd.com/info.0.json')
    .then(response => response.json())
    .then(data => {
      console.log('task 1 complete: fetched xkcd comic');
      console.log(data.title);
      return data;
    });
};

// function to fetch github user data
const fetchGitHubUser = () => {
  return fetch('https://api.github.com/users/k26rahul')
    .then(response => response.json())
    .then(data => {
      console.log('task 2 complete: fetched github user');
      console.log(`github user: ${data.login}`);
      return data;
    });
};

// function to fetch a todo from jsonplaceholder
const fetchTodo = () => {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => {
      console.log('task 3 complete: fetched jsonplaceholder todo');
      console.log(`todo: ${data.title}`);
      return data;
    });
};

// function to fetch users from jsonplaceholder and print the first user
const fetchUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      console.log('task 4 complete: fetched jsonplaceholder users');
      console.log('first user in the list:');
      console.log(`name: ${data[0].name}`);
      console.log(`email: ${data[0].email}`);
      return data;
    });
};

// execute the tasks in sequence using promises
fetchXKCD()
  .then(fetchGitHubUser)
  .then(fetchTodo)
  .then(fetchUsers)
  .then(() => {
    console.log('all tasks complete!');
  })
  .catch(error => {
    console.error('error during the process:', error);
  });
