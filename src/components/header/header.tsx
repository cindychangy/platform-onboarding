import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiText,
  EuiButton,
} from '@elastic/eui';
import { headerStyles } from './header.styles';

const Header = () => {
  const styles = headerStyles();

  return (
    <>
      <div css={styles.container}>
        <EuiFlexGroup justifyContent="flexEnd" alignItems="center">
          <EuiFlexItem grow={false}>
            <EuiText textAlign="right" size="s">
              Don't have an account?
            </EuiText>
          </EuiFlexItem>
          <EuiFlexItem grow={false}>
            <EuiButton fill size="s" minWidth={0}>
              Sign up
            </EuiButton>
          </EuiFlexItem>
        </EuiFlexGroup>
        <EuiImage
          size={170}
          src="/images/logo-elastic.png"
          alt="Elastic logo"
          css={styles.logo}
        />
      </div>
    </>
  );
};

export default Header;
