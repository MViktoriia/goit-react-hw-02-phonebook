import styled from 'styled-components';

export const StyledButton = styled.button`
    border: none;
    display: inline-block;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    font-size: 11px;
    font-family: Roboto, Verdana, Tahoma, sans;
    padding: 5px 12px;
    margin-left: 10px;
    border-radius: 100px;
    color: #fff;
    background: #9b59b6;
    &:hover {
        background: #a66bbe;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    }
    &:active {
        box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.2);
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
        background: #8f4bab;
    }
`
export const Contact = styled.li`
    &:not(:last-child) {
        margin-bottom: 15px;
    }
`