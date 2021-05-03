import React, { memo } from 'react';
import styled from 'styled-components';
import {
  Badge,
  TitleText,
  TextPrimary,
} from 'Components/Common';

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

const ContentTitle = styled(TitleText)`
  white-space: nowrap;
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  margin-bottom: 0.2rem;
`;

const CustomBadge = styled(Badge)`
  top: -2px;
  right: -2px;
`;

const AvatarFigure = memo(({ children, status }) => (
  <>
    <Figure>
      {status && (
        <CustomBadge
          border={true}
          status={
            status === 'active' ? 'success' : 'warning'
          }
        />
      )}
      {children}
    </Figure>
  </>
));

/**
 *
 * @component
 * @param {String} avatar   image url
 * @param {String} name     user's name
 * @param {String} [text]   underlaying text
 * @param {String} [active] is active state
 * @param {String} [status] badge status
 */

const UserFigure = ({
  text,
  avatar,
  name,
  active,
  status,
}) => (
  <>
    <AvatarFigure status={status} avatar={avatar}>
      <>
        {avatar.image ? (
          <AvatarImg src={avatar.image} alt="avatar" />
        ) : (
          <AvatarTitle>{avatar.title}</AvatarTitle>
        )}
      </>
    </AvatarFigure>
    <ListBody>
      <div>
        <ContentTitle active={active}>
          {name}
        </ContentTitle>
        <TextPrimary>{text}</TextPrimary>
      </div>
    </ListBody>
  </>
);

export default memo(UserFigure);
