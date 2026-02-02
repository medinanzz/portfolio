import { createGlobalStyle } from "styled-components";

export const GlboalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    html, body {
        scroll-behavior: smooth;
    }

    #root {
        min-height: 100dvh;
        background-color: #1c1c1c;
        color: white;
    }
`;