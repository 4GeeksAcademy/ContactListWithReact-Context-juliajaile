import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/AddNewContact.css";

export const AddNewContact = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [address, setAddress] = useState("");
	const [email, setEmail] = useState("");
	const navigate = useNavigate();


	const handleClick = () => {
		if (store.editContact === false) {
			actions.fetchPostContact(name, phone, email, address);
			actions.fetchGetContact();
			navigate("/"); // sirve como link para usar dentro de funciones y que te lleve a la página que quieras una vez se le llama
		} else {
			actions.fetchUpdateContact(name, phone, email, address);
			actions.fetchGetContact();
			navigate("/");
		}

	}



	return (
		<div className="container">
			<h1 className="fw-bold text-center">{store.editContact ? "Edit contact" : "Add a new contact"}</h1>
			<div className="mb-3">
				<label className="form-label">Full Name </label>
				<input type="text" className="form-control" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
			</div>
			<div className="mb-3">
				<label className="form-label">Email</label>
				<input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
			</div>
			<div className="mb-3">
				<label className="form-label">Phone</label>
				<input type="number" className="form-control" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
			</div>
			<div className="mb-3">
				<label className="form-label">Adress</label>
				<input type="text" className="form-control" placeholder="Enter Adress" value={address} onChange={(e) => setAddress(e.target.value)} />
			</div>
			<button onClick={handleClick} className="btn btn-primary w-100">{store.editContact ? "Save new changes" : "Save new contact"}</button>
			<Link to="/">or get back to contacts</Link>
		</div>
	);
};
