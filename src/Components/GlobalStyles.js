import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
const  globalStyles = createGlobalStyle`
  ${reset}

  a {
    text-decoration: none;
    color: inherit;
  }

  * {
    box-sizing: border-box;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu;
    font-size: 12px;
    color: white;
    background-color: rgba(20, 20, 20, 1);
    padding-top: 80px;
  }
`;

export default globalStyles;