import React from 'react';
import './header.css';

const Header = () => {
	return (
		<header>
			<div className='container--header'>
				<nav>
					<ul>
						<li>
							<a className='btn--nav from-top' href='/'>
								Home
							</a>
						</li>
						<li>
							<a className='btn--nav from-top' href='/'>
								Community
							</a>
						</li>
						<li>
							<a className='btn--nav from-top' href='/'>
								About Us
							</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className='line'></div>
		</header>
	);
};

export default Header;
