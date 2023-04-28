const clearBtn = document.querySelector('#clear');
const listClear = document.querySelectorAll('#item-list');

function onClear() {
  // alert('Clear Items');
  const itemList = document.querySelector('ul');
  const items = itemList.querySelectorAll('li');
  // itemList.innerHTML = '';
  // items.forEach((item) => item.remove());

  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
}

//* function removeClearButton() {
//   document.querySelector('ul').remove();
// }

// JavaScript Event Listener
// clearBtn.onclick = function () {
//   alert('Clear Items');
// };

// clearBtn.onclick = function () {
//   console.log('Clear Items');
// };

//* addEventListener()
// clearBtn.addEventListener('click', () => alert('Clear Items'));
// clearBtn.addEventListener('click', () => console.log('Clear Items'));
// clearBtn.addEventListener('click', onClear);
clearBtn.addEventListener('click', onClear);

// setTimeout(() => clearBtn.removeEventListener('click', onClear), 2000);
// setTimeout(() => clearBtn.click(), 2000);
