import {
  EuiButton,
  EuiText,
  EuiSpacer,
  EuiAccordion,
  EuiFlexGroup,
  EuiFlexItem,
  EuiPanel,
  EuiIcon,
  EuiHorizontalRule,
  // EuiProgress,
} from '@elastic/eui';
import { guideStyles } from './guide.styles';

type GuideSectionProps = {
  title: string;
  description: string;
  completed: boolean;
};

const GuideSection = ({ title, description, completed }: GuideSectionProps) => {
  const styles = guideStyles();

  return (
    <>
      <EuiFlexGroup gutterSize="none" responsive={false}>
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
                  <EuiButton fill href="">
                    Start
                  </EuiButton>
                </EuiFlexItem>
              </EuiFlexGroup>
            </EuiPanel>
          </EuiAccordion>
        </EuiFlexItem>
      </EuiFlexGroup>
      <EuiSpacer size="l" />
      <EuiHorizontalRule margin="none" />
      <EuiSpacer size="l" />
    </>
  );
};

export default GuideSection;
