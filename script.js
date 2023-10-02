const box = document.querySelector('.box');
const range = document.querySelector('#border-radius');

range.addEventListener('input', ({ target: { value } }) => {
	box.style.setProperty('--border-radius', value + 'px');
});