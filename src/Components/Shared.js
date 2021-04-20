import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Section = styled.div`
  border-right: 1px solid ${(props) => props.theme.colors.highlight};
  position: relative;

  @media (max-width: 1200px) {
    display: none;
  }
`;
