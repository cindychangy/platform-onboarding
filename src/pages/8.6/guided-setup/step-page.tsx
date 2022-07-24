import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  EuiTitle,
  EuiLoadingContent,
  EuiSpacer,
  EuiButton,
} from '@elastic/eui';
import KibanaLayout from '../../../layouts/kibana';

type GuideStepProps = {
  buttonDisabled: boolean;
};

const GuideStep = ({ buttonDisabled }: GuideStepProps) => {
  const [guideOpen, setGuide] = useState(false);
  const [stepCompleted, setStepCompleted] = useState(false);
  const router = useRouter();

  console.log(router);

  const handleGuideClick = () => {
    setGuide(!guideOpen);
  };

  const handleCompleteStep = () => {
    setGuide(true);
    setStepCompleted(true);
  };

  return (
    <KibanaLayout
      template="empty"
      style={{ background: '#fff' }}
      guideOpen={guideOpen}
      buttonDisabled={buttonDisabled}
      stepCompleted={stepCompleted}
      onClick={handleGuideClick}>
      <div>
        <EuiTitle size="l">
          <h1>Guided Tour Step</h1>
        </EuiTitle>
        <EuiSpacer size="xxl" />
        <EuiLoadingContent lines={10} />
        <EuiSpacer size="xxl" />
        <EuiButton onClick={handleCompleteStep} fill>
          Complete this step
        </EuiButton>
      </div>
    </KibanaLayout>
  );
};

export default GuideStep;
