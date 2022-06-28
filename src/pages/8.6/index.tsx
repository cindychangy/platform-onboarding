import * as React from 'react';
import { useRouter } from 'next/router';
import {
  EuiButton,
  EuiFieldPassword,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiFormRow,
  EuiHorizontalRule,
  EuiImage,
  EuiPanel,
  EuiSpacer,
  EuiText,
  EuiTitle,
  useEuiTheme,
} from '@elastic/eui';
import { css } from '@emotion/react';

const IndexPage = () => {
  const { euiTheme } = useEuiTheme();
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/8.6/profile');
    }, 1000);
  };

  const ContainerPadding = css`
    @media only screen and (min-width: ${euiTheme.breakpoint.s}px) {
      padding: 32px;
    }
  `;

  const LogoPosition = css`
    left: 50%;
    position: absolute;
    top: 40px;
    transform: translate(-50%, 0);
  `;

  const PanelSizing = css`
    margin: 0 auto;
    max-width: 450px;
    width: 100%;
    @media only screen and (min-width: ${euiTheme.breakpoint.s}px) {
      padding: 56px;
    }
  `;

  return (
    <>
      <div css={LogoPosition}>
        <EuiImage
          size={170}
          src="/images/logo-elastic.png"
          alt="elastic logo"
        />
      </div>
      <div css={ContainerPadding}>
        <EuiFlexGroup alignItems="center" gutterSize="m" responsive={false}>
          <EuiFlexItem>
            <EuiText textAlign="right" size="s">
              <p
                css={css`
                  margin-bottom: 0 !important;
                `}>
                Already have an account?
              </p>
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton
              fill
              size="s"
              css={css`
                min-width: 0;
              `}>
              Log in
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>

        <EuiSpacer size="xxl" />
        <EuiSpacer size="xxl" />

        <EuiPanel css={PanelSizing} paddingSize="l">
          <EuiTitle className="eui-textCenter">
            <h2>Start your free trial</h2>
          </EuiTitle>
          <EuiSpacer size="xs" />
          <EuiText color="subdued" size="s" textAlign="center">
            <p>No credit card required</p>
          </EuiText>

          <EuiSpacer size="l" />

          <EuiFormRow label="Email">
            <EuiFieldText icon="email" fullWidth />
          </EuiFormRow>
          <EuiSpacer size="m" />
          <EuiFormRow label="Password">
            <EuiFieldPassword type="dual" fullWidth />
          </EuiFormRow>
          <EuiSpacer size="l" />
          <EuiButton
            fill
            fullWidth
            isLoading={isLoading}
            onClick={() => handleClick()}>
            Sign up with email
          </EuiButton>

          <EuiSpacer size="m" />

          <EuiFlexGroup alignItems="center" gutterSize="s" responsive={false}>
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

          <EuiSpacer size="m" />

          <EuiFlexGroup gutterSize="s" responsive={false}>
            <EuiFlexItem>
              <EuiButton iconSide="left" iconType={'/images/icon-google.svg'}>
                Google
              </EuiButton>
            </EuiFlexItem>
            <EuiFlexItem>
              <EuiButton
                iconSide="left"
                iconType={'/images/icon-microsoft.svg'}>
                Microsoft
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiPanel>

        <EuiSpacer size="xl" />

        <EuiText
          color="subdued"
          size="xs"
          textAlign="center"
          css={css`
            margin: 0 auto;
            max-width: 350px;
          `}>
          <p>
            By signing up, you acknowledge that you&apos;ve read and agree to
            our <a href="https://www.elastic.co">Terms of Service</a>
            &nbsp;and&nbsp;
            <a href="https://www.elastic.co">Privacy Statement</a>.
          </p>
        </EuiText>
      </div>
    </>
  );
};

export default IndexPage;
