import React, { FC } from 'react';
import styled from 'styled-components';

const Header: FC = () => {
  return (
    <Wrap>
      <Name>똑똑한 중고차</Name>
    </Wrap>
  );
};

const Wrap = styled.header`
  margin: 1.2rem auto;
`;

const Name = styled.h2`
  text-align: center;
  color: ${(props) => props.theme.azure};
  font-weight: 700;
  font-size: 2rem;
`;

export default Header;
