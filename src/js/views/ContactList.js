import React, { useContext, useEffect, useState } from "react";
import "../../styles/home.css";
import { FaLocationDot, FaPhone, FaEnvelope, FaPencil, FaTrash } from 'react-icons/fa6';
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";



export const ContactList = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [changed, setChanged] = useState(false);

	useEffect(() => {
		actions.fetchGetContact();
	}, [changed])

	const handleDeleteContact = (id) => {
		actions.fetchDeleteContact(id);
		setChanged(prev => !prev);
		navigate("/");

	}

	return (
		<div className="container">
			<div className="card">
				<div className="card-body mr-5">
					{store.contacts?.map((contact) => (
						<div className="d-flex flex-row" key={contact.id}>
							<div>
								<img src="https://avatars.githubusercontent.com/u/73072636?v=4" className="card-img rounded-circle" alt="contact picture" />
							</div>
							<ul className="list-group">
								<li className="contactListName">
									<h5 className="card-title mt-2">{contact.name}</h5>
								</li>
								<li className="contactList">
									<p className="card-text mt-1"> <FaLocationDot /> {contact.address}</p>
								</li>
								<li className="contactList">
									<p className="card-text mt-1"> <FaPhone />  {contact.phone}</p>
								</li>
								<li className="contactList">
									<p className="card-text mt-1"> <FaEnvelope /> {contact.email}</p>
								</li>
							</ul>
							<div className="float-right">
								<Link to="/AddNewContact">
									<button onClick={() => actions.handleEditContact(true, contact.id)} type="button" className="btn editPen">
										<FaPencil />
									</button>
								</Link>
								<button type="button" className="btn deleteTrash" data-bs-toggle="modal" data-bs-target="#exampleModal">
									<FaTrash />
								</button>
							</div>
							<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
								<div className="modal-dialog">
									<div className="modal-content">
										<div className="modal-header">
											<h5 className="display-4">Are you sure?</h5>
											<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
										</div>
										<div className="modal-body">
											<hr className="my-4" />
											<p>If you delete this thing the entire world will go down!</p>
										</div>
										<div className="modal-footer">
											<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Oh, no!</button>
											<button onClick={() => handleDeleteContact(contact.id)} type="button" className="btn btn-primary" data-bs-dismiss="modal">Yes, baby!</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	)
};
