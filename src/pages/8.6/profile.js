/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import {
  EuiPanel,
  EuiText,
  EuiTextColor,
  EuiHorizontalRule,
  EuiForm,
  EuiFieldText,
  EuiSpacer,
  EuiButtonGroup,
  EuiRadioGroup,
  EuiFlexGroup,
  EuiFlexItem,
  EuiButton,
} from '@elastic/eui';
import Header from '../../components/header';
import { EXPERIENCE, PURPOSE } from '../../constants/profile.data';

const Profile = () => {
  const router = useRouter();
  const [experience, setExperience] = useState('');
  const [purpose, setPurpose] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('create-deployment');
    }, 500);
  };

  return (
    <>
      <Header signedIn />
      <div
        css={css`
          max-width: 550px;
          margin: auto;
          width: 100%;
        `}>
        <EuiPanel paddingSize="l">
          <div
            css={css`
              padding: 30px;
            `}>
            <EuiText size="s" textAlign="center">
              <h1>Welcome to Elastic</h1>
              <EuiTextColor color="subdued">
                <p>Provide the info below for the best Elastic experience.</p>
              </EuiTextColor>
            </EuiText>
            <EuiHorizontalRule margin="xl" />
            <EuiForm component="form">
              <EuiText size="s">
                <b>Full Name</b>
              </EuiText>
              <EuiSpacer size="s" />
              <EuiFieldText name="first" />

              <EuiSpacer size="l" />
              <EuiText size="s">
                <b>Company</b>
              </EuiText>
              <EuiFieldText name="company" />

              <EuiSpacer size="l" />
              <EuiText size="s">
                <p>
                  <b>When it comes to Elastic, I'm...</b>
                </p>
              </EuiText>

              <EuiSpacer size="s" />
              <EuiButtonGroup
                legend="What is your familiarity with Elastic?"
                name="familiarity"
                idSelected={experience}
                color="primary"
                isFullWidth
                onChange={experience => setExperience(experience)}
                options={EXPERIENCE}
              />

              <EuiSpacer size="l" />
              <EuiText size="s">
                <p>
                  <b>Right now, I'd like to...</b>
                </p>
              </EuiText>

              <EuiSpacer size="l" />
              <EuiPanel color="subdued">
                <EuiRadioGroup
                  idSelected={purpose}
                  options={PURPOSE}
                  onChange={purpose => setPurpose(purpose)}
                  compressed
                />
              </EuiPanel>

              <EuiSpacer size="l" />

              <EuiFlexGroup alignItems="center">
                <EuiFlexItem grow={false}>
                  <EuiButton
                    fill
                    isLoading={isLoading}
                    onClick={() => handleClick()}>
                    Next
                  </EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiForm>
          </div>
        </EuiPanel>
      </div>
    </>
  );
};

export default Profile;
