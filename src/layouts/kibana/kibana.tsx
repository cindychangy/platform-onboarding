import { useState } from 'react';
import {
  EuiCollapsibleNav,
  EuiCollapsibleNavGroup,
  EuiHeaderSectionItemButton,
  EuiHeaderLogo,
  EuiHeader,
  EuiIcon,
  EuiFlexItem,
  EuiHorizontalRule,
  EuiListGroup,
  useGeneratedHtmlId,
  EuiAvatar,
} from '@elastic/eui';
import { css } from '@emotion/react';
import Guide from '../../components/guide/guide';
import { FunctionComponent } from 'react';
import { kibanaLayoutStyles } from './kibana.styles';
import { EuiPageTemplate, EuiPageTemplateProps } from '@elastic/eui';

const pathPrefix = process.env.PATH_PREFIX;

type KibanaLayoutProps = EuiPageTemplateProps & {
  guideOpen: boolean;
  onClick: (section?: string) => void;
  section?: string;
  buttonDisabled: boolean;
  stepCompleted?: boolean;
};

const KibanaLayout: FunctionComponent<KibanaLayoutProps> = ({
  onClick,
  guideOpen,
  section,
  buttonDisabled,
  stepCompleted,
  children,
  ...rest
}) => {
  const styles = kibanaLayoutStyles();
  const [navIsOpen, setNavIsOpen] = useState(false);

  const breadcrumbs = [
    {
      text: 'Home',
      href: '/8.6',
    },
    {
      text: 'Guided Setup',
    },
  ];

  /**
   * Accordion toggling
   */
  const [openGroups, setOpenGroups] = useState(['Kibana']);

  // Save which groups are open and which are not with state and local store
  const toggleAccordion = (isOpen: boolean, title?: string) => {
    if (!title) return;
    const itExists = openGroups.includes(title);
    if (isOpen) {
      if (itExists) return;
      openGroups.push(title);
    } else {
      const index = openGroups.indexOf(title);
      if (index > -1) {
        openGroups.splice(index, 1);
      }
    }
    setOpenGroups([...openGroups]);
    localStorage.setItem('openNavGroups', JSON.stringify(openGroups));
  };

  const collapsibleNavId = useGeneratedHtmlId({ prefix: 'collapsibleNav' });

  const collapsibleNav = (
    <EuiCollapsibleNav
      ownFocus={false}
      css={css`
        margin-top: 96px; // two top navs
        min-height: calc(100vh - 96px);
        display: flex;
      `}
      id={collapsibleNavId}
      aria-label="Main navigation"
      isOpen={navIsOpen}
      button={
        <EuiHeaderSectionItemButton
          aria-label="Toggle main navigation"
          onClick={() => setNavIsOpen(!navIsOpen)}>
          <EuiIcon type={'menu'} size="m" aria-hidden="true" />
        </EuiHeaderSectionItemButton>
      }
      onClose={() => setNavIsOpen(false)}>
      {/* Dark deployments section */}
      <EuiFlexItem grow={false} style={{ flexShrink: 0 }}>
        <EuiCollapsibleNavGroup isCollapsible={false} background="dark">
          <EuiListGroup
            color="ghost"
            maxWidth="none"
            gutterSize="none"
            size="s"
            listItems={[
              {
                label: 'Manage deployment',
                href: '#',
                iconType: 'logoCloud',
                iconProps: {
                  color: 'ghost',
                },
              },
            ]}
          />
        </EuiCollapsibleNavGroup>
      </EuiFlexItem>
      <EuiHorizontalRule margin="none" />
      {/* Menu items */}
      <EuiFlexItem className="eui-yScroll">
        <EuiCollapsibleNavGroup
          title={
            <a
              className="eui-textInheritColor"
              href="#/navigation/collapsible-nav"
              onClick={e => e.stopPropagation()}>
              Analytics
            </a>
          }
          buttonElement="div"
          iconType="logoKibana"
          isCollapsible={true}
          initialIsOpen={openGroups.includes('Kibana')}
          onToggle={(isOpen: boolean) =>
            toggleAccordion(isOpen, 'Kibana')
          }></EuiCollapsibleNavGroup>
      </EuiFlexItem>
    </EuiCollapsibleNav>
  );

  const leftSectionItems = [collapsibleNav];

  return (
    <div css={styles.mainWrapper}>
      <EuiHeader
        position="fixed"
        theme="dark"
        sections={[
          {
            items: [
              <EuiHeaderLogo
                key="elastic-logo"
                iconType="logoElastic"
                href={`${pathPrefix}/kibana`}>
                Elastic
              </EuiHeaderLogo>,
            ],
            borders: 'none',
          },
          {
            items: [
              <Guide
                key="guided-setup"
                onClick={onClick}
                guideOpen={guideOpen}
                buttonDisabled={buttonDisabled}
                section={section}
                stepCompleted={stepCompleted}
              />,
              <EuiHeaderSectionItemButton
                key={useGeneratedHtmlId()}
                aria-label="Account menu">
                <EuiAvatar name="John Username" size="s" />
              </EuiHeaderSectionItemButton>,
            ],
            borders: 'none',
          },
        ]}
      />

      <EuiHeader
        position="fixed"
        sections={[
          {
            items: leftSectionItems,
            borders: 'right',
          },
          {
            items: [
              <EuiHeaderSectionItemButton
                key={useGeneratedHtmlId()}
                aria-label="Account menu">
                <EuiAvatar type="space" name="Default Space" size="s" />
              </EuiHeaderSectionItemButton>,
            ],
            breadcrumbs: breadcrumbs,
            borders: 'right',
          },
        ]}
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
