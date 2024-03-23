// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// grandparent.addEventListener(
// 	'click',
// 	(e) => {
// 		console.log('Granparent 1');
// 	},
// 	{}
// );

// parent.addEventListener(
// 	'click',
// 	(e) => {
// 		console.log('Parent 1');
// 	},
// 	{
// 		once: true,
// 	}
// );

// child.addEventListener('click', (e) => {
// 	console.log('Child 1');
// });

const divs = document.querySelectorAll('div');

addGlobalEventListener('click', 'div', (e) => {
	console.log('hi');
});

function addGlobalEventListener(type, selector, callback) {
	document.addEventListener(type, (e) => {
		if (e.target.matches(selector)) callback(e);
	});
}

const newDiv = document.createElement('div');
newDiv.style.width = '200px';
newDiv.style.height = '200px';
newDiv.style.backgroundColor = 'purple';
document.body.append(newDiv);
