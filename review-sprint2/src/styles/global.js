import { createGlobalStyle } from "styled-components";

export const Reset = createGlobalStyle`
     *{
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        list-style: none;
    }

    button{
        cursor: pointer;
    }
`;


export const GlobalStyle = createGlobalStyle` 
    :root{
        --color-black: #282828;
        --color-white: #FFFFFF;
    }
`;

