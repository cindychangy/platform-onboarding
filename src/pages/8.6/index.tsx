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
  EuiFieldPassword,
  EuiHorizontalRule,
  EuiButtonEmpty,
  useEuiTheme,
} from '@elastic/eui';
import Header from '../../components/header/header';
import { homeStyles } from './home.styles';

const Homepage = () => {
  const { euiTheme } = useEuiTheme();
  const styles = homeStyles(euiTheme);
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
      <Header accountType="login" />
      <div css={styles.formContainer}>
        <EuiFlexGroup
          direction="row"
          justifyContent="center"
          alignItems="flexStart">
          <EuiFlexItem grow={false}>
            <EuiPanel paddingSize="l" css={styles.formPanel}>
              <div css={styles.panelSpace}>
                <EuiSpacer size="s" />
                <EuiTitle size="s">
                  <EuiTextAlign textAlign="center">
                    <h1>Log in</h1>
                  </EuiTextAlign>
                </EuiTitle>
                <EuiSpacer size="xl" />
                <EuiFormRow label="Email">
                  <EuiFieldText icon="user" fullWidth />
                </EuiFormRow>
                <EuiSpacer size="l" />
                <EuiFormRow label="Password">
                  <EuiFieldPassword type="dual" fullWidth />
                </EuiFormRow>
                <EuiSpacer size="l" />
                <EuiButton
                  fill
                  fullWidth
                  isLoading={isLoading}
                  onClick={() => handleClick()}>
                  Log in
                </EuiButton>
                <EuiSpacer size="m" />
                <div css={styles.password}>
                  <EuiButtonEmpty href="#">Forgot password?</EuiButtonEmpty>
                </div>
                <EuiFlexGroup
                  alignItems="center"
                  gutterSize="s"
                  responsive={false}>
                  <EuiFlexItem>
                    <EuiHorizontalRule />
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiText color="subdued" size="s">
                      Or log in with
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
              </div>
            </EuiPanel>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>
    </>
  );
};

export default Homepage;
