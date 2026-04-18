import styled from "styled-components";

export const NavContainer = styled.nav`
  --default-value: 1em;
  --width: 90%;
  --max-width: 700px;
  --height-li: 10dvh;

  width: var(--width);
  max-width: var(--max-width);
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
  gap: calc(var(--default-value) + var(--default-value));
  z-index: 999;
  background-color: ${({ theme }) => theme.backgroundNav};
  backdrop-filter: blur(2px);
  box-shadow: ${({ theme }) => theme.shadowNav};

  @media screen and (width >= 500px) {
    transition: 0.3s;
  }

  & h1 {
    display: none;
    margin: 1em 0 0 .5em;
  }

  & hr {
    display: none;
    width: 100%;
    height: 2px;
  }

  @media screen and (width >= 700px) {
    left: 0;
    height: 100dvh;
    transform: translateX(0%);
    backdrop-filter: blur(10px);
    border-radius: 0;
    font-size: 1.05em;
    position: fixed;
    padding: 0;
    top: 0;

    ul {
      padding: 0;
      gap: 0 !important;
    }
    
    hr {
      display: block;
    }

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
      display: flex;
      justify-content: start;
      align-items: center;
      padding: 10px;
      width: 100%;
      height: 100%;
      padding-left: .8em;
      background-color: ${({ theme }) => theme.backgroundNav};

      &:hover {
        background-color: ${({ theme }) => theme.buttonsNavHover};
        padding-left: var(--default-value);
        box-shadow: inset ${({ theme}) => theme.shadowButtonsHover} ;
      }

      &::before {
        content: '';
        height: 0;
        width: 0;
        opacity: 0;
        display: inline;
        position: relative;
      }
    }
  }

  & button {
    font-size: 1.1em;
  }

  &:nth-of-type(2) {
    justify-content: space-around;
    padding-right: 1em;

    @media screen and (width >= 700px) {
      padding: 0;
    }
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
        gap: 1em;
        width: 100%;
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
      height: var(--height-li);
      width: 100%;
    }

    & a {
      width: 100%;
    }

    &:nth-of-type(2) {
      justify-content: end;
      gap: .5em;
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
