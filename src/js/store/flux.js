

const getState = ({ getStore, setStore, getActions }) => {
	return {
		store: {
			contacts: [],
			editContact: false,
			pictureRandom: [],
			selectedContact: {},
		},
		actions: {
			fetchPostAgenda: () => { //create agenda
				fetch('https://playground.4geeks.com/contact/agendas/julia', {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error))
			},
			fetchPostContact: (name, phone, email, address) => { //create agenda contact
				const newContact = {
					name,
					phone,
					email,
					address,
				}
				fetch('https://playground.4geeks.com/contact/agendas/julia/contacts', {
					method: "POST",
					body: JSON.stringify(newContact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error))
			},
			fetchGetContact: () => {  //get agenda contacts
				fetch('https://playground.4geeks.com/contact/agendas/julia/contacts', {
					method: "GET",
				})
					.then(response => response.json())
					.then(data => {
						console.log(data) // Esto imprimirá en la consola el objeto exacto recibido del servidor
						const store = getStore(); //guardar algo en mi variable "contacts" del store,
						setStore({ contacts: data.contacts });
					})
					.catch(error => console.log(error))// Manejo de errores
			},
			fetchDeleteContact: (id) => { //delete agenda contact
				const deleteContact = {
					slug: "julia",
					contact_id: id
				}
				fetch(`https://playground.4geeks.com/contact/agendas/julia/contacts/${id}`, {
					method: "DELETE",
					body: JSON.stringify(deleteContact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => {
						console.log(response);
						if (response.ok) {
							getActions().fetchGetContact();
						};
					})

					.catch(error => console.log(error))// Manejo de errores)
			},
			fetchUpdateContact: (name, phone, email, address) => { //update agenda contact
				const updateContact = {
					name,
					phone,
					email,
					address,
				}
				fetch(`https://playground.4geeks.com/contact/agendas/julia/contacts/${getStore().contactId}`, {
					method: "PUT",
					body: JSON.stringify(updateContact),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						getActions().fetchGetContact();
					})
					.catch(error => console.log(error))
			},
			handleEditContact: (value, id) => {
				setStore({ editContact: value, contactId: id })
			},
			selectedContact: (name, phone, email, address) => {
				setStore({ selectedContact: { name: name, phone: phone, email: email, address: address } })

			},
			fetchGetPictureRandom: async () => {  //obtener imagen random cada vez que actualizo página
				try {
					const response = await fetch("https://randomuser.me/api/?results=100");
					const data = await response.json();
					const userRandom = data.results;
					setStore({ pictureRandom: userRandom });


				} catch (error) {
					console.error("Error fetching random picture:", error);

				}

			},
		}
	};
}

export default getState;
