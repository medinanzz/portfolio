import styled from "styled-components";

/* Header */
export const DivHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  box-shadow: 0 0 10px rgb(255 255 255 / .5);
  position: fixed;
  top: 0;
  background-color: #1c1c1c87;
  backdrop-filter: blur(10px);
  z-index: 1;
  width: 100%;
  color: #fff;

  h1 {
    margin: 0;
    span {
      letter-spacing: 5px;
      font-family: "Fruktur", system-ui;
    }
  }

  @media screen and (width >= 700px) {
    position: fixed;
    z-index: 10;
    h1 {
      display: none;
    }
  }
`;

export const BtnOpenMenu = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 30px;
    height: 30px;
  }
  @media screen and (width >= 600px) {
    display: none;
  }
`;

export const DivTranslation = styled.div`
  display: flex;
  flex-direction: column;
  gap: .4em;

  @media screen and (width >= 700px) {
    flex-direction: row;
  }
  button {
    width: 120px;
    border: 0;
    background-color: transparent;
    border-radius: .4em;
    color: white;
    transition: all .2s;
    height: 5dvh;

    &:hover {
      box-shadow: 0 0 10px #ffffff95;
      scale: 1.1;
    }
  }
`;

