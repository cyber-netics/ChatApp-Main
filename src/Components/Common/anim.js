import { css, keyframes } from 'styled-components';

const waveEffect = keyframes`
to {
  box-shadow: 0 0 0 #1890ff;
  box-shadow: 0 0 0 6px #1890ff;
}
`;

const fadeEffect = keyframes`
to {
  opacity: 0;
}
`;

// Wave Animation
// ** ** ** ** **

const waveAnimationBase = css`
  border-radius: inherit;
  bottom: 0;
  box-shadow: 0 0 0 0 #1890ff;
  box-shadow: 0 0 0 0 #1890ff;
  content: '';
  display: block;
  left: 0;
  opacity: 0.34;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
`;

export const waveAnimation = css`
  ${waveAnimationBase};

  -webkit-animation: ${fadeEffect} 2.5s
      cubic-bezier(0.08, 0.82, 0.17, 1),
    ${waveEffect} 0.7s cubic-bezier(0.08, 0.82, 0.17, 1);

  animation: ${fadeEffect} 2.5s
      cubic-bezier(0.08, 0.82, 0.17, 1),
    ${waveEffect} 0.7s cubic-bezier(0.08, 0.82, 0.17, 1);

  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
`;
