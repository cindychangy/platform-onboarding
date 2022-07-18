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
    height: 1050px;
  }

  @media only screen and (max-width: 574px) {
    [aria-labelledby='guided-tour'] {
      right: 25px;
      width: 100%;
    }
  }

  [aria-labelledby='guided-tour'] .euiAccordion__buttonContent {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }

  [aria-labelledby='guided-tour']
    .euiAccordion.euiAccordion-isOpen
    .euiAccordion__childWrapper {
    margin-left: -24px;
  }

  [aria-labelledby='guided-tour'] .euiFlyoutBody__overflowContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 480px;
  }

  .euiOverlayMask {
    background: rgba(0, 0, 0, 0.4);
  }

  .euiPanel.euiPanel--isClickable:hover {
    box-shadow: none;
  }
`;
