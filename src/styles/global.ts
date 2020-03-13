import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    width: 100%;
  }

  body {
    background: ${props => props.theme.colors.secondary};
    font-size: 14px;
    color: ${props => props.theme.colors.font_tertiary};
    font-family: 'Open Sans', sans-serif;
  }

  .App {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;