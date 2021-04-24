import React from 'react';
import styled from 'styled-components';
import { Badge } from './SharedStyles';

const Figure = styled.figure`
  display: inline-block;
  height: 2.3rem;
  width: 2.3rem;
  margin: 0;
  margin-right: 1rem;
  position: relative;
`;

const AvatarTitle = styled.span`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 19px;
  background: #ffb822 !important;
  color: white !important;
  border-radius: 50%;
`;

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50% !important;
  vertical-align: middle;
  border-style: none;
`;

const ListBody = styled.div`
  flex: 1 1;
  position: relative;
  min-width: 0px;
  display: flex;
`;

const ContentTitle = styled.h5`
  color: ${(props) =>
    props.active
      ? props.theme.colors.activeColor
      : props.theme.colors.textColor};
  white-space: nowrap;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.2rem;
`;

const Text = styled.p`
  color: ${(props) => props.theme.colors.fontNeutral};
  margin: 0;
`;

const UserFigure = ({
  text,
  avatar,
  name,
  active,
  status,
}) => {
  return (
    <>
      <Figure>
        {status && (
          <Badge
            status={
              status === 'active'
                ? 'success'
                : 'warning'
            }
          />
        )}
        {avatar.image ? (
          <AvatarImg src={avatar.image} alt="avatar" />
        ) : (
          <AvatarTitle>{avatar.title}</AvatarTitle>
        )}
      </Figure>
      <ListBody>
        <div>
          <ContentTitle active={active}>
            {name}
          </ContentTitle>
          <Text>{text}</Text>
        </div>
      </ListBody>
    </>
  );
};

export default UserFigure;
