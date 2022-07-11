import { css } from '@emotion/react';

export const globalStyes = css`
  #__next,
  .guideBody.euiBody--headerIsFixed {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  //guided tour flyout
  [aria-labelledby='guided-tour'] {
    top: 55px;
    right: 65px;
    border-radius: 6px;
    width: 480px;
    height: 1000px;
  }
`;
