import styled from 'styled-components';

// цвета картинок:
// зеленый: #7bc86c
// синий: #29cce5
// желтый: #f5dd29 (не используется)
// оранжевый: #ffaf3f
// красный: #ef7564
// фиолетовый: #cd8de5
// темно-синий: #172b4d
// розовый: #ff8ed4
// еще голубой: #64C4ED
// еще фиолетовый: #a2befa
// еще зеленый: #42B883

// более пастельные цвета:
// серый: #c9d1d3
// зеленый: #42b883
// голубой: #64c4ed
// розовый: #fbc
// салатовый: #b6e6bd
// персиковый: #fed6bc
// фиолетовый: #a2befa
// красный: #ff6464

// финальные цвета:
// зеленый: #42b883
// голубой: #64c4ed
// розовый: #fbc
// фиолетовый: #a2befa
// оранжевый: #ffaf3f
// красный: #ef7564
// фиолетовый: #cd8de5
// серый: #c9d1d3
// зеленый: #7bc86c
// синий: #29cce5
// розовый: #ff8ed4

export const Card = styled.div<{ $bg: string; $color: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 250px;
  height: 250px;
  border-radius: 5px;
  font-size: 14px;
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

export const Buttons = styled.div<{ $color: boolean }>`
  display: flex;
  justify-content: end;
  background-color: inherit;
  /* border-bottom: 1px solid ${(props) => (props.$color ? '#ffffff' : '#5b5e62')}; */
`;

export const Button = styled.button`
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
  background-color: #fff;
  width: 400px;
  height: 100px;
  padding: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`
