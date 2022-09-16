import PropTypes from 'prop-types';
import { StyledInput } from './ContactForm.styled';

const Filter = ({ contactName, onFilterChange }) => {
    return (
        <>
            <label>Find contact by name
                <StyledInput type="text" value={contactName} onChange={onFilterChange} />
            </label>
        </>
    )
};

Filter.propTypes = {
    contactName: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default Filter;