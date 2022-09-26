import React from 'react';
import './main.css';
import team from './media/teamwork.png';
import logo from '../src/media/3d/coder-party.png';

const Hero = () => {
	return (
		<div className='hero'>
			<div className='hero--img'>
				<img src={logo} alt='three persons smiling and hanging out' />
			</div>
			<p className='hero--subtitle'>
				an environment dedicated to help young computer science majors make that
				next step in their developer journey
			</p>
		</div>
	);
};

export default Hero;
