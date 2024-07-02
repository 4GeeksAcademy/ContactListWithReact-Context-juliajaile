import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<nav className="navbar navbar-light bg-light mb-3">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Contact List</span>
				</Link>
				<div className="ml-auto">
					<Link to="/AddNewContact">
						<button className="btn btn-primary" onClick={() => actions.handleEditContact(false)}>Add new contact</button>
					</Link>
				</div>
			</nav>
		</div>
	);
};
