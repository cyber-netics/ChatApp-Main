import styled from 'styled-components';

export const Button = styled.span`
  display: flex;
  justify-content: center;
  border-radius: 7px;
  transition: all 0.23s;
  padding: 0.9rem;
  position: relative;
  cursor: pointer;
`;

export const ButtonSelect = styled(Button)`
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

export const Badge = styled.span`
  border: ${(props) =>
    props.border &&
    `3px solid ${props.theme.colors.background}`};

  background-color: ${(props) =>
    props.theme.colors[props.status]};

  position: absolute;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  top: 10px;
  right: 10px;
`;