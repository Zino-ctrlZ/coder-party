var characterList = [
	{ src: '../media/3d/girl-with-bird.pn ', id: 'character1' },
	{ src: '../media/3d/black-girl-skipping.png', id: 'character2' },
	{ src: '../media/3d/girl-sitting.png', id: 'character3' },
	{ src: '../media/3d/man-hands.png', id: 'character4' },
	{ src: '../media/3d/boy-laptop.png', id: 'character5' },
	{ src: '../media/3d/boy-red-ball.png', id: 'character6' },
	{ src: '../media/3d/man-in-shorts.png', id: 'character7' },
	{ src: '../media/3d/girl-on-tree.png', id: 'character8' },
];

function addCharacter() {
	var characters = document.getElementsByClassName('main--characters');
	const BREAKPOINT = 1152;
	if (window.innerWidth >= BREAKPOINT) {
		for (let index = 0; index < characterList.length; index++) {
			var character = document.createElement('img');
			character.src = characterList[index].src;
			character.setAttribute('id', `${characterList[index].id}`);
			characters.appendChild(character);
		}
	}
}

window.addEventListener('resize', addCharacter);
