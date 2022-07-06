import { css } from '@emotion/react';

export const gettingStartedStyles = euiTheme => ({
  bg: css`
    background: ${euiTheme.colors.emptyShade};
    height: 100vh;
  `,

  container: css`
    max-width: 1200px;
    margin: auto;
    width: 100%;
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

export default gettingStartedStyles;
