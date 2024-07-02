import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/AddNewContact.css";



export const EditCurrentContact = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();



    const handleClick = () => {
		actions.fetchUpdateContact(id);
		actions.fetchGetContact();
		navigate("/"); // sirve como link para usar dentro de funciones y que te lleve a la página que quieras una vez se le llama
	}


    return(
        <div className="container">
			<h1 className="fw-bold text-center">Edit a contact</h1>
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
				<input type="text" className="form-control" placeholder="Enter Adress" value={adress} onChange={(e) => setAdress(e.target.value)} />
			</div>
			<button onClick={handleClick} className="btn btn-primary w-100">Save changes</button>
			<Link to="/">or get back to contacts</Link>
		</div>
    );
}