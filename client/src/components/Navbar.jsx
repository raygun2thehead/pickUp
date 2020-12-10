import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import AuthService from "../services/auth.service";

const Navbar = () => {

	const [currentUser, setCurrentUser] = useState(undefined);
	useEffect(() => {
		const user = AuthService.getCurrentUser();

		if (user) {
			setCurrentUser(user);
		}
	}, []);

	const logOut = () => {
		AuthService.logout();
	};

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
			<div className="navbarItems">
				{currentUser && (
					<li className="nav-item">
						<Link to={"/user"} className="nav-link">
							User
              </Link>
					</li>
				)}


				{currentUser ? (
					<div className="navbar-nav ml-auto">
						<li className="nav-item">
							<Link to={"/profile"} className="nav-link">
								{currentUser.username}
							</Link>
						</li>
						<li className="nav-item">
							<a href="/login" className="nav-link" onClick={logOut}>
								LogOut
              </a>
						</li>
					</div>
				) : (
						<div className="navbar-nav ml-auto">
							<Link to="/login">
								<div className="nav-item" onClick={() => setActive('Login')}>Login</div>
							</Link>
							<Link to="/register">
								<div className="nav-item" onClick={() => setActive('Signup')}>Signup</div>
							</Link>
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