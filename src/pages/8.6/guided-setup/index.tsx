import { useState } from 'react';
import {
  EuiBadge,
  EuiButtonEmpty,
  EuiSpacer,
  EuiTitle,
  EuiText,
  EuiLink,
  EuiTextColor,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiHorizontalRule,
  useEuiTheme,
} from '@elastic/eui';
import KibanaLayout from '../../../layouts/kibana';
import { gettingSetupStyles } from '../../../styles/guided-setup.styles';

const CARDS = [
  {
    title: 'Search my data',
    description:
      'Create a search experience for your websites, applications, workplace content, or anything in between.',
    icon: 'logoElasticsearch',
    footer: <EuiBadge color="hollow">Search</EuiBadge>,
    section: 'Search',
  },
  {
    title: 'Observe my infrastructure',
    description:
      'Monitor your infrastructure by consolidating your logs, metrics, and traces for end‑to‑end observability.',
    icon: 'logoObservability',
    footer: <EuiBadge color="hollow">Observability</EuiBadge>,
    section: 'Observability',
  },
  {
    title: 'Protect my environment',
    description:
      'Protect your environment by unifying SIEM, endpoint security, and cloud security to protect against threats.',
    icon: 'logoSecurity',
    footer: <EuiBadge color="hollow">Security</EuiBadge>,
    section: 'Security',
  },
];

const GettingStarted = () => {
  const { euiTheme } = useEuiTheme();
  const styles = gettingSetupStyles(euiTheme);
  const [guideOpen, setGuide] = useState(false);
  const [section, setSection] = useState('Observability');

  const handleGuideClick = (section?: string) => {
    setGuide(!guideOpen);
    if (section) {
      setSection(section);
    }
  };

  return (
    <KibanaLayout
      template="empty"
      style={{ background: '#fff' }}
      guideOpen={guideOpen}
      section={section}
      onClick={() => handleGuideClick(section)}>
      <div css={styles.container}>
        <EuiTitle size="l">
          <h1>What would you like to do first?</h1>
        </EuiTitle>
        <EuiSpacer size="s" />
        <EuiText>
          <EuiTextColor color="subdued">
            <p>
              Select an option below for a guided setup to help you quickly get
              started with Elastic.
            </p>
          </EuiTextColor>
        </EuiText>
      </div>
      <EuiSpacer size="xxl" />

      <EuiFlexGroup gutterSize="s">
        {CARDS.map((card, index) => (
          <EuiFlexItem grow={false} key={index}>
            <EuiCard
              icon={
                <div css={styles.icon}>
                  <EuiIcon size="m" type={card.icon} />
                </div>
              }
              title={card.title}
              titleSize="xs"
              description={card.description}
              footer={card.footer}
              hasBorder
              textAlign="center"
              display="transparent"
              onClick={() => handleGuideClick(card.section)}
            />
          </EuiFlexItem>
        ))}
      </EuiFlexGroup>

      <EuiHorizontalRule margin="xxl" />

      <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
        <EuiFlexItem grow={false}>
          <EuiButtonEmpty iconType="indexOpen" href="">
            Not ready to dive in? Check out our sample data.
          </EuiButtonEmpty>
        </EuiFlexItem>
        <EuiFlexItem grow={false}>
          <EuiLink href="" color="subdued">
            I’ll explore on my own (skip)
          </EuiLink>
        </EuiFlexItem>
      </EuiFlexGroup>
    </KibanaLayout>
  );
};

export default GettingStarted;
