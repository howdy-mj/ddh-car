import Head from 'next/head';
import { Header, Footer, Accordion } from '@components/index';
import Information from '@layout/information/Information';

export default function Home() {
  return (
    <div>
      <Head>
        <title>김민정-똑똑한 중고차</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Accordion title="중고차 1" />
        <Information />
      </main>
      <Footer />
    </div>
  );
}
