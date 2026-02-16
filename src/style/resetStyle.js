import { createGlobalStyle } from "styled-components";

export const GlboalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Fruktur:ital@0;1&display=swap');
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
        /* font-family: "Fruktur", system-ui; */
    }

    html, body {
        scroll-behavior: smooth;
    }

    #root {
        min-height: 100dvh;
        background-color: #1c1c1c;
        color: white;

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
                background-color: #111111;
                backdrop-filter: blur(0px);
            }
            header div, header {
                grid-column: 2 / -1;
                align-items: center;
                display: flex;
                justify-content: end;
                /* z-index: 0; */
                background-color: #1c1c1c;
                height: 80px;
                /* position: ; */
            }
            
            header {
                position: relative;
                width: 100%;
                box-shadow: 5px 0 10px #ffffff6a;
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
