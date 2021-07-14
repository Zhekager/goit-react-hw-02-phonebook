import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './FormContacts.module.css';

class FormContacts extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);

        this.resetForm();
    };

    resetForm = () => this.setState({ name: '', number: '' });

    render() {
        const { name, number } = this.state;
        return (
            <form className={styles.Form} onSubmit={this.handleSubmit}>
                <label className={styles.Label}>
                    Name
                    <input
                        className={styles.Input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ]) ? [a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={name}
                        onChange={this.handleChange}
                        placeholder="Ivan Ivanov"
                    />
                </label>
                <label className={styles.Label}>
                    Number
                    <input
                        className={styles.Input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        required
                        onChange={this.handleChange}
                        value={number}
                        placeholder="+38 (011) 123-45-"
                    />
                </label>
                <button className={styles.Button} type="submit">
                    Add contact
                </button>
            </form>
        );
    }
}

FormContacts.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default FormContacts;
