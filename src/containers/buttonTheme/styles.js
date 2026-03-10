import { FiMoon, FiSun } from "react-icons/fi";
import styled from "styled-components";
import { ButtonTheme } from ".";

export const BtnTheme = styled.button`
  width: 60px;
  height: 60px;
  background: ${props => props.theme.buttonThemeBackground};
  border-radius: 50%;
  cursor: pointer;
  border: none;
  position: fixed;
  right: 1em;
  top: 6em;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${props => props.theme.btnShadowTheme};
  transition: .4s;

  &:hover{
    transform: scale(1.08);
    box-shadow: ${props => props.theme.btnShadowTheme};
  }

  &:active{
    transform: scale(.95);
  }

  &.darkTheme .moon {
    transform: scale(1);
    opacity: 1;
  }
  &.darkTheme .sun {
    transform: scale(0);
    opacity: 0;
  }
  
`;

export const IconSun = styled(FiSun)`
    font-size: 30px;
    color: white;
    transition: .3s;
`;

export const IconMoon = styled(FiMoon)`
    font-size: 30px;
    color: white;
    position: absolute;
    transition: all .3s;
    opacity: 0;
    transform: scale(0);
`;