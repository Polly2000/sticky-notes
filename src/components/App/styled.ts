import styled from 'styled-components';

export const AppStyles = styled.div``;

export const Notes = styled.div`
  display: flex;
  gap: 10px;
  overflow-y: scroll;
  flex-wrap: wrap;
  max-height: 72vh;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`;

export const Bin = styled.div`
  display: flex;
  align-self: flex-end;
  width: 250px;
  height: 150px;
  border-radius: 5px;
  font-size: 16px;
  overflow-x: hidden;
  background-color: red;
`;

export const BottomBlock = styled.div`
  position: absolute;
  left: 0;
  bottom: 4px;
  width: 100%;
`;

export const Error = styled.div`
  position: absolute;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ErrorElem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 20vw;
  height: 60px;
  border-radius: 3px;
  padding: 6px;
  background-color: #ffffff;
  color: #5b5e62;
`;

export const ErrorButton = styled.button`
  font-size: 16px;
  color: #ef7564;
  background-color: transparent;
  border: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    font-size: 18px;
  }
`;
