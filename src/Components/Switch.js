import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { waveAnimation } from 'Components/Common/anim';

const Label = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

const sliderMovement = css`
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
`;

const sliderBefore = css`
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
`;

const sliderBase = css`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
`;

const sliderStyle = css`
  background-color: ${({ status }) =>
    status && `#2196F3`};
`;

const Slider = styled.span`
  ${sliderBase}
  ${sliderStyle};

  &::before {
    ${sliderBefore};
    ${({ status }) => status && `${sliderMovement}`};
  }

  &::after {
    ${({ anim }) => anim && waveAnimation};
  }
`;

const SwitchButton = () => {
  const [status, setStatus] = useState(false);
  const [anim, setAnim] = useState(false);

  // Rerener anim onclick
  setTimeout(() => {
    anim && setAnim(false);
  }, 350);

  return (
    <Label>
      <>
        <Slider
          key="mycolor-anim"
          anim={anim}
          status={status}
        />

        <Input
          type="checkbox"
          onChange={() => {
            setStatus(!status);
            setAnim(true);
          }}
        />
      </>
    </Label>
  );
};

export default SwitchButton;

/********* V2 *********** */

// ///
// const Input = styled.input`
//   box-sizing: border-box;
//   padding: 0;
//   left: 0;
//   z-index: -1;
//   width: 5rem;
//   height: -0.75rem;
//   opacity: 0;
// `;

// // Label
// const labelBase = css`
//   position: relative;
//   margin-bottom: 0;
//   vertical-align: top;
//   content: '';
// `;

// const borderInactive = css`
//   background-color: #293145;
// `;

// const beforeActive = css`
//   background-color: #0a80ff;
// `;

// const afterActive = css`
//   background-color: #fff;
//   transform: translateX(0.9rem);
// `;

// //

// const waveEffect = keyframes`
//   to {
//    box-shadow: 0 0 0 #1890ff;
//    box-shadow: 0 0 0 6px #0a80ff;
//   }
// `;

// const fadeEffect = keyframes`
//   to {
//     opacity: 0;
//   }
// `;

// const animation = css`
//   -webkit-animation: ${waveEffect} 0.4s
//     cubic-bezier(0.08, 0.82, 0.17, 1);

//   -webkit-animation-fill-mode: forwards;
//   animation-fill-mode: forwards;

//   transition: transform 0.15s ease-in-out,
//     background-color 0.15s ease-in-out,
//     box-shadow 0.15s ease-in-out;

//   box-shadow: 0 0 0 0 #1890ff;
//   box-shadow: 0 0 0 0 #1890ff;
//   content: '';
//   display: block;
//   opacity: 0.2;
//   pointer-events: none;
//   position: absolute;
// `;

// const Container = styled.div`
//   padding-left: 2.25rem;
//   position: relative;
//   display: block;
//   min-height: 1.5rem;
//   padding-left: 1.5rem;
//   width: 100%;
//   height: 100%;
// `;

// const Label = styled.label`
//   ${labelBase};

//   &::after {
//     box-sizing: border-box;
//     top: calc(0.25rem + 2px);
//     left: calc(-2.25rem + 2px);
//     width: calc(1rem - 4px);
//     height: calc(1rem - 4px);

//     position: absolute;
//     border-radius: 0.5rem;

//     background-color: #adb5bd;
//     display: block;
//     content: '';

//     ${({ status }) => status && afterActive};
//   }

//   &::before {
//     ${({ anim }) => anim && animation};

//     left: -2.25rem;
//     width: 1.75rem;
//     pointer-events: all;
//     border-radius: 0.5rem;

//     position: absolute;
//     top: 0.25rem;
//     display: block;
//     height: 0.9rem;
//     content: '';
//     // border: 1px solid #adb5bd;

//     ${({ status }) =>
//       status ? beforeActive : borderInactive}
//   }
// `;

// const Test = () => {
//   const [status, setStatus] = useState(false);
//   const [anim, setanim] = useState(false);

//   setTimeout(() => {
//     anim && setanim(false);
//   }, 300);

//   return (
//     <Container>
//       <Input type="checkbox" />
//       <Label
//         onClick={() => {
//           setStatus(!status);
//           setanim(true);
//         }}
//         status={status}
//         anim={anim}
//       />
//     </Container>
//   );
// };

// export default Test;
