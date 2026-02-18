import styled from "styled-components";
import { Link } from "react-router-dom";
export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  right: -260px;
  width: 260px;
  bottom: 0;
  background: ${props => props.theme.backgroundMenu};
  backdrop-filter: blur(10px);
  padding: 2rem 1rem;
  transition: 0.3s ease;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.open {
    box-shadow: ${props => props.theme.shadow};
    right: 0;
  }

  .close-btn {
    background: none;
    border: none;
    color: ${props => props.theme.text};
    font-size: 1.5rem;
    cursor: pointer;
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: .4em;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    transition: all 0.3s;
    
    &:hover {
      box-shadow: ${props => props.theme.shadow};
      /* box-shadow: 0 0 10px rgb(255 255 255 / 0.5); */
    }
  }

  h1 {
    display: none;
    color: ${props => props.theme.text};
  }

  button {
    cursor: pointer;
  }

  ul:nth-of-type(1) {
    margin-top: 1em;
  }
  ul:nth-of-type(2) {
    gap: .5em;
    display: flex;
    flex-direction: column;
  }

  @media screen and (width > 700px) {
    position: relative;
    left: 0;
    z-index: 0;
    transform: translateX(0);

    .btn-img-menu {
      display: none;
    }

    ul:nth-of-type(1) {
      flex: 1;
    }
    h1 {
      display: block;
      }
    }
`;

export const UlContainer = styled.ul`
  list-style: none;
  padding-left: 0.5em;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;

  button {
    color: ${props => props.theme.text};
    text-decoration: none;
    font-size: 1.2rem;
    background-color: transparent;
    width: 90%;
    border: 0;
    height: 7dvh;
    display: flex;
    border-radius: .5em;
    padding-left: 1em;
    transition: all 0.3s;
    align-items: center;

    &:hover {
      /* scale: 1.1; */
      box-shadow: ${props => props.theme.shadow};
    }
  }
`;

export const StyledLink = styled(Link)`
  color: ${props => props.theme.text};
    text-decoration: none;
    font-size: 1.2rem;
    background-color: transparent;
    width: 90%;
    border: 0;
    height: 7dvh;
    display: flex;
    padding-left: 1em;
    transition: all 0.3s;
    align-items: center;
    border-radius: .5em;

    &:hover {
      box-shadow: ${props => props.theme.shadow};
    }
`;

export const BtnPerfil = styled.button`
  color: ${props => props.theme.text};
    text-decoration: none;
    font-size: 1.2rem;
    background-color: transparent;
    width: 90%;
    border: 0;
    height: 7dvh;
    display: flex;
    padding-left: 1em;
    transition: all 0.3s;
    border-radius: 0.5em;
    align-items: center;

    &:hover {
      box-shadow: ${props => props.theme.shadow};
    }
`;