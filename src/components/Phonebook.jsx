import { nanoid } from "nanoid";
import { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";

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

        if (this.isDuplicate(contact)) {
            alert(`${contact.name} is already in contacts`)
            return
        };

        this.setState(({ contacts }) => {
            const newContact = { id: nanoid(), ...contact }
            return {
                contacts: [...contacts, newContact],
            }
        });
    };

    removeContact = ( id ) => {
        this.setState((({contacts}) => {
            const newContacts = contacts.filter((contact) => contact.id !== id);

            return {
                contacts: [...newContacts]
            };
        }))
    }

    changeFilter = (e) => {
        this.setState({
            filter: e.currentTarget.value,
        })
    };

    getNormalizedFilter = () => {
        return this.state.filter.toLowerCase();
    }

    isDuplicate = ({ name }) => {
        const { contacts } = this.state;
        const result = contacts.find(item => item.name === name);
        return result;
    }

    render() {
        const { contacts: contactsList, filter } = this.state;
        const normalizedFilter = this.getNormalizedFilter();
        const filteredContacts = contactsList.filter((contact) => contact.name.toLowerCase().includes(normalizedFilter));


        return (
            <div>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.addContact} />
                <h2>Contacts</h2>
                <Filter contactName={filter} onFilterChange={this.changeFilter} />
                {contactsList.length !== 0 && <ContactList contacts={filteredContacts} removeContact = {this.removeContact} />}
            </div>
        )
    }
};

export default Phonebook;