import React from 'react';
import { FooterText, Link } from './styled';

const Footer = () => {
  return (
    <footer>
      <FooterText>
        ©2023 Created by{' '}
        <Link href="https://github.com/Polly2000" rel="noreferrer" target="_blank">
          Polly2000
        </Link>
      </FooterText>
    </footer>
  );
};

export default Footer;
