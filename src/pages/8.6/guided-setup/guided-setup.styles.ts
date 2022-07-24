import { css } from '@emotion/react';

export const gettingSetupStyles = euiTheme => ({
  container: css`
    padding: 30px 40px 15px 40px;
    max-width: 1150px;
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
