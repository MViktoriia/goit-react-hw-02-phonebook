import { Component } from "react";
import { nanoid } from 'nanoid';
import { StyledForm, StyledLabel, StyledInput, StyledButton } from './ContactForm.styled';
import PropTypes from 'prop-types';

class ContactForm extends Component {
    state = {
        name: '',
        number: ''
    };

    handleChange = (event) => {
        this.setState({
                [event.target.name]: event.target.value,             
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state);

        this.setState({
            name: '',
            number: ''
        })

    }
    
    render() {
        return (
            <StyledForm onSubmit = {this.handleSubmit}>
                <StyledLabel> Name
                    <StyledInput
                        id = {nanoid()}
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange = {this.handleChange}
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </StyledLabel>
                <StyledLabel> Number
                    <StyledInput
                        type="tel"
                        name="number"
                        value={this.state.number}
                        onChange= {this.handleChange}
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        />
                </StyledLabel>
                <StyledButton type="submit">Add contact</StyledButton>
            </StyledForm>
        )
    }    
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};


export default ContactForm;