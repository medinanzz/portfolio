import styled from "styled-components";

export const DivProjects = styled.div`
  width: 100%;

  ul {
    list-style: none;
    position: relative;
    margin: 1em auto;
    display: grid;
    transition: all .3s;
    gap: 0.5em;
    width: fit-content;
  }

  ul li {
    perspective: 1000px;
    display: flex;
    justify-content: center;
  }

  ul a {
    text-decoration: none;
    transition: all .3s;
    color: white;
    margin: auto;
    width: 300px;
    border-radius: 0.5em;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 7dvh;
    position: relative;
    color: ${({ theme }) => theme.text};
    overflow: hidden;
    z-index: 1;
    background-color: ${props => props.theme.backgroundBtn};
    color: white;

    &:hover {
      transform: translateY(-10px) scale(1.1) rotateX(25deg);
      box-shadow: ${props => props.theme.shadowLinkProjects};
    }

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      z-index: -1;
      background-color: #6200ea;
      clip-path: circle(0% at 50% 100%);
      transition: .6s;
    }

    &:hover::before {
      clip-path: circle(100% at 50% 50%);
    }
  }

  .ul:hover { gap: .4em; }

  .ul:hover .a-projects:not(:hover) {
    opacity: .6;
    filter: blur(1.5px) grayscale(0.5);
  }
`;
