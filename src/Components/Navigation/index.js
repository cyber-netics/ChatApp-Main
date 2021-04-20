import React, { useState } from "react";
import styled from "styled-components";

import { ReactComponent as logo } from "../../assets/logo.svg";
import { tabs } from "./tabs.json";

import { Section, Container as Wrapper } from "../Shared";
import { ButtonSelect, Badge } from "../SharedStyles";

import FlatList from "../FlatList";
import Icon from "../Icon";

const Container = styled(Wrapper)`
  width: 100px;
  text-align: center;
`;

const InnerContainer = styled.div`
  width: 100%;
`;

const NavLogo = styled.a`
  padding: 1.5rem 0 2.35rem 0;
  display: flex;
  justify-content: center;
`;

const LogoIcon = styled(logo)`
  width: 30px;
  height: 30px;
  fill: #0a80ff;
  padding-top: 1px;
`;

const Navigation = (props) => {
  const [navtab, setnavtab] = useState("message");

  return (
    <Section>
      <Container>
        <InnerContainer>
          <header>
            <NavLogo href={"/"}>
              <LogoIcon />
            </NavLogo>
          </header>
          <div>
            <FlatList
              list={tabs}
              item={(tab) => (
                <ButtonSelect
                  onClick={() => setnavtab(tab.name)}
                  active={navtab === tab.name}
                >
                  <Icon icon={tab.icon} />
                  <Badge status={tab.status} />
                </ButtonSelect>
              )}
            />
          </div>
        </InnerContainer>
      </Container>
    </Section>
  );
};

export default Navigation;
