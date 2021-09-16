import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from '../utils/UserContext';

const Navbar = () => {
	const { loggedIn, logout } = useContext(UserContext);

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

				{loggedIn ? (
					<div className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to={"/profile"} className="nav-link">
								{loggedIn.username}
							</Link>
						</li>
						<li className="nav-item">
							<a href="/login" className="nav-link" onClick={logout}>
								LogOut
              </a>
						</li>
					</div>
				) : (
						<div className="navbar-nav ml-auto">
							<li className="nav-item">
								<Link to={"/login"} className="nav-link">
									Login
              </Link>
							</li>

							<li className="nav-item">
								<Link to={"/signup"} className="nav-link">
									Sign Up
              </Link>
							</li>
						</div>
					)}

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