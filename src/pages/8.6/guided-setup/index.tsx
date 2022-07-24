import { useState } from 'react';
import {
  EuiSpacer,
  EuiButton,
  EuiTitle,
  EuiText,
  EuiLink,
  EuiCard,
  EuiFlexItem,
  EuiPanel,
  EuiFlexGrid,
  EuiHorizontalRule,
  useEuiTheme,
} from '@elastic/eui';
import KibanaLayout from '../../../layouts/kibana/kibana';
import { gettingSetupStyles } from './guided-setup.styles';

const CARDS = [
  {
    title: 'Search my data',
    image: 'illustration-search.png',
    description:
      'Create a search experience for your websites, applications, workplace content, or anything in between.',
    icon: 'logoElasticsearch',
    guidePath: '',
    section: 'Search',
  },
  {
    title: 'Observe my infrastructure',
    image: 'illustration-observability.png',
    description:
      'Monitor your infrastructure by consolidating your logs, metrics, and traces for end‑to‑end observability.',
    icon: 'logoObservability',
    guidePath: '',
    section: 'Observability',
  },
  {
    title: 'Protect my environment',
    image: 'illustration-security.png',
    description:
      'Protect your environment by unifying SIEM, endpoint security, and cloud security to protect against threats.',
    icon: 'logoSecurity',
    guidePath: '',
    section: 'Security',
  },
  {
    title: 'Protect my environment',
    image: 'illustration-security.png',
    description:
      'Protect your environment by unifying SIEM, endpoint security, and cloud security to protect against threats.',
    icon: 'logoSecurity',
    guidePath: '',
    section: 'Security',
  },
  {
    title: 'Search my data',
    image: 'illustration-search.png',
    description:
      'Create a search experience for your websites, applications, workplace content, or anything in between.',
    icon: 'logoElasticsearch',
    guidePath: '',
    section: 'Search',
  },
  {
    title: 'Observe my infrastructure',
    image: 'illustration-observability.png',
    description:
      'Monitor your infrastructure by consolidating your logs, metrics, and traces for end‑to‑end observability.',
    icon: 'logoObservability',
    guidePath: '',
    section: 'Observability',
  },
];

const GettingStarted = () => {
  const { euiTheme } = useEuiTheme();
  const styles = gettingSetupStyles(euiTheme);
  const [guideOpen, setGuide] = useState(false);
  const [section, setSection] = useState('Observability');
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleGuideClick = (section?: string) => {
    setGuide(!guideOpen);
    setButtonDisabled(!buttonDisabled);
    if (section) {
      setSection(section);
    }
  };

  return (
    <KibanaLayout
      template="empty"
      guideOpen={guideOpen}
      section={section}
      buttonDisabled={buttonDisabled}
      onClick={() => handleGuideClick(section)}>
      <EuiSpacer
        size="xxl"
        className="eui-hideFor--xs eui-hideFor--s eui-hideFor--m"
      />
      <EuiPanel paddingSize="l">
        <div css={styles.container}>
          <EuiTitle size="l" className="eui-textCenter">
            <h1>What would you like to do&nbsp;first?</h1>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiText color="subdued" size="s" textAlign="center">
            <p>
              Select an option below to get a quick tour of the most valuable
              features based on your preferences.
            </p>
          </EuiText>
          <EuiSpacer size="s" />
          <EuiSpacer size="xxl" />
          <EuiFlexGrid columns={3} gutterSize="xl">
            {CARDS.map((card, index) => (
              <EuiFlexItem key={index}>
                <EuiCard
                  display="subdued"
                  image={`../images/${card.image}`}
                  onClick={() => handleGuideClick(card.section)}
                  paddingSize="l"
                  textAlign="left"
                  title={card.title}
                  description={card.description}
                  footer={
                    <div style={{ textAlign: 'center' }}>
                      <EuiButton fill>View guide</EuiButton>
                    </div>
                  }
                  titleSize="xs"
                />
              </EuiFlexItem>
            ))}
          </EuiFlexGrid>
          <EuiHorizontalRule margin="xl" />
          <EuiText size="s" textAlign="center">
            <EuiLink href="#">I'd like to do something else (Skip)</EuiLink>
          </EuiText>
        </div>
      </EuiPanel>
    </KibanaLayout>
  );
};

export default GettingStarted;
