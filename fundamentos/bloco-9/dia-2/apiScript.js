// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => append(data));
};

const append = (obj) => {
  const {joke} = obj;
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerHTML = joke;
}
window.onload = () => fetchJoke();