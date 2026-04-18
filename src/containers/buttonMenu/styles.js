import { FiMenu, FiX } from "react-icons/fi";
import styled from "styled-components";

export const ButtonMenuContainer = styled.button`
    width: 40px;
    height: 40px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.text};
    z-index: 999;
    position: fixed;
    background-color: ${({ theme }) => theme.backgroundBtnMenu};
    right: 1em;
    top: 1.5em;

    &:hover {
        box-shadow: ${({ theme }) => theme.shadow};
    }

    @media screen and (width >= 700px) {
        display: none;
    }
`;

export const XIcon = styled(FiX)`
    position: absolute;
    transition: .3s;
    opacity: ${({ isOpen }) => isOpen ? 1 : 0};
    transform: ${({ isOpen }) => isOpen ? 'scale(1)' : 'scale(.5)'};
`;

export const MenuIcon = styled(FiMenu)`
    position: absolute;
    transition: .3s;
    opacity: ${({ isOpen }) => isOpen ? 0 : 1};
    transform: ${({ isOpen }) => isOpen ? 'scale(.5)' : 'scale(1)'};
`;