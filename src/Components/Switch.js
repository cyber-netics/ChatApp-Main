import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { waveAnimation } from 'Components/Common/anim';

const sizes = {
  md: {
    slider: {
      width: '43px',
      height: '21px',
    },
    after: {
      size: '15px',
      left: '3px',
      top: '2.5px',
    },
    input: {
      left: '25px',
      top: '2.5px',
    },
  },
  sm: {
    slider: {
      width: '27px',
      height: '15px',
    },
    after: {
      size: '12.5px',
      left: '2px',
      top: '1px',
    },
    input: {
      left: '12.5px',
      top: '1px',
    },
  },
};

// Colors
const borderStyle = css`
  ${({ status }) => (status ? '#0e9bff' : '#424a5e')};
`;
const backgroundStyle = css`
  ${({ status }) => (status ? '#fff' : '#adb5bd')};
`;

// Sizeing based on passed props
const sliderSize = css`
  width: ${({ size }) => sizes[size].slider.width};
  height: ${({ size }) => sizes[size].slider.height};
`;

const sliderAfterSize = css`
  width: ${({ size }) => sizes[size].after.size};
  height: ${({ size }) => sizes[size].after.size};
`;

const afterMargin = css`
  margin-left: ${({ size }) => sizes[size].after.left};
  margin-top: ${({ size }) => sizes[size].after.top};
`;

const inputAfter = css`
  margin-left: ${({ size }) => sizes[size].input.left};
  margin-top: ${({ size }) => sizes[size].input.top};
`;

// Styled
const CheckBoxWrapper = styled.div`
  position: relative;
`;

const Slider = styled.label`
  ${sliderSize};
  border: 1px solid ${borderStyle};
  background: #293145;

  position: absolute;
  cursor: pointer;
  border-radius: 15px;

  top: 0;
  left: 0;

  &::before {
    ${({ anim }) => anim && waveAnimation};
  }

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    -webkit-transition: 0.35s;
    transition: 0.35s;

    ${afterMargin};
    ${sliderAfterSize};

    background: ${backgroundStyle};
    box-shadow: 1px 3px 3px 1px rgb(0 0 0 / 20%);
  }
`;

const Input = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;

  &:checked + ${Slider} {
    background: #0a80ff;

    &::after {
      ${inputAfter};

      content: '';
      transition: 0.35s;
      display: block;
    }
  }
`;

const App = ({ size = 'md' }) => {
  const [status, setStatus] = useState(false);
  const [anim, setAnim] = useState(false);

  const onChange = () => {
    setStatus(!status);
    setAnim(true);

    // Triggers wave animation for .ms
    setTimeout(() => {
      anim && setAnim(false);
    }, 650);
  };

  return (
    <div>
      <CheckBoxWrapper>
        <Input
          id="checkbox"
          type="checkbox"
          size={size}
          onChange={onChange}
        />
        <Slider
          status={status}
          anim={anim}
          size={size}
          htmlFor="checkbox"
        />
      </CheckBoxWrapper>
    </div>
  );
};

export default App;
