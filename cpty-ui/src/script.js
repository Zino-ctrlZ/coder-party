var characterList = [
	{ src: '../media/3d/girl-with-bird.png', id: 'character1' },
	{ src: '../media/3d/black-girl-skipping.png', id: 'character2' },
	{ src: '../media/3d/girl-sitting.png', id: 'character3' },
	{ src: '../media/3d/man-hands.png', id: 'character4' },
	{ src: '../media/3d/boy-laptop.png', id: 'character5' },
	{ src: '../media/3d/boy-red-ball.png', id: 'character6' },
	{ src: '../media/3d/man-in-shorts.png', id: 'character7' },
	{ src: '../media/3d/girl-on-tree.png', id: 'character8' },
];

console.log('script is running');
function addCharacter() {
	var characters = document.getElementById('main--characters');
	const BREAKPOINT = 770;
	if (window.innerWidth >= BREAKPOINT) {
		console.log(window.innerWidth);
		console.log(characters.children);
		if (characters.children.length <= 0) {
			for (let index = 0; index < characterList.length; index++) {
				var character = document.createElement('img');
				character.src = characterList[index].src;
				character.id = `${characterList[index].id}`;
				// character.setAttribute('id', );
				characters.appendChild(character);
			}
		}
	} else {
		if (characters.children.length >= 0) {
			while (characters.lastElementChild) {
				characters.removeChild(characters.lastElementChild);
			}
		}
		let randomIndex = Math.floor(Math.random() * characterList.length);
		var character = document.createElement('img');
		character.src = characterList[randomIndex].src;
		character.id = `${characterList[randomIndex].id}`;
		characters.appendChild(character);
	}
}

window.addEventListener('DOMContentLoaded', addCharacter);
