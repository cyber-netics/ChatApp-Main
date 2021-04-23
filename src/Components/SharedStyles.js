import styled from 'styled-components';
import { ButtonBase, BadgeBase } from './Common';

export const Section = styled.div`
  border-right: 1px solid
    ${(props) => props.theme.colors.highlight};

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ButtonSelect = styled(ButtonBase)`
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
  color: ${(props) =>
    props.theme.colors.fontSecondary};
  box-shadow: rgb(0 0 0 / 45%) 0 0 20px -10px;
`;
