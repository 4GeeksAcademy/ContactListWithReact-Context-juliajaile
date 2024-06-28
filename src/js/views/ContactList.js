import React, { useContext } from "react";
import "../../styles/home.css";
import { FaLocationDot, FaPhone, FaEnvelope, FaPencil, FaTrash } from 'react-icons/fa6';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect = (() => {
		fetchPostAgenda();
		fetchGetContact();
	}),

	return (
		<div className="container">
			<div className="card d-flex flex-row">
				<img src="https://avatars.githubusercontent.com/u/73072636?v=4" className="card-img rounded-circle" alt="contact picture" />
				<div className="card-body mr-5">
						{store.contacts.map((contact, index) => (
					    <ul className="list-group">
						<li key={index}>
							<h5 className="card-title mt-2">{contact.name}</h5>
						</li>
						<li key={index}>
							<p className="card-text mt-1"> <FaLocationDot /> {contact.adress}</p>
						</li>
						<li key={index}>
							<p className="card-text mt-1"> <FaPhone />  {contact.phone}</p>
						</li>
						<li key={index}>
							<p className="card-text mt-1"> <FaEnvelope /> {contact.email}</p>
						</li>
						</ul>
				))}
				</div>
				<div className="d-flex flex-row me-5 mt-3">
					<Link to="/">
						<p className="me-4"> <FaPencil /></p>
					</Link>
					<Link to="/DeleteContactModal">
						<p> <FaTrash /></p>
					</Link>
				</div>
			</div>
		</div>
	)
};
