import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { SubTitle, Flex, Description } from '@components/index';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import { withStyles } from '@material-ui/core';
import { UploadImg, ChooseMaker, AccidentHistory, CTA } from './fragment';
import store from '@store/index';

interface State {
  price: string;
}

const Information: FC = () => {
  const { registerCarStore } = store;
  const { result } = store.registerCarStore;

  useEffect(() => {
    console.log('d ', result);
  }, [result]);

  const [values, setValues] = React.useState<State>({
    price: '',
  });

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  return (
    <div>
      <ItemDiv>
        <SubTitle>사고이력</SubTitle>
        <SelectWrap>
          <AccidentHistory registerCarStore={registerCarStore} />
        </SelectWrap>
      </ItemDiv>
      <ItemDiv>
        <SubTitle>수리내역</SubTitle>
        <TextArea defaultValue="백도어(와이퍼 부착형)교환(도장), 리어범퍼 교환"></TextArea>
      </ItemDiv>
      <ItemDiv>
        <Flex>
          <SubTitle>제조사</SubTitle>
          <Flex>
            <Description>외제차의 경우 체크하세요</Description>
            <LabelWrap>
              <IsForeignCar type="checkbox" />
              <CheckboxSpan />
            </LabelWrap>
          </Flex>
        </Flex>
        <SelectWrap>
          <ChooseMaker />
        </SelectWrap>
      </ItemDiv>
      <ItemDiv>
        <Flex>
          <SubTitle>차량 사진</SubTitle>
          <Flex>
            <Description>10개 등록 가능</Description>
            <DescriptionWithColor>
              {result.pictures[0].image === null ? 0 : result.pictures.length} /
              10
            </DescriptionWithColor>
          </Flex>
        </Flex>
        <UploadImg />
      </ItemDiv>
      <ItemDiv>
        <Flex>
          <SubTitle>가격 제시하기</SubTitle>
          <Description>희망 가격을 제시해 주세요</Description>
        </Flex>
        <FormStyled>
          <InputStyled
            value={values.price}
            onChange={handleChange('price')}
            endAdornment={<InputAdornment position="end">만원</InputAdornment>}
          />
        </FormStyled>
      </ItemDiv>
      <ItemDiv>
        <Flex>
          <CTA registerCarStore={registerCarStore} />
        </Flex>
      </ItemDiv>
    </div>
  );
};

const FormStyled = styled(FormControl)`
  width: 100%;
  height: 4.9rem;
`;

const InputStyled = withStyles({
  root: {
    paddingRight: '1rem',
  },
  input: {
    textAlign: 'right',
    padding: '1.5rem 0',
    fontSize: '1.5rem',
    color: 'rgb(102, 102, 102)',
  },
})(Input);

const ItemDiv = styled.div`
  margin: 2rem 0;
`;

const SelectWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;

  button:nth-child(1) {
    margin-bottom: 0.7rem;
  }
`;

const TextArea = styled.textarea`
  width: 32rem;
  height: 10rem;
  font-family: 'Noto sans';
  font-size: 1.5rem;
  letter-spacing: -0.52px;
  border-radius: 5px;
  color: ${(props) => props.theme.brownishGrey};
  background-color: rgb(247, 247, 247);
  padding: 1.1rem 1.3rem;
`;

const DescriptionWithColor = styled(Description)`
  color: ${(props) => props.theme.azure};
  margin-left: 0.9rem;
`;

const LabelWrap = styled.label`
  display: flex;
  cursor: pointer;
  position: relative;
  margin-left: 0.9rem;
  width: 2rem;
  height: 2rem;
`;

const CheckboxSpan = styled.span`
  display: block;
  position: absolute;
  width: 1.8rem;
  height: 1.8rem;
  border: 1px solid gray;
  border-radius: 0.5rem;
  background-color: #fff;
  &::before {
    content: '';
    display: none;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 2rem;
    height: 2rem;
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E");
  }
`;

const IsForeignCar = styled.input`
  width: 1.8rem;
  height: 1.8rem;

  &[type='checkbox'] {
    &:checked + ${CheckboxSpan} {
      background-color: ${(props) => props.theme.azure};
      border-color: ${(props) => props.theme.azure};
      &::before {
        display: block;
      }
    }
  }
`;

export default Information;
