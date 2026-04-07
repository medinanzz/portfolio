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
    background-color: #2a2a2a;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 7dvh;
    position: relative;

    &:hover {
      transform: translateY(-10px) scale(1.1);
      box-shadow: ${props => props.theme.shadowLinkProjects};
    }
  }

  .ul:hover { gap: .4em; }

  .ul:hover .a-projects:not(:hover) {
    opacity: .6;
    filter: blur(2px);
  }
`;
