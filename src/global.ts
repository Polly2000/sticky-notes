import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', system-ui, -apple-system;
    /* font-family: monospace; */
    /* margin: 0 auto; */
    /* width: 1200px; */
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
  max-width: 75vw;
  height: 100vh;
  background-color: #f4f6f8;
`


