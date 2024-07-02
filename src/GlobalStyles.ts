import { createGlobalStyle } from 'styled-components'

import '@fontsource-variable/lora';

export const GlobalStyle = createGlobalStyle`

    :root {
        font-weight: 500;
        color-scheme: dark;
        color: #ccc;
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    * {
        font-family: 'Lora Variable', serif;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        text-decoration: none;
        list-style: none;
        background: transparent;
        /* color: inherit; */
        line-height: inherit;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;

        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;

        transition: filter 0.2s ease-in-out;
        transition: box-shadow 0.2s ease-in-out;
    }

    #root {
        display: flex;
        place-items: center;
        flex-direction: column;
        width: 100vw;
        min-height: 100vh;
        background-color: ${props => props.theme.colors.background};
    }

    a {
        text-decoration: inherit;
        color: ${props => props.theme.colors.primary};
    }

    html {
        font-size: 62.5%; /* 10px */
    }

    body {
        font-size: 1.6rem; /* 16px */
        margin: 0;
        display: flex;
        place-items: center;
        min-width: 320px;
        min-height: 100vh;
        box-sizing: border-box;
    }

    h1 {
        font-size: 3.2em;
        line-height: 1.1;
    }

    button, input[type="submit"] {
        cursor: pointer;
    }


`
