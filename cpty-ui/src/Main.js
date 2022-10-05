import React from 'react';

import './main.css';
import character1 from '../src/media/3d/girl-with-bird.png';
import character2 from '../src/media/3d/black-girl-skipping.png';
import character3 from '../src/media/3d/girl-sitting.png';
import character4 from '../src/media/3d/man-hands.png';
import character5 from '../src/media/3d/boy-laptop.png';
import character6 from '../src/media/3d/boy-red-ball.png';
import character7 from '../src/media/3d/man-in-shorts.png';
import character8 from '../src/media/3d/girl-on-tree.png';

const Main = () => {
	return (
		<div className='main'>
			<button className='btn main--btn'> Join the Party </button>
			<div className='main--characters'>
				<img id='character1' src={character1} alt='' />

				<img id='character2' src={character2} alt='' />

				<img id='character3' src={character3} alt='' />

				<img id='character4' src={character4} alt='' />

				<img id='character5' src={character5} alt='' />

				<img id='character6' src={character6} alt='' />

				<img id='character7' src={character7} alt='' />

				<img id='character8' src={character8} alt='' />
			</div>
			<div className='line'></div>
		</div>
	);
};

export default Main;
