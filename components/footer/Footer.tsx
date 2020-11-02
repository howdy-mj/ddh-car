import React, { FC } from 'react';
import styled from 'styled-components';

const Footer: FC = () => {
  return (
    <Wrap>
      <Name>판매 등록 하기</Name>
    </Wrap>
  );
};

const Wrap = styled.footer`
  background-color: ${(props) => props.theme.azure};
  height: 6.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Name = styled.h2`
  color: white;
  font-weight: 700;
  font-size: 2rem;
`;

export default Footer;
