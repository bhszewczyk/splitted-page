const leftSide = document.querySelector('.left');
const rightSide = document.querySelector('.right');

leftSide.addEventListener('mouseenter', (e) => {
	e.target.classList.add('expand');
	e.target.classList.remove('collapse');
	rightSide.classList.remove('expand');
	rightSide.classList.add('collapse');
});

// leftSide.addEventListener('mouseeout', (e) => {
// 	e.target.classList.remove('expand');
// 	rightSide.classList.remove('collapse');
// });

rightSide.addEventListener('mouseenter', (e) => {
	e.target.classList.add('expand');
	e.target.classList.remove('collapse');
	leftSide.classList.remove('expand');
	leftSide.classList.add('collapse');
});
