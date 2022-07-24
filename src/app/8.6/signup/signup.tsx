import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiTitle,
  EuiText,
  EuiButton,
  EuiSpacer,
  EuiPanel,
  EuiTextAlign,
  EuiFormRow,
  EuiFieldText,
  EuiHorizontalRule,
  useEuiTheme,
} from '@elastic/eui';
import Header from '../../../components/header/header';
import { loginStyles } from '../login/login.styles';

const Signup = () => {
  const { euiTheme } = useEuiTheme();
  const styles = loginStyles(euiTheme);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/8.6/profile');
    }, 1000);
  };

  return (
    <>
      <Header accountType="signup" />
      <EuiFlexGroup direction="column" css={styles.header}>
        <EuiFlexItem>
          <EuiTitle size="m">
            <h1>Welcome to Elastic Cloud</h1>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiText color="subdued">
            <p>Get started in minutes</p>
          </EuiText>
        </EuiFlexItem>
      </EuiFlexGroup>
      <div css={styles.formContainer}>
        <EuiSpacer size="xxl" />
        <EuiFlexGroup
          direction="row"
          justifyContent="center"
          alignItems="flexStart">
          <EuiFlexItem grow={false}>
            <EuiPanel paddingSize="l" css={styles.formPanel}>
              <EuiTitle size="s">
                <EuiTextAlign textAlign="center">
                  <h3>Sign up for a free 14-day trial</h3>
                </EuiTextAlign>
              </EuiTitle>
              <EuiSpacer size="s" />
              <EuiText color="subdued" size="s">
                <EuiTextAlign textAlign="center">
                  <p>No credit card required</p>
                </EuiTextAlign>
              </EuiText>
              <EuiFormRow label="Email">
                <EuiFieldText icon="user" fullWidth />
              </EuiFormRow>
              <EuiFormRow label="Password">
                <EuiFieldText icon="lock" type="dual" fullWidth />
              </EuiFormRow>
              <EuiSpacer size="l" />
              <EuiButton
                fill
                fullWidth
                isLoading={isLoading}
                onClick={() => handleClick()}>
                Start free trial
              </EuiButton>
              <EuiFlexGroup
                alignItems="center"
                gutterSize="s"
                responsive={false}>
                <EuiFlexItem>
                  <EuiHorizontalRule />
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiText color="subdued" size="s">
                    Or sign up with
                  </EuiText>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiHorizontalRule />
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiFlexGroup gutterSize="s" responsive={false}>
                <EuiFlexItem>
                  <EuiButton
                    iconSide="left"
                    iconType={'./images/icon-google.svg'}>
                    Google
                  </EuiButton>
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiButton
                    iconSide="left"
                    iconType={'./images/icon-microsoft.svg'}>
                    Microsoft
                  </EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
              <EuiSpacer size="m" />
              <EuiText color="subdued" size="xs" textAlign="center">
                <p>
                  By signing up, you acknowledge that you&apos;ve read and agree
                  to our <a href="https://www.elastic.co">Terms of Service</a>
                  &nbsp;and&nbsp;
                  <a href="https://www.elastic.co">Privacy Statement</a>.
                </p>
              </EuiText>
            </EuiPanel>
          </EuiFlexItem>

          <EuiFlexItem grow={false}>
            <div css={styles.verticalRule}>
              <EuiText color="subdued" size="s" css={styles.ruleText}>
                OR
              </EuiText>
            </div>
          </EuiFlexItem>

          <EuiFlexItem grow={false}>
            <EuiPanel paddingSize="l">
              <EuiTitle size="s">
                <EuiTextAlign textAlign="center">
                  <h3>Subscribe via your cloud marketplace</h3>
                </EuiTextAlign>
              </EuiTitle>
              <EuiSpacer size="s" />
              <EuiText color="subdued" size="s">
                <EuiTextAlign textAlign="center">
                  Consolidate billing and utilize existing commitments
                </EuiTextAlign>
              </EuiText>
              <EuiFlexGroup
                direction="column"
                gutterSize="s"
                responsive={false}>
                <EuiSpacer size="l" />
                <EuiFlexItem>
                  <EuiButton iconSide="left" iconType={'./images/icon-aws.svg'}>
                    Amazon Web Services
                  </EuiButton>
                  <EuiSpacer size="m" />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiButton
                    iconSide="left"
                    iconType={'./images/icon-google.svg'}>
                    Google Cloud
                  </EuiButton>
                  <EuiSpacer size="m" />
                </EuiFlexItem>
                <EuiFlexItem>
                  <EuiButton
                    iconSide="left"
                    iconType={'./images/icon-azure.svg'}>
                    Microsoft Azure
                  </EuiButton>
                  <EuiSpacer size="m" />
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </>
  );
};

export default Signup;
