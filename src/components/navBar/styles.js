import styled from "styled-components";
import { Link } from "react-router-dom";
/* NavBar / Menu Lateral */
export const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  right: -260px;
  width: 260px;
  height: 100vh;
  background: #111111ae;
  backdrop-filter: blur(5px);
  padding: 2rem 1rem;
  transition: 0.3s ease;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &.open {
    box-shadow: 0 0 20px rgb(255 255 255 / 0.3);
    right: 0;
  }

  .close-btn {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    margin-bottom: 2rem;
    position: absolute;
    top: .4em;
  }

  button {
    cursor: pointer;
  }

  ul:nth-of-type(1) {
    margin-top: 1em;
  }
`;

export const UlContainer = styled.ul`
  list-style: none;
  padding-left: 0.5em;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  button {
    color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    background-color: transparent;
    width: 90%;
    border: 0;
    height: 7dvh;
    display: flex;
    /* justify-content: center; */
    padding-left: 1em;
    transition: all 0.3s;
    align-items: center;

    &:hover {
      scale: 1.1;
      box-shadow: 0 0 10px rgb(255 255 255 / 0.5);
    }
  }
`;

export const StyledLink = styled(Link)`
  color: #fff;
    text-decoration: none;
    font-size: 1.2rem;
    background-color: transparent;
    width: 90%;
    border: 0;
    height: 7dvh;
    display: flex;
    /* justify-content: center; */
    padding-left: 1em;
    transition: all 0.3s;
    align-items: center;

    &:hover {
      scale: 1.1;
      box-shadow: 0 0 10px rgb(255 255 255 / 0.5);
    }
`;
