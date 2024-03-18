const response = await fetch('https://api.github.com/emojis');

if (!response.ok) {
  console.error('Failed to fetch data from the API');
}

const data = await response.json();
const container = document.getElementById('emoji-cards-container');
const template = document.getElementById('card-template');

for (const [name, url] of Object.entries(data)) {
  const clone = document.importNode(template.content, true);
  clone.querySelector('img').src = url;
  clone.querySelector('img').alt = name;
  clone.querySelector('div').textContent = name;
  container.appendChild(clone);
}
