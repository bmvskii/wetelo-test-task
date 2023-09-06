import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        font-family: Lato, sans-serif;
        color: white;
    }

    :root {
        --color-base-gray: #292B2E;
        --color-gray-dark: #34363A;
        --color-gray-light: #404245;
        --border-button: 1px solid #404245;
        --color-bg: #f4f4f4;
        --topics: 4;
    }

    main {
        margin-top: 10vh;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-bg);
    }

    body {
        background-color: var(--color-bg);   
    }

    h1 {
        font-family: Rubik, sans-serif;
        font-weight: 400;
        font-size: 20px;
    }
    
    h2 {
        font-family: Lato, sans-serif;
        font-weight: 700;
        font-size: 17px;
    }
    
    p {
        font-family: Lato, sans-serif;
        font-weight: 400;
        font-size: 14px;
        color: #c7c7c7;
    }
`;
