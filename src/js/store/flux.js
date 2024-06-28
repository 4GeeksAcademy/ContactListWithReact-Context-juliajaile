

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			contacts: []
		},
		actions: {
			fetchPostAgenda: () => {
				fetch('https://playground.4geeks.com/contact/agendas/julia', {
					method: "POST",
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error))
			},
			fetchPostContact: (name, phone, email, adress) => {
				const newContact = {
					name: name,
					phone: phone,
					email: email,
					adress: adress
				}
				fetch('https://playground.4geeks.com/contact/agendas/julia/contacts', {
					method: "POST",
					body: JSON.stringify(newContact),
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
					})
					.catch(error => console.log(error))
			},
			fetchGetContact: () => {
				fetch('https://playground.4geeks.com/contact/agendas/julia/contacts', {
					method: "GET",
				})
					.then(response => response.json())
					.then(data => {
						console.log(data) // Esto imprimirá en la consola el objeto exacto recibido del servidor
						const store = getStore(); //guardar algo en mi variable "contacts" del store,
						setStore({ contacts: [...store.contacts, data] }); //para mantener actualizados los contactos y sumarle a la lista previa, un contacto nuevo
					})
					.catch(error => console.log(error))// Manejo de errores
			},
			fetchDeleteContact: (id) => {
				const deleteContact = {
					slug: "julia",
					contact_id: id
				}
				fetch(`https://playground.4geeks.com/contact/agendas/julia/contacts/${id}`, {
					method: "DELETE",
					body: JSON.stringify(deleteContact),
					headers: {
						"Content-type": "application/json"
					}
				})
					.then(response => response.json())
					.then(data => {
						console.log(data);
						fetchGetContact();
					})
					.catch(error => console.log(error))// Manejo de errores)
			},

		}

	};
}

export default getState;
