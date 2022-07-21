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
  EuiProgress,
  EuiHorizontalRule,
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
          disabled={!guideOpen}
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
                <EuiText size="m">
                  <p>{data.intro}</p>
                </EuiText>
                {data.link && (
                  <>
                    <EuiSpacer size="s" />
                    <EuiButtonEmpty
                      iconType="popout"
                      iconSide="right"
                      href={data.link.url}
                      style={{ marginLeft: '-8px' }}>
                      {data.link.title}
                    </EuiButtonEmpty>
                  </>
                )}
                {data.progress && (
                  <>
                    <EuiSpacer size="l" />
                    <EuiProgress
                      valueText={`${data.progress}%`}
                      value={data.progress}
                      max={100}
                      size="l"
                      label="Progress"
                    />
                  </>
                )}
                <EuiSpacer size="m" />
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
              <EuiHorizontalRule />
              <EuiSpacer size="s" />
              <EuiText color="subdued" textAlign="center">
                Got questions? We’re here to help -{' '}
                <a href="#" style={{ fontWeight: '400' }}>
                  contact us
                </a>
                .
              </EuiText>
              <EuiSpacer size="m" />
            </EuiFlyoutFooter>
          </>
        </EuiFlyout>
      )}
    </>
  );
};

export default Guide;
