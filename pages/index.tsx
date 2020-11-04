import React, { FC, useState } from 'react';
import Head from 'next/head';
import { Header, Footer, Accordion, AddMore } from '@components/index';
import Information from '@layout/information/Information';

const Home: FC = () => {
  const [total, setTotal] = useState<number[]>([1]);
  const addAnotherCar = () => {
    setTotal([...total, total.length + 1]);
  };

  return (
    <div>
      <Head>
        <title>김민정-똑똑한 중고차</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        {total.map((count) => (
          <Accordion
            key={`accordion-${count}`}
            title={`중고차 ${count}`}
            children={<Information />}
          />
        ))}
        <AddMore addAnotherCar={addAnotherCar} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
