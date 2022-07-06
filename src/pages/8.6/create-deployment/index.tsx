import { useState } from 'react';
import {
  EuiButton,
  EuiSpacer,
  EuiPanel,
  EuiTitle,
  EuiText,
  EuiHorizontalRule,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiLink,
} from '@elastic/eui';
import Navbar from '../../../components/navbar/navbar';
import { deploymentStyles } from '../../../styles/create-deployment.styles';
import { useRouter } from 'next/router';

const BREADCRUMBS = [
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
];

const CreateDeployment = () => {
  const styles = deploymentStyles();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/8.6/getting-started');
    }, 3500);
  };

  return (
    <>
      <Navbar breadcrumbs={BREADCRUMBS} />
      <EuiSpacer size="xxl" />
      <EuiPanel paddingSize="none" css={styles.panel}>
        <div css={styles.panelContainer}>
          <EuiTitle>
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
          <EuiSpacer size="s" />
          <EuiHorizontalRule />
          <EuiSpacer size="s" />

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
                  GCP Iowa (us-central1) &nbsp;{' '}
                  <EuiLink href="#">Edit settings</EuiLink>
                </p>
              </EuiText>
              <EuiText color="subdued" size="xs">
                <p>Storage optimized, 8.1.3</p>
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
        </div>
        <EuiPanel css={styles.buttonPanel}>
          <EuiButton fill isLoading={isLoading} onClick={() => handleClick()}>
            Create deployment
          </EuiButton>
        </EuiPanel>
      </EuiPanel>
    </>
  );
};

export default CreateDeployment;
