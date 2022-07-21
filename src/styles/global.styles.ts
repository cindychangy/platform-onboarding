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
    bottom: 25px;
    right: 65px;
    border-radius: 6px;
    width: 480px;
    height: auto;
    animation: euiModal 350ms cubic-bezier(0.34, 1.61, 0.7, 1);
  }

  @media only screen and (max-width: 574px) {
    [aria-labelledby='guided-tour'] {
      right: 25px;
      width: 100%;
    }
  }

  [aria-labelledby='guided-tour'] {
    .euiProgress__valueText,
    .euiProgress__label {
      color: #69707d;
      font-size: 12px;
    }
  }

  //flyout footer
  [aria-labelledby='guided-tour'] .euiFlyoutFooter {
    border-radius: 0 0 6px 6px;
    background: #fff;
    padding: 24px 30px;
  }

  [aria-labelledby='guided-tour'] .euiAccordion__buttonContent {
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
  }

  [aria-labelledby='guided-tour'] .euiFlyoutBody__overflowContent {
    width: 480px;
  }

  @media only screen and (max-width: 574px) {
    [aria-labelledby='guided-tour'] .euiFlyoutBody__overflowContent {
      width: 100%;
    }
  }

  .euiOverlayMask {
    background: rgba(0, 0, 0, 0.4);
  }

  @media only screen and (max-width: 574px) {
    .euiAccordion__triggerWrapper {
      width: 100%;
    }
  }
`;
