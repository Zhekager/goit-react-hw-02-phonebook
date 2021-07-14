import React, { Component } from 'react';
import Container from './components/Container';
import ContactForm from './components/FormContacts';
import ContactList from './components/ListContacts';
import Filter from './components/Filter';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    handleAddContact = ({ name, number }) => {
        const contact = {
            id: uuidv4(),
            name,
            number,
        };

        const { contacts } = this.state;

        if (
            contacts.find(
                contact => contact.name.toLowerCase() === name.toLowerCase(),
            )
        ) {
            alert(`${name} is already in contacts.`);
        } else if (contacts.find(contact => contact.number === number)) {
            alert(`${number} is already in contacts.`);
        } else if (name.trim() === '' || number.trim() === '') {
            alert("Enter the contact's name and number phone!");
        } else if (!/\d{3}[-]\d{2}[-]\d{2}/g.test(number)) {
            alert('Enter the correct number phone!');
        } else {
            this.setState(({ contacts }) => ({
                contacts: [...contacts, contact],
            }));
        }
    };

    handleDeleteContact = id =>
        this.setState(({ contacts }) => ({
            contacts: contacts.filter(contact => contact.id !== id),
        }));

    changeFilter = event => {
        this.setState({ filter: event.currentTarget.value });
    };

    getVisibleContacts = () => {
        const { contacts, filter } = this.state;
        const normalizedFilter = filter.toLowerCase();

        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(normalizedFilter),
        );
    };

    render() {
        const { filter } = this.state;
        const visibleContacts = this.getVisibleContacts();

        return (
            <Container>
                <h1>Phonebook</h1>
                <ContactForm onSubmit={this.handleAddContact} />
                <h2>Contacts</h2>
                <Filter value={filter} onChange={this.changeFilter} />
                <ContactList
                    contacts={visibleContacts}
                    onDelete={this.handleDeleteContact}
                />
            </Container>
        );
    }
}

export default App;
