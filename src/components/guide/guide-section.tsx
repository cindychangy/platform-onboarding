import { useRouter } from 'next/router';
import {
  EuiButton,
  EuiText,
  EuiSpacer,
  EuiAccordion,
  EuiFlexGroup,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiPanel,
  EuiIcon,
} from '@elastic/eui';
import { guideStyles } from './guide.styles';

type GuideSectionProps = {
  title: string;
  description: string;
  stepCompleted: boolean;
  index: number;
};

const GuideSection = ({
  title,
  description,
  stepCompleted,
  index,
}: GuideSectionProps) => {
  const styles = guideStyles();
  const router = useRouter();

  return (
    <>
      <EuiFlexGroup
        gutterSize="none"
        responsive={false}
        aria-label={`step-${index}`}>
        <EuiFlexItem grow={false}>
          <div css={stepCompleted && index === 0 && styles.checkFill}>
            {stepCompleted ? (
              <EuiIcon type="check" size="m" color="white" />
            ) : null}
          </div>
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiAccordion
            id="step1"
            arrowDisplay="right"
            buttonContent={title}
            paddingSize="none"
            initialIsOpen={index === 0 ? true : false}>
            <EuiPanel
              paddingSize="none"
              css={stepCompleted && index === 0 ? styles.confetti : null}>
              <EuiSpacer size="s" />
              <EuiText size="s">{description}</EuiText>
              <EuiFlexGroup justifyContent="flexEnd">
                <EuiFlexItem grow={false}>
                  {(stepCompleted && index === 0) || index !== 0 ? null : (
                    <EuiButton
                      fill
                      onClick={() => router.push('guided-setup/step-page')}>
                      Start
                    </EuiButton>
                  )}
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>
          </EuiAccordion>
          <EuiHorizontalRule />
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
};

export default GuideSection;
