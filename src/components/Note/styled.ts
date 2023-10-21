import styled from 'styled-components';

// цвета картинок
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

export const Card = styled.div<{ bg: string }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 250px;
  border-radius: 5px;
  text-align: center;
  font-size: 16px;
  cursor: grab;
  overflow-x: hidden;
  color: #fff;
  background-color: ${(props) => props.bg};

  &:hover {
    Button {
      opacity: 0.8;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: end;
  background-color: #fff;
  border: 1px solid silver;
`;

export const Button = styled.button`
  opacity: 0;
  background-color: transparent;
  border: none;
  margin: 5px;
  cursor: pointer;
`;

export const Text = styled.p`
  height: 200px;
`;
