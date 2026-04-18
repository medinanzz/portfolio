// import { FiMenu, FiX } from "react-icons/fi"
import { ButtonMenuContainer, MenuIcon, XIcon } from "./styles"

export const ButtonMenu = ({ toggleMenu, isOpen }) => {
    return (
        <ButtonMenuContainer onClick={toggleMenu}>
            <XIcon size={22} isOpen={isOpen} />
            <MenuIcon size={22} isOpen={isOpen} />
        </ButtonMenuContainer>
    )
}