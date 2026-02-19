import styled from "styled-components";

export const SectionExtras = styled.section`
    min-height: 100dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    grid-column: 2 / -1;

    h1 {
        margin-bottom: .5em;
    }
`;

export const TechnologiesDiv = styled.div`
    width: 100%;
   padding: 1em 0;

    h1 {
        text-align: center;
    }

    p {
        text-align: center;
    }
`;

export const Hr = styled.hr`
    width: 100%;
`;

export const ContainerExtras = styled.div`
    width: 100%;
    max-width: 600px;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    line-height: 1.5;
    
    h2 {
        text-align: center;
    }

    ul {
        margin-top: .5em;
        /* text-align: center; */
        list-style: none;
        /* margin-left: 1.5em; */
    }

    /* @media screen and (width >= 700px) {

    } */
`;