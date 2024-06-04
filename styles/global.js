import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    html,
    body {
        width: 100%;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`
export default GlobalStyles