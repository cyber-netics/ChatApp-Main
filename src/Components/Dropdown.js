import React from 'react';
import styled from 'styled-components';

import WomenAvatar5 from '../assets/img/women_avatar5.jpg';

const Figure = styled.figure`
  display: inline-block;
  margin-bottom: 0;
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
      <Img
        src={WomenAvatar5}
        className="rounded-circle"
        alt="avatar"
      />
    </Figure>
  );
};

export default Dropdown;
