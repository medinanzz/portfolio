import styled from "styled-components";

export const SectionSchoolTest = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
    flex-direction: column;
    width: 100%;
    grid-column: 2 / -1;
`;

export const Fieldset = styled.fieldset`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    border: none;
    padding: 1em;
`;

export const DivInput = styled.div`
    
    label {
        margin-left: 1em;
        display: block;
        margin-bottom: 0.5em;
    }

    input {
        width: 150px;
        border: none;
        border-bottom: 2px solid ${props => props.theme.text};
        outline: none;
        padding: .6em;
        margin-bottom: 1em;
        color: ${props => props.theme.text};
        /* border-radius: .5em; */
        background-color: transparent;
    }
`;

export const BtnSubmit = styled.button`
    background-color: ${props => props.theme.background};
    padding: 1em;
    border: none;
    color: ${props => props.theme.text};
    border-radius: .5em;
    transition: all .3s;
    cursor: pointer;
    margin: 1em 0;
    width: 120px;

    &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    &:hover {
        box-shadow: ${props => props.theme.shadow};
    }
`;

export const BtnClose = styled.button`
    border-radius: 50%;
    height: 40px;
    width: 40px;
    background-color: transparent;
    color: red;
    position: absolute;
    top: -3.5em;
    right: -3em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    transition: .3s;
    
    &:hover {
        box-shadow: ${props => props.theme.shadow};
    }
    `;

export const DivResult = styled.div`
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.text};
    padding: 1em;
    border-radius: .5em;
    line-height: 1.5;
    position: relative;
    box-shadow: ${props => props.theme.shadow};
    `;

export const DivDadResult = styled.div`
    background-color: ${props => props.theme.background};
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    pointer-events: none;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
    width: 100%;
    position: absolute;

    @media screen and (width >= 700px) {
        grid-column: 2 / -1;
        width: 50dvh;
        height: 100%;
    }

    &.show {
        opacity: 1;
        pointer-events: all;
    }
`;