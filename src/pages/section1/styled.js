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
  }

  .shadowBottom {
    width: 40px;
    height: 20px;
    background-color: #41414167;
    border-radius: 50%;
    margin-top: 10px;
    display: block;
    transition: all 0.1s ease;
    transform: scaleX(1.5);
  }
  
  .a:active {
    transform: translateY(3px);
  }
  
  .a:active ~ .shadowBottom {
    background-color: #414141c9;
    transform: scale(.95);
  }
`;
