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
    background-color: #929496;
  }

  body {
    scroll-behavior: smooth;
    background-color: #eff4fe;
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

export const Button = styled.button`
  border: none;
  height: 24px;
  border-radius: 3px;
  transition: 0.3s;
  background-color: #1976d2;
  color: #ffffff;
  cursor: pointer;
  width: 100%;

  &:hover {
    background-color: #0071ff;
  }
`;
