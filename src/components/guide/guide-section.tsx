import {
  EuiButton,
  EuiText,
  EuiSpacer,
  EuiAccordion,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiIcon,
} from '@elastic/eui';
import { useRouter } from 'next/router';
import { guideStyles } from './guide.styles';

type GuideSectionProps = {
  title: string;
  description: string;
  completed: boolean;
};

const GuideSection = ({ title, description, completed }: GuideSectionProps) => {
  const styles = guideStyles();
  const router = useRouter();

  return (
    <>
      <EuiFlexGroup
        gutterSize="none"
        responsive={false}
        aria-label="guided-tour-step">
        <EuiFlexItem grow={false}>
          <div css={completed && styles.checkFill}>
            {completed ? <EuiIcon type="check" size="m" color="white" /> : null}
          </div>
        </EuiFlexItem>
        <EuiFlexItem grow={1}>
          <EuiAccordion
            id="step1"
            arrowDisplay="right"
            buttonContent={title}
            paddingSize="none">
            <EuiPanel paddingSize="none">
              <EuiSpacer size="s" />
              <EuiText size="s">{description}</EuiText>
              <EuiSpacer size="m" />
              <EuiFlexGroup justifyContent="flexEnd">
                <EuiFlexItem grow={false}>
                  <EuiButton
                    fill
                    onClick={() => router.push('guided-setup/guide-step')}>
                    Start
                  </EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>
          </EuiAccordion>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
};

export default GuideSection;
