import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', system-ui, -apple-system;
    background-color: #f5f5f5;
  }

  *::before,
  *::after {
  }

  body {
    /* fill="#ebecf0" */
  }
`

export const Container = styled.div`
  margin: 0 auto;
  max-width: 90vw;
  /* height: 100vh; */
`


