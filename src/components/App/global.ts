import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', system-ui, -apple-system;
  }

  *::before,
  *::after {
  }

  body {
    /* fill="#ebecf0" */
  }
`;

export const AppStyles = styled.div`
  background-color: #eff4fe;
  height: 100vh;
`;

export const Container = styled.div`
  margin: 0 auto;
  max-width: 90vw;
  padding-top: 20px;
`;
