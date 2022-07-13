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
  },
  {
    title: 'Observe my infrastructure',
    description:
      'Monitor your infrastructure by consolidating your logs, metrics, and traces for end‑to‑end observability.',
    icon: 'logoObservability',
    footer: <EuiBadge color="hollow">Observability</EuiBadge>,
  },
  {
    title: 'Protect my environment',
    description:
      'Protect your environment by unifying SIEM, endpoint security, and cloud security to protect against threats.',
    icon: 'logoSecurity',
    footer: <EuiBadge color="hollow">Security</EuiBadge>,
  },
];

const GuideSetup = () => {
  const { euiTheme } = useEuiTheme();
  const styles = gettingSetupStyles(euiTheme);
  const [guideOpen, setGuide] = useState(false);

  const handleGuideClick = () => {
    setGuide(!guideOpen);
  };

  return (
    <KibanaLayout
      template="empty"
      style={{ background: '#fff' }}
      guideOpen={guideOpen}
      onClick={handleGuideClick}>
      <div css={styles.container}>
        <EuiTitle size="m">
          <h1>Guided Setup Step 1</h1>
        </EuiTitle>
      </div>
    </KibanaLayout>
  );
};

export default GuideSetup;
