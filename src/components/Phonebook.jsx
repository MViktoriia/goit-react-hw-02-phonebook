import { nanoid } from "nanoid";
import { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";

const INITIAL_STATE = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
}

class Phonebook extends Component {
    state = {
        ...INITIAL_STATE
    };

    addContact = (contact) => {
        this.setState((prevState) => {
            const newContact = { id: nanoid(), ...contact }
            return {
                contacts: [...prevState.contacts, newContact],
            }
        });
    };



    render() {
        const contactsList = this.state.contacts;

        return (
            <div>
                <h2>Phonebook</h2>
                <ContactForm onSubmit={this.addContact} />
                <h2>Contacts</h2>    
                {contactsList.length !== 0 && <ContactList contacts={contactsList} />}
            </div>
        )
    }
};

export default Phonebook;