import styled from "styled-components";

export const DivPerfil = styled.div`
    .perfil {
        position: absolute;
        bottom: 1em;
        background-color: ${props => props.theme.background};
        padding: 1em 0 1em 1em;
        border-radius: 0.5em;
        z-index: 1;
        transform: translateY(-120px);
        left: -3em;
        width: 300px;
        pointer-events: none;
        opacity: 0;
        transition: all .3s;
        box-shadow: ${props => props.theme.shadow};
    }

    .perfil.ativo {
        opacity: 1;
        pointer-events: all;
        transform: translateY(-150px);
    }

    @media screen and (width >= 700px) {
        .perfil {
            /* right: 50em; */
            bottom: 2em;
            left: 1em;
        }
    }
`;