import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  EuiButton,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiLink,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
  EuiIcon,
} from '@elastic/eui';
import { css } from '@emotion/react';

import Navbar from '../../components/navbar/navbar';

const Padding = css`
  padding: 40px 48px;
`;

const PaddingSmall = css`
  border-radius: 0 !important;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 12px !important;
  padding: 24px 48px !important;
`;

const Center = css`
  margin: 0 auto;
  max-width: 650px;
  overflow: hidden;
`;

const CreateDeploymentPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/8.6/question');
    }, 3500);
  };

  return (
    <>
      <Navbar
        breadcrumbs={[
          {
            text: 'Cloud',
            href: '#',
          },
          {
            text: 'Deployments',
            href: '#',
          },
          {
            text: 'Create',
          },
        ]}
      />
      <EuiSpacer size="xxl" />
      <EuiPanel paddingSize="none" css={Center}>
        <div css={Padding}>
          <EuiTitle size="m">
            <h2>Create your first deployment</h2>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiText color="subdued" grow={false} size="s">
            <p>
              A deployment includes Elasticsearch, Kibana, and other Elastic
              Stack features, allowing you to store, search, and analyze your
              data.
            </p>
          </EuiText>
          <EuiHorizontalRule margin="xl" />
          <EuiTitle size="xs">
            <h5>Name</h5>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiFieldText fullWidth placeholder="My deployment" />

          <EuiSpacer size="l" />

          <EuiFlexGroup gutterSize="s">
            <EuiFlexItem grow={false}>
              <EuiIcon type="/images/icon-gcp.svg" size="xxl" />
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiText size="s">
                <p>
                  GCP Iowa (us-central1) &nbsp;{}
                  <EuiLink href="#">Edit settings</EuiLink>
                </p>
              </EuiText>
              <EuiText color="subdued" size="xs">
                <p>Storage optimized, 8.1.3</p>
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
        </div>
        <EuiPanel css={PaddingSmall}>
          <EuiButton fill isLoading={isLoading} onClick={() => handleClick()}>
            Create deployment
          </EuiButton>
        </EuiPanel>
      </EuiPanel>
    </>
  );
};

export default CreateDeploymentPage;
