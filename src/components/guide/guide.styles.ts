import { css } from '@emotion/react';

export const guideStyles = () => ({
  buttonContainer: css`
    margin: 0 20px;
  `,

  videoContainer: css`
    margin: auto;
    width: 100%;
    height: 257px;
    background: #f7f7f7;
    margin-bottom: 20px;
    display: flex;
  `,

  panelFooter: css`
    align-self: flex-end;
  `,

  checkEmpty: css`
    border: 2px solid #00bfb3;
    border-radius: 50%;
    height: 24px;
    width: 24px;
    margin-right: 8px;
  `,

  checkFill: css`
    border: 2px solid #00bfb3;
    background: #00bfb3;
    border-radius: 50%;
    height: 24px;
    width: 24px;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  successText: css`
    font-weight: 400;
    margin-left: 8px;
    font-size: 14px;
    font-style: italic;
    display: inline-block;
  `,
});
