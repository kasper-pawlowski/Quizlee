import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Satoshi', sans-serif;
    /* background-color: ${({ theme }) => theme.colors.dark}; */
    color: #FFFFFF;
    background-color: #f5f2ea; 
  }
  
  a, button, input, textarea {
    color: inherit;
    text-decoration: none;
    font-family: 'Satoshi', sans-serif;
  }

  button {
    cursor: pointer;
  }

  ::selection {
  color: #FFFFFF;
  background: #000000;
}
`;
