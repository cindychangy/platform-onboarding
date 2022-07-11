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
  EuiHorizontalRule,
  EuiAccordion,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  // EuiProgress,
} from '@elastic/eui';
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

              <EuiFlexGroup gutterSize="none">
                <EuiFlexItem grow={false}>
                  <div css={styles.checkEmpty} />
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiAccordion
                    id="step1"
                    arrowDisplay="right"
                    buttonContent="Monitor your environment"
                    paddingSize="none">
                    <EuiPanel paddingSize="none">
                      <EuiSpacer size="s" />
                      <EuiText size="s">
                        Adding data is fast and easy with our out-of-the-box
                        integrations. Quickly monitor popular cloud services,
                        applications, systems, containers, and more.
                      </EuiText>
                      <EuiSpacer size="m" />
                      <EuiFlexGroup justifyContent="flexEnd">
                        <EuiFlexItem grow={false}>
                          <EuiButton fill href="">
                            Continue
                          </EuiButton>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiPanel>
                  </EuiAccordion>
                </EuiFlexItem>
              </EuiFlexGroup>

              <EuiHorizontalRule margin="l" />
              <EuiFlexGroup gutterSize="none">
                <EuiFlexItem grow={false}>
                  <EuiFlexItem grow={false}>
                    <div css={styles.checkFill}>
                      <EuiIcon
                        type="check"
                        color="ghost"
                        style={{
                          width: '20px',
                          height: '20px',
                        }}
                      />
                    </div>
                  </EuiFlexItem>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiAccordion
                    id="step1"
                    arrowDisplay="right"
                    buttonContent="Tour Elastic Observability"
                    paddingSize="none">
                    <EuiPanel paddingSize="none">
                      <EuiSpacer size="s" />
                      <EuiText size="s">
                        See how you can easily unlock the power of the Elastic
                        search platform to query your logs, view your
                        infrastructure, monitor applications, visualize your
                        data, and more.
                      </EuiText>
                      <EuiSpacer size="m" />
                      <EuiFlexGroup justifyContent="flexEnd">
                        <EuiFlexItem grow={false}>
                          <EuiButton fill href="">
                            Continue
                          </EuiButton>
                        </EuiFlexItem>
                      </EuiFlexGroup>
                    </EuiPanel>
                  </EuiAccordion>
                </EuiFlexItem>
              </EuiFlexGroup>

              <EuiSpacer size="m" />
            </div>

            <div css={styles.panelFooter}>
              <div css={styles.panelFooter}>
                <EuiFlexGroup>
                  <EuiFlexItem grow={false}>
                    <EuiButtonEmpty onClick={() => setIsOpen(!isOpen)}>
                      Close
                    </EuiButtonEmpty>
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
