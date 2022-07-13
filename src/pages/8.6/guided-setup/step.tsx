import { useState } from 'react';
import { EuiTitle, useEuiTheme } from '@elastic/eui';
import KibanaLayout from '../../../layouts/kibana';
import { gettingSetupStyles } from '../../../styles/guided-setup.styles';

const GuideSetup = () => {
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
      onClick={handleGuideClick}>
      <div css={styles.container}>
        <EuiTitle size="m">
          <h1>Guided Setup Step 1</h1>
        </EuiTitle>
      </div>
    </KibanaLayout>
  );
};

export default GuideSetup;
