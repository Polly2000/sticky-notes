import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Roboto', system-ui, -apple-system; */
    font-family: 'Nunito Sans', sans-serif;
  }

  *::before,
  *::after {
  }

  body {
    /* font-family: 'Nunito Sans', sans-serif; */
    /* fill="#ebecf0" */
  }

  textarea:focus, input:focus{
    outline: none;
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
