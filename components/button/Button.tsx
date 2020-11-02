import React, { FC } from 'react';
import styled, { css } from 'styled-components';

interface ButtonProps {
  label: string;
  size?: 'small' | 'medium' | 'large';
  type?: 'button' | 'submit';
  selected?: boolean;
  onClick?: any;
}

const Button: FC<ButtonProps> = (props) => {
  const {
    label,
    size = 'medium',
    type = 'button',
    selected,
    onClick,
    ...rest
  } = props;
  return (
    <ButtonWrap
      type={type}
      size={size}
      selected={selected}
      onClick={onClick}
      {...rest}
    >
      {label}
    </ButtonWrap>
  );
};

interface ButtonStyleProps {
  size?: string;
  selected?: boolean;
}

const ButtonWrap = styled.button<ButtonStyleProps>`
  display: block;
  width: 16.5rem;
  height: 4.7rem;
  border-radius: 0.8rem;
  border: 1px solid ${(props) => props.theme.azure};
  background-color: white;
  color: ${(props) => props.theme.azure};

  ${(props) =>
    props.selected &&
    css`
      border: 1px solid ${(props) => props.theme.azure};
      background-color: ${(props) => props.theme.azure};
      color: white;
    `}

  ${(props) =>
    props.size === 'small' &&
    css`
      width: 10.5rem;
    `}
`;

export default Button;
