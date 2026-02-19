import styled from "styled-components";

export const SectionAnimation = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100dvh;
    flex-direction: column;
`;

export const Box = styled.div`
    perspective: 1000px;
    width: 100%;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const DivBox = styled.div`
    width: 200px;
    height: 200px;
    transform-style: preserve-3d;
    position: relative;
    animation: rotate 5s linear infinite;
    animation-play-state: paused;
    &.animate {
        animation-play-state: running;
    }
    @keyframes rotate {
        from {
            transform: rotateX(0deg);
        }
        to {
            transform: rotateX(360deg);
        }
    }

    &:hover  {
        animation-play-state: paused;
    }

    span {
        width: 200px;
        display: flex;
        cursor: default;
        font-size: 1.4em;
        justify-content: center;
        border-radius: 0.5em;
        align-items: center;
        height: 200px;
        position: absolute;
        backface-visibility: hidden;
    }

    .spanFront {
        background-color: #3498db;
    }

    .spanBack {
        background-color: #e74c3c;
        transform: rotateX(180deg);
    }
`;

export const BtnPausedRunning = styled.button`
    padding: 1em 1em;
    font-size: 1em;
    cursor: pointer;
    border: none;
    color: ${props => props.theme.text};
    border-radius: .5em;
    background-color: ${props => props.theme.background};
    transition: all .3s;
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: absolute; */
    /* margin-bottom: 50em; */

    &:hover {
         box-shadow: ${props => props.theme.shadow};
    }
`;