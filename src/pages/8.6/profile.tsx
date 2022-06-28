import { useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiButton,
  EuiButtonGroup,
  EuiFieldText,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiImage,
  EuiPanel,
  EuiRadioGroup,
  EuiSpacer,
  EuiText,
  EuiTextColor,
  useEuiTheme,
} from '@elastic/eui';

const ProfilePage = () => {
  const { euiTheme } = useEuiTheme();
  const [experience, setExperience] = useState('');
  const [purpose, setPurpose] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/8.6/create-deployment');
    }, 500);
  };

  const ContainerPadding = css`
    padding: 32px 32px 0;
  `;

  const LogoPosition = css`
    left: 50%;
    position: absolute;
    top: 40px;
    transform: translate(-50%, 0);
  `;

  const PanelSizing = css`
    margin: 0 auto;
    max-width: 550px;
    width: 100%;
    @media only screen and (min-width: ${euiTheme.breakpoint.s}px) {
      padding: 48px 56px;
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
        <EuiFlexGroup justifyContent="flexEnd">
          <EuiFlexItem grow={false}>
            <EuiButton
              onClick={() => router.push('/')}
              size="s"
              css={css`
                min-width: 0;
              `}>
              Log out
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </div>

      <EuiSpacer size="xxl" />
      <EuiSpacer size="xxl" />

      <EuiPanel css={PanelSizing} paddingSize="l">
        <EuiText size="s" textAlign="center">
          <h1>Welcome to Elastic</h1>
          <EuiTextColor color="subdued">
            <p>Provide the info below for the best Elastic experience.</p>
          </EuiTextColor>
        </EuiText>

        <EuiHorizontalRule margin="xl" />

        <EuiText size="s">
          <p>
            <b>Full name</b>
          </p>
        </EuiText>
        <EuiSpacer size="s" />
        <EuiFieldText fullWidth />
        <EuiSpacer size="l" />
        <EuiText size="s">
          <p>
            <b>Company</b>
          </p>
        </EuiText>
        <EuiSpacer size="s" />
        <EuiFieldText fullWidth />

        <EuiSpacer size="l" />

        <EuiText size="s">
          <p>
            <b>When it comes to Elastic, I'm...</b>
          </p>
        </EuiText>
        <EuiSpacer size="s" />
        <EuiButtonGroup
          color="primary"
          legend="what is your familiarity with Elastic?"
          name="familiarity"
          idSelected={experience}
          onChange={experienceId => {
            setExperience(experienceId);
          }}
          isFullWidth
          options={[
            {
              id: `buttonGroup__0`,
              label: `New`,
            },
            {
              id: `buttonGroup__1`,
              label: `Familiar`,
            },
            {
              id: `buttonGroup__2`,
              label: `An expert`,
            },
          ]}
        />

        <EuiSpacer size="l" />

        <EuiText size="s">
          <p>
            <b>Right now, I'd like to...</b>
          </p>
        </EuiText>
        <EuiSpacer size="s" />
        <EuiPanel color="subdued">
          <EuiRadioGroup
            compressed
            options={[
              {
                id: `purpose__0`,
                label: 'Evaluate Elastic for my project or use case',
              },
              {
                id: `purpose__1`,
                label: 'Set up Elastic for an active project',
              },
              {
                id: `purpose__2`,
                label: 'Migrate an existing Elasticsearch environment',
              },
              {
                id: `purpose__3`,
                label: 'Learn more about Elastic',
              },
              {
                id: `purpose__4`,
                label: 'Do something else',
              },
            ]}
            idSelected={purpose}
            onChange={purposeId => {
              setPurpose(purposeId);
            }}
            name="purpose"
          />
          {purpose === `purpose__4` && (
            <>
              <EuiSpacer size="s" />
              <EuiFieldText
                compressed
                fullWidth
                placeholder="More detail (optional)"
              />
            </>
          )}
        </EuiPanel>

        <EuiSpacer size="l" />

        <EuiFlexGroup alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiButton fill isLoading={isLoading} onClick={() => handleClick()}>
              Next
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
      </EuiPanel>
      <EuiSpacer size="xxl" />
    </>
  );
};

export default ProfilePage;
