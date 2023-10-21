import React from 'react';
import { Block, Title } from './styled';
import { Container } from '../App/global';

const Header = () => {
  return (
    <Block>
      <Container>
        <Title>Sticky Notes</Title>
      </Container>
      {/* <h3>Sticky Notes</h3> */}
    </Block>
  );
};

export default Header;
