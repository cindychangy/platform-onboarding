import {
  EuiHeader,
  EuiHeaderLogo,
  EuiHeaderSectionItemButton,
  EuiAvatar,
  EuiBreadcrumb,
} from '@elastic/eui';

type NavbarProps = {
  breadcrumbs: EuiBreadcrumb[];
};

const Navbar = ({ breadcrumbs }: NavbarProps) => {
  return (
    <>
      <EuiHeader
        theme="dark"
        sections={[
          {
            items: [
              <EuiHeaderLogo iconType="logoElastic" key="logo">
                Elastic
              </EuiHeaderLogo>,
            ],
            borders: 'none',
          },
          {
            items: [
              <EuiHeaderSectionItemButton
                aria-label="Account menu"
                key="account">
                <EuiAvatar name="John Username" size="s" />
              </EuiHeaderSectionItemButton>,
            ],
            borders: 'none',
          },
        ]}
      />
      <EuiHeader
        sections={[
          {
            items: [
              <EuiHeaderSectionItemButton
                aria-label="Account menu"
                key="account-menu">
                <EuiAvatar type="space" name="Default Space" size="s" />
              </EuiHeaderSectionItemButton>,
            ],
            breadcrumbs: breadcrumbs,
            borders: 'right',
          },
        ]}
      />
    </>
  );
};

export default Navbar;
