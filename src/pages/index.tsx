import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';
import {
  EuiBadge,
  EuiButton,
  EuiPanel,
  EuiPageTemplate,
  EuiSpacer,
  EuiText,
  EuiTextColor,
  EuiTitle,
} from '@elastic/eui';

const Index: FunctionComponent = () => {
  const router = useRouter();

  return (
    <EuiPageTemplate template="centeredBody">
      <EuiText color="subded" size="s" grow={false}>
        <EuiTextColor color="default">
          <h1>Onboarding UX Prototype</h1>
        </EuiTextColor>
        <p>
          This prototype serves as an artifact for the onboarding UX design
          deliverables. The goal in creating a code-based prototype is to
          provide an artifact that directly links design to code so that our
          lean front-end team can have a head start when they are ready to
          productionize implementation.
        </p>
      </EuiText>
      <EuiSpacer size="l" />
      <EuiText>
        <span role="img" aria-label="emoji">
          👇👇👇 Please read! 👇👇👇
        </span>
      </EuiText>
      <EuiSpacer size="s" />
      <EuiPanel color="warning">
        <EuiText grow={false} size="xs">
          <p>
            To return to this page, use the gear in the upper right and click
            "log out."
          </p>
        </EuiText>
      </EuiPanel>
      <EuiSpacer size="s" />
      <EuiPanel color="danger">
        <EuiText color="danger" grow={false} size="xs">
          <b>
            In the navbar of these prototypes is a suggested change for the far
            right navigational elements. This change is currently being
            discussed within the UX design teams and PMs&mdash;thus, should be
            ignored for now.
          </b>
        </EuiText>
      </EuiPanel>
      <EuiSpacer size="xl" />
      <EuiTitle size="xs">
        <h1>Which version would you like to explore?</h1>
      </EuiTitle>
      <EuiSpacer size="m" />
      <EuiButton onClick={() => router.push('/8.3')} fullWidth>
        v8.3 (May 24, 2022)
      </EuiButton>
      <EuiSpacer size="s" />
      <EuiButton onClick={() => router.push('/8.4')} fullWidth>
        v8.4 (Jul 26, 2022) <EuiBadge color="primary">In-progress</EuiBadge>
      </EuiButton>
      <EuiSpacer size="s" />
      <EuiButton disabled fullWidth>
        v8.5 (Sep 20, 2022) - Prototype coming soon
      </EuiButton>
      <EuiSpacer size="s" />
      <EuiButton onClick={() => router.push('/8.6')} fullWidth>
        v8.6 (Nov 15, 2022) <EuiBadge color="primary">In-progress</EuiBadge>
      </EuiButton>
    </EuiPageTemplate>
  );
};

export default Index;
