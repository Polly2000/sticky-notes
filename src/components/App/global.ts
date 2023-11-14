import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Nunito Sans', sans-serif;
  }

  *::before,
  *::after {
  }

  *::-webkit-scrollbar {
    width: 4px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #6b6e71;
  }

  body {
  }

  textarea:focus, input:focus{
    outline: none;
  }

`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 90vw;
  padding-top: 20px;
`;
