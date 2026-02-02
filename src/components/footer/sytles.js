import styled from "styled-components";

export const FooterDiv = styled.div`
  padding: 1em;
  background-color: #2a2a2a;

  ul {
    list-style: none;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    div img {
      height: 30px;
      width: 30px;
    }

    div span {
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
      opacity: 1;
    }

    div span:nth-of-type(2) {
      background-color: #fff;
      border-radius: 0.5em;
    }

    #divImgs {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: 0.3s ease;
    }

    .icon.show {
      opacity: 1;
    }
  }

  ul a {
    text-decoration: none;
    color: white;
    font-size: 1.1em;
    letter-spacing: 1px;
    display: flex;
    padding: 7px 20px;
    border-radius: 0.3em;
    transition: all 0.3s;

    &:hover {
      background-color: #1c1c1c;
    }
  }
`;
