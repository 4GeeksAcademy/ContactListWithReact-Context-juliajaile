import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

//{store.demo[params.theid].title}

export const DeleteContactModal = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		<div className="jumbotron">
			<h1 className="display-4">Are you sure?:</h1> 
			<hr className="my-4" />
			<p>If you delete this thing the entire world will go down!</p>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Oh, no!
				</span>
			</Link>
			<span onClick={actions.fetchDeleteContact(id)} className="btn btn-primary btn-lg" href="#" role="button">
					Yes, baby!
			</span>
		</div>
	);
};

Single.propTypes = {
	match: PropTypes.object
};
