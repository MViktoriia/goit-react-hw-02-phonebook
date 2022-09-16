import PropTypes from 'prop-types';

const Filter = ({ contactName, onFilterChange }) => {
    return (
        <div>
            <label>Find contact by name
                <input type="text" value={contactName} onChange={onFilterChange} />
            </label>
        </div>
    )
};

Filter.propTypes = {
    contactName: PropTypes.string.isRequired,
    onFilterChange: PropTypes.func.isRequired,
};

export default Filter;