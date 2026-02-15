import styled from "styled-components";

export const DivProjects = styled.div`
  /* min-height: 100%; */
  width: 100%;

  ul {
    list-style: none;
    width: 100%;
    position: relative;
    margin-top: 1em;
    display: grid;
    transition: all .3s;
    gap: 0.5em;
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
  }

  ul.hover-btn {

    a.link-hover {
        /* scale: 1.1; */
        background-color: #2a2a2a;
        backdrop-filter: blur(5px);
        opacity: 1;
        box-shadow: 0 10px 30px rgba(255, 255, 255, 0.23);
        transform: translateY(-6px) scale(1.05);
    }
  }

  ul.hover-btn .a-projects {
    opacity: 0.6;
  }
`;
