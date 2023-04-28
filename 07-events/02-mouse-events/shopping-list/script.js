const logo = document.querySelector('img');

const onClick = () => console.log('click event');
const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== 'purple') {
    document.body.style.backgroundColor = 'purple';
    document.body.style.color = 'white';
  } else {
    document.body.style.backgroundColor = 'white';
    document.body.style.color = 'black';
  }
};

const onRightClick = () => console.log('right click event');
const onMouseDown = () => console.log('mouse down event');
const onMouseUp = () => console.log('mouse up event');
const onMouseWheel = () => console.log('mouse wheel event');
const onMouseOver = () => console.log('mouse over event');
const onMouseOut = () => console.log('mouse out event');
const onDragStart = () => console.log('drag start event');
const onDrag = () => console.log('drag event');
const onDragEnd = () => console.log('drag end event');

// Event Listeners
logo.addEventListener('click', onClick); // tek tıklama
logo.addEventListener('dblclick', onDoubleClick); // çift tıklama
logo.addEventListener('contextmenu', onRightClick); // sağ tıklama
logo.addEventListener('mousedown', onMouseDown); // mouse basılı tutunca
logo.addEventListener('mouseup', onMouseUp); // mouse basıp bırakınca
logo.addEventListener('wheel', onMouseWheel); // üstünde aşağı yukarı kaydırınca
logo.addEventListener('mouseover', onMouseOver); // üstüne gelince
logo.addEventListener('mouseout', onMouseOut); // üstüne gelip çıkınca
logo.addEventListener('dragstart', onDragStart); // tıklayıp basılı tutup taşımaya, sürükleme
logo.addEventListener('drag', onDrag); // sürüklediğinde ne kadar hızlı hareket edersen o kadar hızlı tetiklenir
logo.addEventListener('dragend', onDragEnd); // sürükleyip bıraktığında
