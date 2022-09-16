import ContactItem from "./ContactItem";
import PropTypes from 'prop-types';

const ContactList = ({ contacts, removeContact }) => {
    return (
        <ul>
            {contacts.map(({id, name, number }) => (
                <ContactItem key={id} id={id} name={name} number={number} onClick={removeContact} />
            ))}
        </ul>
    );
};

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
    }))
};

export default ContactList;