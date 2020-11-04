import React from 'react';
import { Button } from '@components/index';
import { autorun } from 'mobx';

const CTA = ({ registerCarStore }) => {
  // autorun(() => console.log(`change! ${registerCarStore.result.maker}`));
  const saveTemp = () => {
    const date = new Date();
    console.log(
      `${date.getFullYear()}.${date.getMonth()}.${date.getDate()} ${date.getHours()}:${date.getMinutes()} 임시저장 되었습니다.`
    );
  };
  return (
    <>
      <Button label="초기화" onClick={() => registerCarStore.reset()} />
      <Button label="임시저장" selected onClick={saveTemp} />
    </>
  );
};

export default CTA;
