import styled from 'styled-components';
import {
  BtnSelect,
  BtnSimple,
  BadgeBase,
  ListItem,
  TextBase,
  InputBase,
} from './Common';

export const Section = styled.div`
  border-right: 1px solid
    ${(props) => props.theme.colors.highlight};

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ButtonSelect = styled(BtnSelect)`
  background-color: ${(props) =>
    props.active && props.theme.colors.active};

  color: ${(props) =>
    props.active
      ? props.theme.colors.fontActive
      : props.theme.colors.fontInactive};

  &: hover {
    background-color: ${(props) =>
      !props.active &&
      props.theme.colors.highlightSecondary};

    color: ${(props) =>
      props.theme.colors.activeSecondary};
  }
`;

export const Badge = styled(BadgeBase)`
  border: ${(props) =>
    props.border &&
    `3px solid ${props.theme.colors.background}`};

  background-color: ${(props) =>
    props.theme.colors[props.status]};
`;

export const CardSecondary = styled.div`
  background: ${(props) =>
    props.theme.colors.highlightSecondary};
  color: ${(props) => props.theme.colors.fontSecondary};
  box-shadow: rgb(0 0 0 / 45%) 0 0 20px -10px;
`;

export const ListItemHighlight = styled(ListItem)`
  &: hover {
    background-color: ${(props) =>
      props.theme.colors.highlightItem};
  }
`;

export const ListItemDivider = styled(ListItem)`
  background-color: ${(props) =>
    props.active &&
    props.theme.colors.highlightItemSecondary};
  border-bottom: 1px solid
    ${(props) => props.theme.colors.highlight};
`;

export const ButtonSimple = styled(BtnSimple)`
  border: 1px solid
    ${(props) => props.theme.colors.highlight};
  color: ${(props) => props.theme.colors.fontSecondary};

  &: focus {
    border-width: 1px;
    border-color: ${(props) =>
      props.theme.colors.activeSecondary};
    box-shadow: rgb(133, 133, 133);
  }

  &: hover {
    background-color: ${(props) =>
      props.theme.colors.highlight};
  }
`;

export const Input = styled(InputBase)`
  color: ${(props) => props.theme.colors.fontSecondary};
  border: 1px solid
    ${(props) => props.theme.colors.highlight};

  &:focus {
    outline-style: none;
    outline-offset: 0px;
    border: 1px solid
      ${(props) => props.theme.colors.primary};
  }
`;

export const Small = styled.small`
  color: ${(props) =>
    props.active
      ? props.theme.colors.primary
      : props.theme.colors.fontNeutral};
  font-size: 12px;
  font-weight: 400;
`;

export const TextPrimary = styled.p`
  color: ${(props) => props.theme.colors.fontNeutral};
  margin: 0;
`;

export const TextSecondary = styled(TextBase)`
  color: ${(props) => props.theme.colors.fontSecondary};
`;

export const TitleText = styled.h5`
  color: ${(props) =>
    props.active
      ? props.theme.colors.primary
      : props.theme.colors.fontNeutralSecondary};
`;

export const Divider = styled.hr`
  border-color: ${(props) =>
    props.theme.colors.highlightPrimary};
`;

export const ActiveIcon = styled.span`
  color: ${(props) => props.theme.colors.primary};
`;

export const BorderBox = styled.div`
  border-bottom: 1px solid
    ${(props) => props.theme.colors.highlight};
`;

export const MessageStyle = styled.div`
  background-color: ${(props) =>
    props.outgoing
      ? props.theme.colors.primary
      : props.theme.colors.textHighlight};
  color: ${(props) =>
    props.outgoing
      ? 'white'
      : props.theme.colors.fontSecondary};
`;
