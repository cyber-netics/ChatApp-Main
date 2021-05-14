import React, { memo, useState } from 'react';
import styled from 'styled-components';

import {
  Container,
  List,
  ListItem,
} from 'Components/Common';

const MenuList = styled(List)`
  display: flex;
  justify-content: center;
`;

const MenuItem = styled.div`
  padding: 0.5rem;
`;

const MenuTitle = styled.p`
  margin-right: 0.5rem;
  cursor: pointer;
  border-bottom: ${({ active }) =>
    active ? '1px solid gray' : 'none'};
`;

// Clenaup needed ****

/**
 * @component
 * @param {Array}     list       menu list
 * @param {Function}  children   callback function as child returns active menu
 */

const HorizontalMenu = memo(({ list, children }) => {
  const [menu, setMenu] = useState(list[0]);

  return (
    <>
      <MenuList>
        {list.map((name) => (
          <ListItem>
            <Container>
              <MenuItem>
                <MenuTitle
                  onClick={() => setMenu(name)}
                  active={menu === name}
                >
                  <span>{name}</span>
                </MenuTitle>
              </MenuItem>
            </Container>
          </ListItem>
        ))}
      </MenuList>
      {children(menu)}
    </>
  );
});

export default HorizontalMenu;
