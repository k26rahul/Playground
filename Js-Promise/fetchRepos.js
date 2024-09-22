import fetch from 'node-fetch';

const username = 'k26rahul';
const url = `https://api.github.com/users/${username}/repos`;

const fetchRepos = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    const repos = await response.json();

    console.log(`total repositories for ${username}: ${repos.length}`);

    repos.forEach((repo, index) => {
      console.log(`${index + 1}. ${repo.name}`);
    });
  } catch (error) {
    console.error('error fetching repositories:', error);
  }
};

fetchRepos();
