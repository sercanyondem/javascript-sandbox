// const children = document.querySelector('#insert').children;

// const onKey = (e) => {
//   console.log(e.key);
//   console.log(e.keyCode);
//   console.log(e.code);
//   children[0].innerText = e.key;
//   children[1].innerText = e.keyCode;
//   children[2].innerText = e.code;
// };
// document.body.addEventListener('keydown', onKey);

//* Method 1

// window.addEventListener('keydown', (e) => {
//   const insert = document.getElementById('insert');

//   insert.innerHTML = `
//   <div class="key">
//     ${e.key === ' ' ? 'Space' : e.key}
//     <small>e.key</small>
//   </div>

//   <div class="key">
//     ${e.keyCode}
//     <small>e.keyCode</small>
//   </div>

//   <div class="key">
//     ${e.code}
//     <small>event.code</small>
//   </div>`;
// });

//* Method 2

function showKeyCodes(e) {
  const insert = document.getElementById('insert');
  insert.innerHTML = '';

  const keyCodes = {
    'e.keyK': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code,
  };

  for (let key in keyCodes) {
    const div = document.createElement('div');
    div.className = 'key';
    const small = document.createElement('small');

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCodes[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }
}

window.addEventListener('keydown', showKeyCodes);
