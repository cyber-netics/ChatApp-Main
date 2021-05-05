import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { waveAnimation } from 'Components/Common/anim';

// Colors
const borderStyle = css`
  ${({ status }) => (status ? '#0e9bff' : '#424a5e')};
`;
const backgroundStyle = css`
  ${({ status }) => (status ? '#fff' : '#adb5bd')};
`;

// Styled
const CheckBoxWrapper = styled.div`
  position: relative;
`;

const Slider = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 43px;
  height: 20px;
  border-radius: 15px;
  background: #293145;
  cursor: pointer;
  border: 1px solid ${borderStyle}
    
  &::before {
    ${({ anim }) => anim && waveAnimation};
  }

  &::after {
    background: ${backgroundStyle};
    content: '';
    display: block;
    border-radius: 50%;
    width: 15px;
    margin-left: 3px;
    height: 15px;
    margin-top: 2.5px;
    box-shadow: 1px 3px 3px 1px rgb(0 0 0 / 20%);
    -webkit-transition: 0.35s;
    transition: 0.35s;
  }
`;

const Input = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 42px;
  height: 26px;

  &:checked + ${Slider} {
    background: #0a80ff;
    &::after {
      content: '';
      display: block;
      width: 15px;
      margin-left: 25px;
      height: 15px;
      margin-top: 2.5px;
      transition: 0.35s;
    }
  }
`;

const App = () => {
  const [status, setStatus] = useState(false);
  const [anim, setAnim] = useState(false);

  setTimeout(() => {
    anim && setAnim(false);
  }, 650);

  return (
    <div>
      <CheckBoxWrapper>
        <>
          <Input
            id="checkbox"
            type="checkbox"
            onChange={() => {
              setStatus(!status);
              setAnim(true);
            }}
          />
        </>
        <Slider
          status={status}
          anim={anim}
          htmlFor="checkbox"
        />
      </CheckBoxWrapper>
    </div>
  );
};

export default App;
