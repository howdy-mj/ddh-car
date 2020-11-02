// import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface TextProps {
  color: string;
}

export const SubTitle = styled.h3<TextProps>`
  font-size: 1.5rem;
  line-height: 2.2rem;
  letter-spacing: -0.63px;
  font-weight: normal;
  color: ${(props) => props.theme.greyishBrown};
  margin-bottom: 1.2rem;

  ${({ color }) =>
    css`
      color: color;
    `}
`;

export const SubTitle2 = styled.h3<TextProps>((props) => ({
  fontSize: '1.5rem',
  lineHeight: '2.2rem',
  letterSpacing: '-0.63px',
  fontWeight: 'normal',
  color: props.color,
  marginBottom: '1.2rem',
}));

export const Description = styled.div`
  font-size: 1.3rem;
  line-height: 2.2rem;
  letter-spacing: -0.46px;
  color: ${(props) => props.theme.brownGrey};
`;
