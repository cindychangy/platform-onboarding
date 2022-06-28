import { FunctionComponent } from 'react';
import Head from 'next/head';
import { EuiSpacer } from '@elastic/eui';

const Index: FunctionComponent = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Wrapper>
        <HomeHero />

        <EuiSpacer size="xxl" />
        <EuiSpacer size="xxl" />

        <HomeWhy />

        <EuiSpacer size="xxl" />
        <EuiSpacer size="xxl" />
        <EuiSpacer size="xxl" />

        <HomeTemplates />

        <EuiSpacer size="xxl" />
        <EuiSpacer size="xxl" />
      </Wrapper>
    </>
  );
};

export default Index;
