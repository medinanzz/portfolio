import styled from "styled-components";

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

  &.open {
    box-shadow: 0 0 20px rgb(255 255 255 / .3);
    right: 0;
  }

  .close-btn {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.5rem;
    cursor: pointer;
    margin-bottom: 2rem;
  }
`;

export const UlContainer = styled.ul`
  list-style: none;
  padding-left: .5em;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: .5rem;

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
    transition: all .3s;
    align-items: center;

    &:hover {
        scale: 1.1;
        box-shadow: 0 0 10px rgb(255 255 255 / .5);
    }
  }
`;
