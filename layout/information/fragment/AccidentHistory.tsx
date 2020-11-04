import React from 'react';
import { Button } from '@components/index';
import { autorun } from 'mobx';

interface AccidentHistoryProps {
  id: number;
  label: string;
  has: boolean;
}

const accidentHistory = [
  { id: 1, label: '사고 이력 있음', has: true },
  { id: 2, label: '사고 이력 없음', has: false },
];

const AccidentHistory = ({ registerCarStore }) => {
  autorun(() => registerCarStore.result.accidentHistory);

  return (
    <>
      {accidentHistory.map((history) => (
        <Button
          key={history.id}
          label={history.label}
          onClick={() => registerCarStore.hasAccident(history.has)}
          selected={registerCarStore.result.accidentHistory === history.has}
        />
      ))}
    </>
  );
};

export default AccidentHistory;
