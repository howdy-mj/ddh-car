import React, { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { SubTitle } from '@components/ui/Text';

const AddMore: FC = () => {
  return (
    <Wrap>
      <Image src="/images/addmore.png" alt="add" width={24} height={24} />
      <Text>차량 추가하기</Text>
    </Wrap>
  );
};

const Wrap = styled.header`
  background-color: rgb(247, 247, 247);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.7rem;
  border-radius: 0.8rem;
`;

const Text = styled(SubTitle)`
  margin: 0;
  margin-left: 1rem;
  align-items: center;
  color: ${(props) => props.theme.azure};
`;

export default AddMore;
