import PropTypes from 'prop-types';

import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
    return (
        <label className={styles.Label}>
            Find contacts by name
            <input
                type="text"
                name="filter"
                className={styles.Input}
                value={value}
                onChange={onChange}
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                required
            />
        </label>
    );
};

Filter.propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};

export default Filter;
