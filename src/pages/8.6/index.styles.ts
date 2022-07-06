import { css } from '@emotion/react';

export const homeStyles = euiTheme => ({
  container: css`
    padding: 30px 40px 0 0;
  `,

  formContainer: css`
    padding: 0 40px;
    margin: auto;
    position: relative;
  `,

  header: css`
    text-align: center;
    position: relative;
    top: -50px;
  `,

  password: css`
    text-align: center;
  `,

  formPanel: css`
    width: 430px;
  `,

  panelSpace: css`
    padding: 0 8px;
  `,

  verticalRule: css`
    text-align: center;
    background: ${euiTheme.colors.lightShade};
    width: 1px;
    height: 50%;
    margin: 0 40px;
  `,

  ruleText: css`
    margin: 100px 0 0 -8px;
    background: #f8fafd;
    padding: 8px 0;
  `,
});

export default homeStyles;
