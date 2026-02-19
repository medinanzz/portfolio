import { createGlobalStyle } from "styled-components";

export const GlboalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Poppins", Arial, Helvetica, sans-serif;
    }

    html, body {
        scroll-behavior: smooth;
    }
    #root {
        min-height: 100dvh;
        background-color: ${props => props.theme.background};
        color: ${props => props.theme.text};

        @media screen and (width >= 700px) {
            display: grid;
            grid-template-rows: auto 1fr auto;
            grid-template-columns: 250px 1fr 1fr;

            nav {
                grid-row: 1 / -1;
                grid-column: 1 / -1;
                position: fixed;
                top: 0;
                z-index: 99;
                width: 250px;
                background-color: ${props => props.theme.background};
                backdrop-filter: blur(0px);
                box-shadow: ${props => props.theme.shadow};
            }
            header div, header {
                grid-column: 2 / -1;
                align-items: center;
                display: flex;
                justify-content: end;
                /* z-index: 0; */
                /* background-color: ${props => props.theme.backgroundHeader}; */
                height: 80px;
                /* position: ; */
            }
            
            header {
                position: relative;
                width: 100%;
                box-shadow: ${props => props.theme.shadow};
            }
            main {
                grid-column: 2 / -1;
                flex: 1;
                min-height: 100dvh;
                flex-direction: column;
                display: flex;
                top: 0;
                justify-content: center;
                grid-row: 2 / -1;
            }
            footer {
                position: relative;
                bottom: 0;
                grid-column: 1 / -1;
                margin-left: 250px;
            }
        }
    }
`;
