import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import UserContext from '../utils/UserContext';
import { Container, Row, Col } from 'react-bootstrap'

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
		<Container fluid>
			<Row className="navbar">
				<Col className="userbar">
					{loggedIn ? (
						<div className="userNav">
							<li className="nav-item">
								<Link to={"/profile"} className="nav-item">
									{loggedIn.username}
								</Link>
							</li>
							<li className="nav-item">
								<a href="/login" className="nav-item" onClick={logout}>
									LogOut
              </a>
							</li>
						</div>
					) : (
						<div className="UserNav">
							<Link to="/login"
								className="nav-item">
								Login
              </Link>
							<Link to="/signup" className="nav-item">
								Sign Up
              </Link>
						</div>
					)}
				</Col>
			</Row>

			<Row className='navbar'>
				<Col className="navbarActive">
					{active}
				</Col>
				<Col className="nav-item">
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
				</Col>
			</Row>
		</Container>
	)
}

export default Navbar;