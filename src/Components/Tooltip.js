import React, { memo } from 'react';
import styled from 'styled-components';
import { BgHighlight } from 'Components/SharedStyles';
import Helpers from 'helpers';

const Container = styled.span`
  z-index: 11;
  position: relative;

  display: ${(props) =>
    ({
      right: 'flex',
      bottom: 'block',
    }[props.placement])};

  .tooltip {
    visibility: hidden;
  }

  &: hover .tooltip {
    visibility: visible;
    transition: visibility 0s linear 0.35s;
  }
`;

const Children = styled.div`
  width: 100%;
  position: relative;
`;

const Content = styled.div`
  position: relative;
  color: white;

  ${(props) =>
    ({
      right: 'top: calc(100% - 38px)',
      bottom: 'left: -50%',
    }[props.placement])};

  transform: ${(props) =>
    ({
      right: 'translate3d(6px, 0px, 0px)',
      bottom: 'translate3d(0px, 5.5px, 0px)',
    }[props.placement])};
`;

const Title = styled(BgHighlight)`
  position: absolute;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  padding: 6px 11.5px;
  border-radius: 5px;
  white-space: nowrap;
`;

const Tooltip = (props) => {
  const toUppercase = Helpers.firstChartUppercase;

  return (
    <Container placement={props.placement}>
      <Children>{props.children}</Children>

      <div>
        <Content placement={props.placement}>
          <div className="tooltip">
            <Title>{toUppercase(props.title)}</Title>
          </div>
        </Content>
      </div>
    </Container>
  );
};

export default memo(Tooltip);
