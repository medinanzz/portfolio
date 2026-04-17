import styled from "styled-components";

export const NavContainer = styled.nav`
  --default-value: 1em;

  width: 90%;
  max-width: 700px;
  border-radius: 2em;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  left: 50%;
  transform: translateX(-50%) rotateX(0deg);
  display: flex;
  top: ${({ isOpen }) =>
    isOpen ? "calc(var(--default-value) + .5em)" : "-100%"};
  padding: calc(0.5em + var(--default-value));
  gap: 2em;
  z-index: 999;
  background-color: ${({ theme }) => theme.backgroundNav};
  backdrop-filter: blur(2px);
  box-shadow: ${({ theme }) => theme.shadowNav};

  @media screen and (width >= 500px) {
    transition: 0.3s;
  }

  & h1 {
    display: none;
  }

  @media screen and (width >= 700px) {
    left: 0;
    height: 100dvh;
    transform: translateX(0%);
    backdrop-filter: blur(10px);
    border-radius: 0;
    font-size: 1.05em;
    padding-bottom: 2.5em;

    & h1 {
      display: block;
    }
  }
`;

export const UlContainer = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  align-items: center;

  & button,
  a {
    background-color: transparent;
    cursor: pointer;
    color: ${({ theme }) => theme.text};
    border: none;
    text-decoration: none;
    position: relative;

    &::before {
      content: "";
      height: 2px;
      display: block;
      width: 100%;
      opacity: 0;
      transition: 0s;
      background-color: ${({ theme }) => theme.lineBeforeLinks};
      bottom: 0;
      position: absolute;
      left: 0%;
    }

    &:hover::before {
      opacity: 1;
    }

    @media screen and (width >= 700px) {
      text-align: start;
      display: block;
      width: 100%;

      &::before {
        width: 0%;
        transition: 0.3s;
        opacity: 1;
        height: 2.6px;
      }

      &:hover::before {
        width: 100%;
      }
    }
  }

  & button {
    font-size: 1.1em;
  }

  &:nth-of-type(2) {
    justify-content: space-around;
    padding-right: 1em;
  }

  &:nth-of-type(1) {
    @media screen and (width < 500px) {
      gap: 1em;
      justify-content: space-between;
      padding-left: 0.5em;
    }

    @media screen and (width >= 500px) {
      gap: 0em;
    }

    @media screen and (width >= 700px) {
        gap: 1.5em;
    }
  }

  @media screen and (width >= 700px) {
    flex-direction: column;
    justify-content: start;
    align-items: start;
    padding-top: 1em;
    gap: 1.2em;
    font-size: 1.3em;

    & li {
      width: 100%;
    }

    & a {
      width: 100%;
    }

    &:nth-of-type(2) {
      justify-content: end;
      gap: 1.2em;
    }
  }
`;

export const DivUl = styled.div`
  width: 100%;
  display: flex;
  gap: 1em;
  flex-direction: column;
  height: 100%;

  @media screen and (width >= 700px) {
    display: flex;
    justify-content: space-between;
    align-items: start;
    flex-direction: column;
  }
`;
