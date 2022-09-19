import PropTypes from 'prop-types';
import { StyledButton, Contact } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onClick }) => {
    return (
        <>
            <Contact>{name}: {number} <StyledButton type='button' onClick={()=> onClick(id)}>Delite</StyledButton></Contact>
        </>
    );
}; 

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default ContactItem;