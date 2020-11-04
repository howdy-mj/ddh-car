import React from 'react';
import store from '@store/index';
import { Button } from '@components/index';

const makers = [
  { id: 1, label: '현대' },
  { id: 2, label: '르노 삼성' },
  { id: 3, label: '기아' },
  { id: 4, label: '쌍용' },
  { id: 5, label: 'GM 대우' },
  { id: 6, label: '기타' },
];

const ChooseMaker = () => {
  const { registerCarStore } = store;

  const changeMaker = (name) => {
    registerCarStore.selectMaker(name);
  };

  // console.log('current maker====', registerCarStore.result.maker);

  return (
    <>
      {makers.map((maker) => {
        return (
          <Button
            key={maker.id}
            label={maker.label}
            size="small"
            onClick={() => changeMaker(maker.label)}
            selected={registerCarStore.result.maker === maker.label}
          />
        );
      })}
    </>
  );
};

export default ChooseMaker;
