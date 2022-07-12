import { useState } from 'react';
import {
  EuiButton,
  EuiButtonEmpty,
  EuiIcon,
  EuiTitle,
  EuiText,
  EuiSpacer,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiFlexGroup,
  EuiFlexItem,
  // EuiProgress,
} from '@elastic/eui';
import GuideSection from './guide-section';
import { guideStyles } from './guide.styles';

type GuideProps = {
  guideOpen: boolean;
  onClick: () => void;
};

const Guide = ({ guideOpen, onClick }: GuideProps) => {
  const styles = guideStyles();

  const GUIDE_DATA = [
    {
      title: 'Monitor your environment',
      description:
        'Adding data is fast and easy with our out-of-the-box integrations. Quickly monitor popular cloud services, applications, systems, containers, and more.',
      completed: false,
    },
    {
      title: 'Tour Elastic Observability',
      description:
        'See how you can easily unlock the power of the Elastic search platform to query your logs, view your infrastructure, monitor applications, visualize your data, and more.',
      completed: true,
    },
    {
      title: 'Explore your data',
      description:
        'Query and analyze your data using the Discover app. Find any detail in your data, no matter how obscure or complex.',
      completed: false,
    },
    {
      title: 'Do more with Elastic Observability',
      description:
        'See how you can enhance visibility into your environment with capabilities from Elastic like Application Performance Monitoring (APM), Uptime Monitoring, and more.',
      completed: false,
    },
  ];

  return (
    <>
      <div css={styles.buttonContainer}>
        <EuiButton
          color="success"
          size="s"
          iconType="sortDown"
          onClick={onClick}
          key="guided-tour"
          fill>
          Guided Setup
        </EuiButton>
      </div>
      {!!guideOpen && (
        <EuiFlyout ownFocus onClose={onClick} aria-labelledby="guided-tour">
          <EuiFlyoutHeader hasBorder>
            <EuiSpacer size="l" />
            <a href="#" onClick={onClick}>
              <EuiIcon type="arrowLeft" size="m" />
              Back to guides
            </a>
            <EuiSpacer size="m" />
            <EuiTitle size="m">
              <h2>Observe my infrastructure</h2>
            </EuiTitle>
          </EuiFlyoutHeader>
          <EuiFlyoutBody>
            <div>
              <div css={styles.videoContainer}>
                <img
                  src="../images/guided-setup-video.png"
                  alt="video setup"
                  width="100%"
                  height="257"
                />
              </div>
              {/* <EuiProgress value={90} max={100} size="l" label="Progress" /> */}
              <EuiText size="m">
                <p>
                  We'll help you quickly gain visibility into your environment
                  using Elastic's out-of-the-box integrations. Gain deep
                  insights from your logs, metrics, and traces, and proactively
                  stay detect issues and take action to resolve issues.
                </p>
              </EuiText>
              <EuiSpacer size="xxl" />

              {GUIDE_DATA.map(section => (
                <GuideSection
                  key={section.title}
                  title={section.title}
                  description={section.description}
                  completed={section.completed}
                />
              ))}

              <EuiSpacer size="m" />
            </div>

            <div css={styles.panelFooter}>
              <div css={styles.panelFooter}>
                <EuiFlexGroup>
                  <EuiFlexItem grow={false}>
                    <EuiButtonEmpty onClick={onClick}>Close</EuiButtonEmpty>
                  </EuiFlexItem>
                  <EuiFlexItem grow={false}>
                    <EuiButton fill href="">
                      Start Guide
                    </EuiButton>
                  </EuiFlexItem>
                </EuiFlexGroup>
              </div>
            </div>
          </EuiFlyoutBody>
        </EuiFlyout>
      )}
    </>
  );
};

export default Guide;
