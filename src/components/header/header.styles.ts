import { css } from '@emotion/react';

export const headerStyles = () => ({
  container: css`
    margin: 35px 30px 0 30px;
    position: relative;
  `,

  logo: css`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -85%);
  `,
});
