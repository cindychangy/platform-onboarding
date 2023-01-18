import { useState } from 'react';
import {
  EuiFlyout,
  EuiFlyoutBody,
  EuiFlyoutHeader,
  EuiButton,
  EuiText,
  EuiTitle,
  EuiCodeBlock,
  useGeneratedHtmlId,
} from '@elastic/eui';

const Index = () => {
  const [isFlyoutVisible, setIsFlyoutVisible] = useState(false);
  const simpleFlyoutTitleId = useGeneratedHtmlId({
    prefix: 'simpleFlyoutTitle',
  });

  let flyout;

  const htmlCode = `<EuiFlyout ...>
  <EuiFlyoutHeader hasBorder>
    <EuiTitle size="m">
      <h2></h2>
    </EuiTitle>
  </EuiFlyoutHeader>
  <EuiFlyoutBody>
    ...
  </EuiFlyoutBody>
</EuiFlyout>
`;

  if (isFlyoutVisible) {
    flyout = (
      <EuiFlyout
        ownFocus
        onClose={() => setIsFlyoutVisible(false)}
        aria-labelledby={simpleFlyoutTitleId}>
        <EuiFlyoutHeader hasBorder>
          <EuiTitle size="m">
            <h2 id={simpleFlyoutTitleId}>A typical flyout</h2>
          </EuiTitle>
        </EuiFlyoutHeader>
        <EuiFlyoutBody>
          <EuiText>
            <p>
              For consistency across the many flyouts, please utilize the
              following code for implementing the flyout with a header.
            </p>
          </EuiText>
          <EuiCodeBlock language="html">{htmlCode}</EuiCodeBlock>
        </EuiFlyoutBody>
      </EuiFlyout>
    );
  }

  return (
    <div>
      <EuiButton onClick={() => setIsFlyoutVisible(true)}>
        Show flyout
      </EuiButton>
      {flyout}
    </div>
  );
};

export default Index;
