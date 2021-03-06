import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    body {
        letter-spacing: -0.03px;
        line-height: 1.5;
    }
    input {
        all: unset;
    }
    a{
        text-decoration: none;;
    }
    button {
        border: none;
        background-color: transparent;
    }
`;

export default GlobalStyles;
