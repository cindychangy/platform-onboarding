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
  EuiFlyoutFooter,
  EuiFlexGroup,
  EuiFlexItem,
  // EuiProgress,
} from '@elastic/eui';
import GuideSection from './guide-section';
import { guideStyles } from './guide.styles';
import {
  GUIDE_SEARCH,
  GUIDE_OBSERVABILITY,
  GUIDE_SECURITY,
} from './guide-data';

type GuideProps = {
  guideOpen: boolean;
  onClick: () => void;
  section?: string;
};

const Guide = ({ guideOpen, section, onClick }: GuideProps) => {
  const styles = guideStyles();
  let data = GUIDE_OBSERVABILITY;

  if (section === 'Search') {
    data = GUIDE_SEARCH;
  }

  if (section === 'Observability') {
    data = GUIDE_OBSERVABILITY;
  }

  if (section === 'Security') {
    data = GUIDE_SECURITY;
  }

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
          <>
            <EuiFlyoutHeader hasBorder>
              <EuiSpacer size="l" />
              <a href="#" onClick={onClick}>
                <EuiIcon type="arrowLeft" size="m" />
                Back to guides
              </a>
              <EuiSpacer size="m" />
              <EuiTitle size="m">
                <h2>{data.title}</h2>
              </EuiTitle>
            </EuiFlyoutHeader>

            <EuiFlyoutBody>
              <>
                {data.media && (
                  <>
                    <div dangerouslySetInnerHTML={{ __html: data.media }} />
                    <EuiSpacer size="m" />
                  </>
                )}
                {/* <EuiProgress value={90} max={100} size="l" label="Progress" /> */}
                <EuiText size="m">
                  <p>{data.intro}</p>
                </EuiText>
                <EuiSpacer size="xxl" />
                {data.steps.map(step => (
                  <GuideSection
                    key={step.title}
                    title={step.title}
                    description={step.description}
                    completed={step.completed}
                  />
                ))}
              </>
            </EuiFlyoutBody>
            <EuiFlyoutFooter>
              <EuiFlexGroup justifyContent="spaceBetween">
                <EuiFlexItem grow={false}>
                  <EuiButtonEmpty onClick={onClick}>Close</EuiButtonEmpty>
                </EuiFlexItem>
                <EuiFlexItem grow={false}>
                  <EuiButton fill href="">
                    {/* onClick={() => router.push('/8.6/guided-setup/step')} */}
                    Start Guide
                  </EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiFlyoutFooter>
          </>
        </EuiFlyout>
      )}
    </>
  );
};

export default Guide;
