import styled from 'styled-components';

export const AppStyles = styled.div`
  background-color: #eff4fe;
  height: 100vh;
`;

export const Notes = styled.div`
  display: flex;
  gap: 10px;
  overflow-y: scroll;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
    display: none;
  }
`;
