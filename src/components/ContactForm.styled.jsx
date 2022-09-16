import styled from 'styled-components';

export const StyledForm = styled.form`
    max-width: fit-content;
    padding: 20px 200px 20px 20px;
    border-color: black;
    border: 1px solid;
`
export const StyledLabel = styled.label`
    display: block;
    margin-bottom: 10px;
`

export const StyledInput = styled.input`
    display: block;
    margin-top: 5px;
    border-width: 1px;
    border-style: solid;
    border-color: #c8c5c5;
`
export const StyledButton = styled.button`
    border: none;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-size: 12px;
    font-family: Roboto, Verdana, Tahoma, sans;
    padding: 12px 16px;
    margin-top: 10px;
    border-radius: 100px;
    color: #fff;
    background: #2196F3;
    &:hover {
        background: #39a1f4;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
    &:active {
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        background: #0d8aee;
    }
`