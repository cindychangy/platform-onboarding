import {
  EuiBadge,
  EuiButtonEmpty,
  EuiSpacer,
  EuiTitle,
  EuiText,
  EuiTextColor,
  EuiCard,
  EuiFlexGroup,
  EuiFlexItem,
  EuiIcon,
  EuiHorizontalRule,
  useEuiTheme,
} from '@elastic/eui';
import { useRouter } from 'next/router';
import Navbar from '../../../components/navbar/navbar';
import { gettingStartedStyles } from '../../../styles/geting-started.styles';

const BREADCRUMBS = [
  {
    text: 'Home',
    href: '#',
  },
  {
    text: 'Getting Started',
  },
];

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

const GettingStarted = () => {
  const { euiTheme } = useEuiTheme();
  const styles = gettingStartedStyles(euiTheme);
  const router = useRouter();

  return (
    <>
      <div css={styles.bg}>
        <Navbar breadcrumbs={BREADCRUMBS} />
        <div css={styles.container}>
          <EuiTitle size="l">
            <h1>What would you like to do first?</h1>
          </EuiTitle>
          <EuiSpacer size="s" />
          <EuiText>
            <EuiTextColor color="subdued">
              <p>
                Select an option below for a guided setup to help you quickly
                get started with Elastic.
              </p>
            </EuiTextColor>
          </EuiText>
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
                  onClick={() => router.push('/')}
                />
              </EuiFlexItem>
            ))}
          </EuiFlexGroup>

          <EuiHorizontalRule margin="xxl" />

          <EuiFlexGroup alignItems="center" justifyContent="spaceBetween">
            <EuiFlexItem grow={false}>
              <EuiButtonEmpty iconType="indexOpen" href="" flush="left">
                Not ready to dive in? Check out our sample data.
              </EuiButtonEmpty>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiText>
                <EuiTextColor color="subdued">
                  <small>I’ll explore on my own (skip)</small>
                </EuiTextColor>
              </EuiText>
            </EuiFlexItem>
          </EuiFlexGroup>
        </div>
      </div>
    </>
  );
};

export default GettingStarted;
