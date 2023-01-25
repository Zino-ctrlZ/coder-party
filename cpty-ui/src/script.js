//functionality for copy link input field
document.querySelectorAll('.copy-link').forEach((copyLinkContainer) => {
	const inputField = copyLinkContainer.querySelector('.copy-link-input');
	const copyButton = copyLinkContainer.querySelector('.copy-link-btn');
	const copyButtonIcon = copyLinkContainer.querySelector('.copy-link-icon');
	const checkMark = document.createElement('span');
	checkMark.classList.add('material-symbols-outlined');
	checkMark.innerHTML = 'done';

	inputField.addEventListener('focus', () => inputField.select());
	copyButton.addEventListener('click', () => {
		const text = inputField.value;
		navigator.clipboard.writeText(text);
		//change icon
		copyButton.removeChild(copyButtonIcon);
		copyButton.appendChild(checkMark);
		setTimeout(() => {
			copyButton.removeChild(checkMark);
			copyButton.appendChild(copyButtonIcon);
		}, 300);
	});
});

var characterList = [
	{ src: '../media/3d/girl-with-bird.png ', id: 'character' },
	{ src: '../media/3d/black-girl-skipping.png', id: 'character' },
	{ src: '../media/3d/girl-sitting.png', id: 'character' },
	{ src: '../media/3d/man-hands.png', id: 'character' },
	{ src: '../media/3d/boy-laptop.png', id: 'character' },
	{ src: '../media/3d/boy-red-ball.png', id: 'character' },
	{ src: '../media/3d/man-in-shorts.png', id: 'character' },
	{ src: '../media/3d/girl-on-tree.png', id: 'character' },
];

var mainFooterImg = { src: '../media/3d/footer.png', id: 'footer-img' };

console.log('script running');
function addCharacter() {
	var characters = document.getElementById('main--characters');
	const BREAKPOINT = 770;
	if (window.innerWidth <= BREAKPOINT) {
		if (characters.children.length >= 0) {
			while (characters.lastElementChild) {
				characters.removeChild(characters.lastElementChild);
			}
		}
		let randomIndex = Math.floor(Math.random() * characterList.length);
		var character = document.createElement('img');
		character.src = characterList[randomIndex].src;
		character.id = characterList[randomIndex].id;
		characters.appendChild(character);
	} else {
		if (characters.children.length === 1) {
		}
	}
}

window.addEventListener('resize', addCharacter);
