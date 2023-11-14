import styled from 'styled-components';

export const CreateNote = styled.div<{ $bg: string }>`
  width: 300px;
  height: 250px;
  background-color: ${(props) => props.$bg};
  border-radius: 5px;
  margin-right: 2%;
`;

export const Title = styled.h3<{ $color: string }>`
  text-align: center;
  height: 34px;
  padding-top: 8px;
  color: ${(props) => props.$color};
  font-size: 14px;
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
  border: none;
  overflow: auto;
`;

export const SelectColorBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-top: 10px;
`;

export const SelectColorButton = styled.button<{ $bg: string }>`
  width: 15px;
  height: 15px;
  border: none;
  border-radius: 50%;
  transition: 0.3s;
  background-color: ${(props) => props.$bg};
  color: #fff;
  cursor: pointer;

  &:hover {
    border: 1px solid #525252;
  }

  &:active {
  }
`;

export const CreateButton = styled.button`
  border: none;
  height: 28px;
  border-radius: 3px;
  transition: 0.3s;
  background-color: #1976d2;
  color: #ffffff;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #0071ff;
  }
`;
