import { useState } from 'react';
import {
  EuiTitle,
  useEuiTheme,
  EuiLoadingContent,
  EuiSpacer,
  EuiButton,
} from '@elastic/eui';
import KibanaLayout from '../../../layouts/kibana';
import { gettingSetupStyles } from '../../../styles/guided-setup.styles';

type GuideStepProps = {
  buttonDisabled: boolean;
};

const GuideStep = ({ buttonDisabled }: GuideStepProps) => {
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
      buttonDisabled={buttonDisabled}
      onClick={handleGuideClick}>
      <div>
        <EuiTitle size="l">
          <h1>A Guided Setup Step</h1>
        </EuiTitle>
        <EuiSpacer size="xxl" />
        <EuiLoadingContent lines={10} />
        <EuiSpacer size="xxl" />
        <EuiButton onClick={() => {}} fill>
          Complete this step
        </EuiButton>
      </div>
    </KibanaLayout>
  );
};

export default GuideStep;
