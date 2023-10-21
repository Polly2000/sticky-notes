import styled from 'styled-components';

export const CreateNote = styled.div`
  width: 300px;
  height: 250px;
  background-color: #ffffff;
  border-radius: 5px;
`;

export const Title = styled.h3`
  text-align: center;
  height: 34px;
  padding-top: 8px;
  color: #5b5e62;
  font-size: 14px;
  /* letter-spacing: 0.5px; */
  font-weight: 700;
`;

export const Block = styled.div`
  display: flex;
  height: 216px;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
`;

export const Textarea = styled.textarea`
  display: flex;
  width: 280px;
  height: 160px;
  padding: 10px;
  resize: none;
  /* border: 1px solid #cac9c7; */
  border: none;
  /* border-radius: 3px; */
  /* overflow-y: scroll; */
  overflow: auto;
`;

export const SelectColorBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

export const CreateButton = styled.button`
  border: none;
  height: 28px;
  border-radius: 3px;
  transition: 0.3s;
  background-color: #1976d2;
  color: #ffffff;
  cursor: pointer;

  &:hover {
    background-color: #0071ff;
  }
`;
