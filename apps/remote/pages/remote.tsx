import React from 'react';
import Head from 'next/head';

interface IProps {}

const RemotePage = (props: IProps) => (
  <div>
    <Head>
      <title>Remote Page</title>
    </Head>

    <div className="hero">
      <h1>Remote Page</h1>
    </div>
  </div>
);

export default RemotePage;
