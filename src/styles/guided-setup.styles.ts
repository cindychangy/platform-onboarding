import { css } from '@emotion/react';

export const gettingSetupStyles = euiTheme => ({
  container: css`
    text-align: center;
    margin-top: 100px;
  `,

  icon: css`
    background: ${euiTheme.colors.lightestShade};
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;
  `,
});
