import styled from 'styled-components';

export const StickyNotes = styled.div`
  width: 300px;
  position: absolute;
  top: 80px;
  left: 420px;
`;

export const Card = styled.div<{ $bg: string; $color: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  font-size: 16px;
  cursor: grab;
  overflow-x: hidden;
  color: ${(props) => (props.$color ? '#ffffff' : '#5b5e62')};
  background-color: ${(props) => props.$bg};

  &:hover {
    Button {
      opacity: 0.9;
    }
  }
`;

export const ButtonsIcon = styled.div<{ $color: boolean }>`
  display: flex;
  justify-content: end;
  background-color: inherit;
`;

export const ButtonIcon = styled.button`
  opacity: 0;
  background-color: transparent;
  border: none;
  margin: 8px 8px 2px 5px;
  transition: 0.3s;
  cursor: pointer;

  img {
    height: 12px;
    width: 12px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
`;

export const Text = styled.p`
  height: 200px;
  padding: 0px 5px;
  cursor: default;
`;

export const Modal = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  color: #5b5e62;
  cursor: default;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  width: 400px;
  height: 100px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;

export const EditTitle = styled.h3<{ $color: boolean }>`
  text-align: center;
  height: 34px;
  padding-top: 8px;
  color: ${(props) => (props.$color ? '#ffffff' : '#5b5e62')};
  font-size: 14px;
  font-weight: 700;
`;

export const Block = styled.div`
  display: flex;
  height: 216px;
  justify-content: space-between;
  flex-direction: column;
  padding: 8px;
`;

export const Textarea = styled.textarea`
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 150px;
  padding: 10px;
  resize: none;
  border: none;
  overflow: auto;
`;

export const SelectColorBlock = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
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
