import {
  EuiFlexGroup,
  EuiFlexItem,
  EuiImage,
  EuiText,
  EuiButton,
} from '@elastic/eui';
import { useRouter } from 'next/router';
import { headerStyles } from './header.styles';

type HeaderProps = {
  accountType?: 'login' | 'signup';
  signedIn?: boolean;
};

const Header = ({ accountType, signedIn }: HeaderProps) => {
  const styles = headerStyles();
  const router = useRouter();
  const login = accountType === 'login';

  const handleClick = (route: string) => {
    setTimeout(() => {
      router.push(route);
    }, 1000);
  };

  return (
    <>
      <div css={styles.container}>
        {signedIn ? (
          <EuiFlexGroup justifyContent="flexEnd" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiButton minWidth={0} fill>
                Log out
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        ) : (
          <EuiFlexGroup justifyContent="flexEnd" alignItems="center">
            <EuiFlexItem grow={false}>
              <EuiText textAlign="right" size="s">
                {login ? "Don't have an account?" : 'Already have an account? '}
              </EuiText>
            </EuiFlexItem>
            <EuiFlexItem grow={false}>
              <EuiButton
                fill
                size="s"
                minWidth={0}
                onClick={
                  login
                    ? () => handleClick('./8.6/signup')
                    : () => handleClick('./')
                }>
                {login ? 'Sign up' : 'Log in'}
              </EuiButton>
            </EuiFlexItem>
          </EuiFlexGroup>
        )}
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
