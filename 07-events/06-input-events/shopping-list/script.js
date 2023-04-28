const itemInput = document.getElementById('item-input');
const priorityInput = document.getElementById('priority-input');
const checkbox = document.getElementById('checkbox');
const heading = document.querySelector('h1');

function onInput(e) {
  heading.textContent = e.target.value;
}

function onCheched(e) {
  const isChecked = e.target.checked;
  heading.textContent = isChecked ? 'Checked' : 'Unchecked';
}

function onFocus(e) {
  console.log('Input is focused');
  itemInput.style.outlineStyle = 'solid';
  itemInput.style.outlineWidth = '1px';
  itemInput.style.outlineColor = 'green';
  itemInput.style.borderRadius = '30px';
}

function onBlur(e) {
  console.log('Input is not focudes');
  itemInput.style.outlineStyle = 'none';
  itemInput.style.borderRadius = '10px';
}

itemInput.addEventListener('input', onInput);
priorityInput.addEventListener('change', onInput);
checkbox.addEventListener('input', onCheched);
itemInput.addEventListener('focus', onFocus);
itemInput.addEventListener('blur', onBlur);
