import React, { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { SubTitle } from '@components/ui/Text';

const AddMore: FC = () => {
  return (
    <Wrap>
      <AddDiv>
        <Image src="/images/addmore.png" alt="add" width={24} height={24} />
        <Text>차량 추가하기</Text>
      </AddDiv>
    </Wrap>
  );
};

const Wrap = styled.div`
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const AddDiv = styled.div`
  background-color: rgb(247, 247, 247);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.7rem;
  width: 34.6rem;
  border-radius: 0.8rem;
`;

const Text = styled(SubTitle)`
  margin: 0;
  margin-left: 1rem;
  align-items: center;
  color: ${(props) => props.theme.azure};
`;

export default AddMore;
