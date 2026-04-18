import styled from "styled-components";

export const SectionAllStyle = styled.section`
  min-height: 100dvh;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  flex-direction: column;
  width: 100%;

  .card {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    animation: reveal linear both;
    animation-timeline: view();
    -webkit-animation-range: entry 60% cover 50%;
    animation-range: entry 60% cover 50%;
    scroll-padding-top: 1em;

    @media screen and (width >= 600px) {
      animation-range: entry 50% cover 50%;
    
      @keyframes reveal {
        from {
          opacity: 0;
          transform: scale(0);
        }
    
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
    }

    &.card-home:nth-of-type(1) {
      animation: none;
    }
    

    @keyframes reveal {
      from {
        opacity: 0;
        transform: scale(.7);
      }
  
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  }


  h1 {
    text-align: center;
    width: 60%;
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
    transition: .3s;
    border-radius: 0 1.5em 1.5em 0;
  }

  .a:hover::before {
    left: 0;
  }
`;
