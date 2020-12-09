import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

	const [active, setActive] = useState('')
	useEffect (() => {
		let currentURL = window.location.href;
		if (currentURL.endsWith('/'))
		setActive('About');
		else if (currentURL.endsWith('/map'))
		setActive('Map');
		else if (currentURL.endsWith('/pickups'))
		setActive('PickUps');
	}, [active])

	return (
		<div className="navbar">
			<div className="navbarActive">
				{active}
			</div>
			<div className="navbarItems">
				{active !== 'About' &&
					<Link to="/">
						<div className="navbarItem" onClick={() => setActive('About')}>About</div>
					</Link>
				}
				{active !== 'Map' ?
					<Link to="/map">
						<div className="navbarItem" onClick={() => setActive('Map')}>Map</div>
					</Link> :null
				}
				{active !== 'PickUps' &&
					<Link to="/pickups">
						<div className="navbarItem" onClick={() => setActive('PickUps')}>PickUps</div>
					</Link>
				}
			</div>
		</div>
	)
}

export default Navbar;