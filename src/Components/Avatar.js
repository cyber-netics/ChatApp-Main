import React, { memo } from 'react';
import styled from 'styled-components';
import WomenAvatar5 from '../assets/img/women_avatar5.jpg';

const Figure = styled.figure`
  display: inline-block;
  height: 2.3rem;
  width: 2.3rem;
  border-radius: 50%;
  margin: 0;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const Dropdown = () => {
  return (
    <Figure>
      <Img src={WomenAvatar5} alt="avatar" />
    </Figure>
  );
};

export default memo(Dropdown);
