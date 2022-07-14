import { FunctionComponent } from 'react';
import CollapsibleNav from './kibana_collapsible_nav';
import { kibanaLayoutStyles } from './kibana.styles';
import { EuiPageTemplate, EuiPageTemplateProps } from '@elastic/eui';

type KibanaLayoutProps = EuiPageTemplateProps & {
  guideOpen: boolean;
  onClick: (section?: string) => void;
  section?: string;
};

const KibanaLayout: FunctionComponent<KibanaLayoutProps> = ({
  onClick,
  guideOpen,
  section,
  children,
  ...rest
}) => {
  const styles = kibanaLayoutStyles();
  return (
    <div css={styles.mainWrapper}>
      <CollapsibleNav
        onClick={onClick}
        guideOpen={guideOpen}
        section={section}
      />

      <div css={styles.contentWrapper} className="fullBody">
        <EuiPageTemplate restrictWidth {...rest}>
          {children}
        </EuiPageTemplate>
      </div>
    </div>
  );
};

export default KibanaLayout;
