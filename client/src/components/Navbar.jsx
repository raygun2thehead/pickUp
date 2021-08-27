import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Navbar = () => {

	const [active, setActive] = useState('')
	useEffect(() => {
		let currentURL = window.location.href;
		if (currentURL.endsWith('/'))
			setActive('Home');
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
			<div className="nav">
				{active !== 'Home' &&
					<Link to="/">
						<div className="nav-item" onClick={() => setActive('Home')}>Home</div>
					</Link>
				}
				{active !== 'Map' ?
					<Link to="/map">
						<div className="nav-item" onClick={() => setActive('Map')}>Map</div>
					</Link> : null
				}
				{active !== 'PickUps' &&
					<Link to="/pickups">
						<div className="nav-item" onClick={() => setActive('PickUps')}>PickUps</div>
					</Link>
				}
			</div>
		</div>
	)
}

export default Navbar;