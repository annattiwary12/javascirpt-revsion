const button = document.getElementById('saveButton');
const nameInput = document.getElementById('nameInput');
const username = document.getElementById('username');

button.addEventListener('click', () => {
  const value = nameInput.value.trim();
  if (value) {
    localStorage.setItem('name', value);
    username.innerText = value;
  }
});

window.addEventListener('load', () => {
  const value = localStorage.getItem('name');
  if (value) {
    username.innerText = value;
  }
});
