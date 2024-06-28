import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const AddNewContact = () => {
	const { store, actions } = useContext(Context);
	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");
	const [adress, setAdress] = useState("");
	const [email, setEmail] = useState("");

	
	return (
		<div className="container">
			<h1 className="fw-bold text-center">Add a new contact</h1>
              <div className="mb-3">
                  <label className="form-label">Full Name </label>
                  <input type="text" className="form-control" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)}/>
              </div>
			  <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
			  <div className="mb-3">
                  <label className="form-label">Phone</label>
                  <input type="tel" className="form-control" placeholder="Enter Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
              </div>
			  <div className="mb-3">
                  <label className="form-label">Adress</label>
                  <input type="number" className="form-control" placeholder="Enter Adress" value={adress} onChange={(e) => setAdress(e.target.value)}/>
              </div>
			  <Link to="/">
				<button onClick={actions.fetchPostContact(name, phone, email, adress)} className="btn btn-primary w-100">Save</button>
			  </Link>
			  <Link to="/">or get back to contacts</Link>
		</div>
	);
};
