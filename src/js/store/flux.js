

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: [],
			editContact: false
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
					.then(response => response.json())
					.then(data => {
						console.log(data);
						fetchGetContact();
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
			}

		}

	};
}

export default getState;
