import styled from "styled-components";

export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: ${props => props.theme.shadow};
  position: fixed;
  top: 0;
  background-color: ${props => props.theme.backgroundHeader};
  backdrop-filter: blur(10px);
  z-index: 1;
  width: 100%;
  color: ${props => props.theme.text};

  h1 {
    margin: 0;
  }

  @media screen and (width > 700px) {
    position: fixed;
    z-index: 10;
    h1 {
      display: none;
    }
  }

  div:has(.btnTheme) {
    margin-left: 1em;
  }
`;

export const BtnOpenMenu = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: ${props => props.theme.text};
  transition: .3s;


  &:hover {
    box-shadow: ${props => props.theme.shadow};
    scale: 1.1;
  }

  @media screen and (width >= 600px) {
    display: none;
  }
`;

export const DivTranslation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;

export const ButtonGlobalStyle = styled.button`
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    border: 0;
    background-color: transparent;
    border-radius: 50%;
    color: white;
    transition: all .2s;
    color: ${props => props.theme.text};
    border-radius: 50%;

    &:hover {
      box-shadow: ${props => props.theme.shadow};
      scale: 1.1;
    }
`;

export const BtnTheme = styled.button`
  width: 130px;
  height: 50px;
  /* aspect-ratio: 1 / 1; */
  background: ${props => props.theme.buttonThemeBackground};
  border-radius: 5em;
  cursor: pointer;
  border: none;
  position: relative;

  &::before {
    content: '';
    background: ${props => props.theme.buttonThemeBackgroundBefore};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    transition: all .3s;
    position: absolute;
    top: 50%;
    left: 1em;
    transform: translateY(-50%);
  }

  &.dark::before { left: 6em; }
`;