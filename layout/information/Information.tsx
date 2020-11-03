import React, { FC } from 'react';
import styled from 'styled-components';
import { Button, SubTitle, Flex, Description } from '@components/index';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import Input from '@material-ui/core/Input';
import { UploadImg, ChooseMaker } from './fragment';
import store from '@store/index';

interface State {
  price: string;
}

const Information: FC = () => {
  const { registerCarStore } = store;
  console.log(registerCarStore);
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
          <Button label="사고 이력 있음" selected />
          <Button label="사고 이력 없음" />
        </SelectWrap>
      </ItemDiv>
      <ItemDiv>
        <SubTitle>수리내역</SubTitle>
        <TextArea defaultValue="백도어(와이퍼 부착형)교환(도장), 리어범퍼 교환"></TextArea>
      </ItemDiv>
      <ItemDiv>
        <Flex>
          <SubTitle>제조사</SubTitle>
          <Description>외제차의 경우 체크하세요</Description>
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
            <Description>
              {registerCarStore.pictures[0].image === null
                ? 0
                : registerCarStore.pictures.length}{' '}
              / 10
            </Description>
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
          <Button label="초기화" />
          <Button label="임시저장" selected />
        </Flex>
      </ItemDiv>
    </div>
  );
};

const FormStyled = styled(FormControl)`
  width: 100%;
`;

const InputStyled = styled(Input)`
  height: 4.9rem;
  text-align: right;
`;

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

export default Information;
