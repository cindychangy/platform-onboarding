import { css } from '@emotion/react';

export const deploymentStyles = () => ({
  panel: css`
    max-width: 650px;
    width: 100%;
    margin: auto;
  `,

  panelContainer: css`
    padding: 40px 48px;
  `,

  buttonPanel: css`
    border-radius: 0 !important;
    box-shadow: rgba(0, 0, 0, 0.1) 0 0 12px !important;
    padding: 24px 48px !important;
  `,
});
