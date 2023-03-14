let inputs = document.getElementById('posts-input');
let container = document.getElementById('posts-container');

let storage = [];

function postBtn() {
  storage.push(inputs.value);
  inputs.value = '';
  render();
}

function render() {
  container.innerHTML = '';
  for (let i = 0; i < storage.length; i++) {
    let element = storage[i];
    let p = document.createElement('p');
    p.textContent = element;
    container.appendChild(p);
  }
}
