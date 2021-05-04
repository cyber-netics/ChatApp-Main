import styled from 'styled-components';
import {
  BtnSelect,
  BtnSimple,
  BadgeBase,
  ListItem,
  TextBase,
  InputBase,
  SmallStyle,
  CountBase,
} from 'Components/Common/base';

import {
  background,
  border,
  borderSecondary,
  primary,
  activePrimary,
  activeSecondary,
  highlightBG,
  highlightSecondary,
  fontActive,
  fontInactive,
  statuses,
  fontSecondary,
  highlight,
  highlightItem,
  highlightItemSecondary,
  fontNeutral,
  fontNeutralSecondary,
  textHighlight,
  highlightBackground,
} from 'Components/Common/colors';

export const Section = styled.div`
  border-right: 1px solid ${border};

  @media (max-width: 1200px) {
    display: none;
  }
`;

export const ButtonSelect = styled(BtnSelect)`
  background-color: ${(props) =>
    props.active && activePrimary};

  color: ${(props) =>
    props.active ? fontActive : fontInactive};

  &: hover {
    background-color: ${(props) =>
      !props.active && highlightBG};
  }
`;

export const Badge = styled(BadgeBase)`
  background-color: ${statuses};
  border: ${(props) => props.border && '3px solid'}
    ${background};
`;

export const CardSecondary = styled.div`
  box-shadow: rgb(0 0 0 / 45%) 0 0 20px -10px;
  background: ${highlightSecondary};
  color: ${fontSecondary};
`;

export const ListItemHighlight = styled(ListItem)`
  &: hover {
    background-color: ${highlightItem};
  }
`;

export const ListItemDivider = styled(ListItem)`
  border-bottom: 1px solid ${highlight};

  background-color: ${({ active }) =>
    active && highlightItemSecondary};

  font-weight: ${({ active }) =>
    active ? '600' : '400'};
`;

export const ButtonSimple = styled(BtnSimple)`
  border: 1px solid ${highlight};
  color: ${fontSecondary};

  &: focus {
    border-width: 1px;
    box-shadow: rgb(133, 133, 133);
    border-color: ${activeSecondary};
  }

  &: hover {
    background-color: ${highlight};
  }
`;

export const Input = styled(InputBase)`
  color: ${fontSecondary};
  border: 1px solid ${highlight};

  &:focus {
    outline-style: none;
    outline-offset: 0px;
    border: 1px solid ${activePrimary};
  }
`;

export const Small = styled(SmallStyle)`
  color: ${(props) =>
    props.active ? primary : fontNeutral};
`;

export const TextPrimary = styled.p`
  color: ${fontNeutral};
  margin: 0;
`;

export const TextSecondary = styled(TextBase)`
  color: ${fontSecondary};
`;

export const TitleText = styled.h5`
  color: ${(props) =>
    props.active ? primary : fontNeutralSecondary};
`;

export const ActiveIcon = styled.span`
  color: ${primary};
`;

export const BorderBox = styled.div`
  border-bottom: 1px solid ${highlight};
`;

export const MessageStyle = styled.div`
  background-color: ${(props) =>
    props.outgoing ? primary : textHighlight};
  color: ${(props) =>
    props.outgoing ? 'white' : fontSecondary};
`;

export const BgHighlight = styled.div`
  background: ${highlightBackground};
`;

export const Border = styled.div`
  border-color: ${border};
`;

export const BorderSecondary = styled.div`
  border-color: ${borderSecondary};
`;

export const Count = styled(CountBase)`
  background-color: ${primary};
`;
