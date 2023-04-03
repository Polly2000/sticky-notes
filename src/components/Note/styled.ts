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


export const Card = styled.div<{bg: string}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 200px;
  height: 250px;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 20px;
  text-align: center;
  font-size: 16px;
  cursor: grab;
  overflow-x: hidden;
  color: #fff;
  background-color: ${props => props.bg};
`

export const Buttons = styled.div`
  display: flex;
  justify-content: end;
`

export const Button = styled.button`
  opacity: .8;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

export const Text = styled.p`
  height: 200px;
`