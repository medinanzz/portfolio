import styled from "styled-components";

export const DivAbout = styled.div`
    display: flex;
    gap: .8em;
    align-items: center;
    flex-direction: column;
    
    p {
        width: 90%;
        font-size: 1.1em;
        letter-spacing: .7px;
        text-align: center;
    }

    p:nth-of-type(1) {margin-top: 1em;}
`;