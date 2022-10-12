import React from 'react';
import './hero.css';
import regularLogo from '../src/media/3d/coder-party-755w.png';
import largeLogo from '../src/media/3d/coder-party-1025w.png';
import mobileLogo from '../src/media/3d/coder-party-311w.png';
const Hero = () => {
	const screen = window.innerWidth;
	let logo;
	if (screen > 1500) {
		logo = largeLogo;
	} else if (screen < 500) {
		logo = mobileLogo;
	} else {
		logo = regularLogo;
	}
	return (
		<div className='hero'>
			<div className='hero--img'>
				<img id='logo' src={logo} alt='coder party' />
			</div>
			<p className='hero--subtitle'>
				an environment dedicated to help young computer science majors make that
				next step in their developer journey
			</p>
		</div>
	);
};

export default Hero;
