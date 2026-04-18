import styled from "styled-components";

export const DivProjects = styled.div`
  width: 100%;
  margin-top: 1em;

  ul {
    list-style: none;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    flex-direction: column;
    transition: all 0.3s;
    padding: 0 0.2em;
    gap: 0.5em;
  }

  ul li {
    perspective: 1000px;
    display: flex;
    width: 100%;
    justify-content: center;
  }

  ul a {
    text-decoration: none;
    transition: all 0.3s;
    color: white;
    margin: auto;
    flex: 1;
    max-width: 300px;
    border-radius: 0.5em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 7dvh;
    position: relative;
    color: ${({ theme }) => theme.text};
    overflow: hidden;
    z-index: 1;
    transform-style: preserve-3d;
    background-color: ${(props) => props.theme.backgroundBtn};
    color: white;

    &:hover {
      /* O botão sobe e ganha a sombra */
      transform: rotateX(25deg) translateY(-12px) translateZ(-10px) scale(1.05);
      box-shadow: ${(props) =>
        props.theme
          .shadowLinkProjects}; /* Supondo que sua sombra tenha uns 10px-15px */
      transition:
        transform 0.2s ease-out,
        box-shadow 0.2s ease-out;
    }

    &:active {
      transform: rotateX(25deg) translateY(2px) translateZ(0) scale(1.02);
      box-shadow: 0 0 0 rgba(0, 0, 0, 0);
      transition:
        transform 0.1s ease-in,
        box-shadow 0.1s ease-in;
    }

    &::before {
      content: "";
      position: absolute;
      inset: 0;
      z-index: -1;
      background-color: #6200ea;
      clip-path: circle(0% at 50% 100%);
      transition: 0.2s;
    }

    &:hover::before {
      clip-path: circle(100% at 50% 0%);
    }
  }

  .ul:hover {
    gap: 0.4em;
  }

  .ul:hover .a-projects:not(:hover) {
    opacity: 0.6;
    filter: blur(1.5px) grayscale(0.5);
  }
`;
