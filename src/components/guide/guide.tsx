import { useState } from 'react';
import {
  EuiButton,
  EuiIcon,
  EuiTitle,
  EuiText,
  EuiSpacer,
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiAccordion,
  EuiPanel,
} from '@elastic/eui';
import Image from 'next/image';
import { guideStyles } from './guide.styles';

const Guide = () => {
  const styles = guideStyles();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div css={styles.buttonContainer}>
        <EuiButton
          color="success"
          size="s"
          iconType="sortDown"
          onClick={() => setIsOpen(!isOpen)}
          key="guided-tour"
          fill>
          Guided Setup
        </EuiButton>
      </div>
      {!!isOpen && (
        <EuiFlyout
          ownFocus
          onClose={() => setIsOpen(!isOpen)}
          aria-labelledby="guided-tour">
          <EuiFlyoutHeader hasBorder>
            <EuiSpacer size="l" />
            <a href="#">
              <EuiIcon type="arrowLeft" size="m" />
              Back to guides
            </a>
            <EuiSpacer size="m" />
            <EuiTitle size="m">
              <h2>Observe my infrastructure</h2>
            </EuiTitle>
          </EuiFlyoutHeader>
          <EuiFlyoutBody>
            <div css={styles.videoContainer}>
              <Image
                src="../../images/guided-setup-video.png"
                alt="video setup"
              />
            </div>
            <EuiText size="m">
              <p>
                This guide will help you quickly gain visibility into your
                environment and let you take action by collecting your logs,
                metrics, and traces using popular integrations. We recommend
                going in order.{' '}
              </p>
            </EuiText>
            <EuiAccordion
              id="step1"
              arrowDisplay="right"
              buttonContent="This accordion has the arrow on the right">
              <EuiPanel color="subdued">
                Any content inside of <strong>EuiAccordion</strong> will appear
                here.
              </EuiPanel>
            </EuiAccordion>
          </EuiFlyoutBody>
        </EuiFlyout>
      )}
    </>
  );
};

export default Guide;
