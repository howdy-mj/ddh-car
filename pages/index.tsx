import React, { FC } from 'react';
import Head from 'next/head';
import { Header, Footer, Accordion } from '@components/index';
import Information from '@layout/information/Information';
import { AddMore } from '@components/index';

const Home: FC = () => {
  return (
    <div>
      <Head>
        <title>김민정-똑똑한 중고차</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Accordion title="중고차 1" children={<Information />} />
        <AddMore />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
