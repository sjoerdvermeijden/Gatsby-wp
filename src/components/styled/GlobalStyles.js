import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing: border-box;
    }

    html {
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    body {
        color: ${props => (props.theme === "purple" ? "purple" : "white")};
    }
`

export default GlobalStyle
