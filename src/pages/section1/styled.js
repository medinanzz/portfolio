import styled from "styled-components";

export const SectionAllStyle = styled.section`
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h1 {
    text-align: center;
  }
`;

export const Divprojectsbtn = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

  .a {
    margin-top: 1em;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    border: none;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.textBtn};
    background-color: ${props => props.theme.backgroundBtn};
    width: 200px;
    height: 7dvh;
    color: #fff;
    transition: all 0.1s;
    border-radius: 0.5em;
    position: relative;
    overflow: hidden;
    z-index: 1;
  }

  .a::before {
    content: '';
    background-color: #9D00FF;
    width: 220px;
    left: -220px;
    height: 100%;
    top: 0;
    z-index: -1;
    position: absolute;
    transition: all .6s;
    border-radius: 0 1.5em 1.5em 0;
  }

  .a:hover::before {
    left: 0;
  }
`;
