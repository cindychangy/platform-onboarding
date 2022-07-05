import { useState } from 'react';
import { useRouter } from 'next/router';
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
import Header from '../../../components/header/header';
import { profileStyles } from './profile.styles';

const ProfilePage = () => {
  const styles = profileStyles();
  const router = useRouter();
  const [experience, setExperience] = useState('');
  const [purpose, setPurpose] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/8.6/create-deployment');
    }, 500);
  };

  const optionsExperience = [
    {
      id: `new`,
      label: `New`,
    },
    {
      id: `familiar`,
      label: `Familiar`,
    },
    {
      id: `expert`,
      label: `Expert`,
    },
  ];

  const optionsPurpose = [
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
  ];

  return (
    <>
      <Header />
      <div css={styles.formContainer}>
        <EuiPanel paddingSize="l">
          <div css={styles.panel}>
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
                onChange={(experience: string) => setExperience(experience)}
                options={optionsExperience}
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
                  options={optionsPurpose}
                  onChange={(purpose: string) => setPurpose(purpose)}
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

export default ProfilePage;
