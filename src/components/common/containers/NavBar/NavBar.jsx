import React from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Menu, MenuMenu, Segment } from 'semantic-ui-react';
import { StyledMenu } from './Styles';

const NavBar = ({ activeItemMenu, handleItemClick }) => {
  return (
    <Segment style={{ borderRadius: '0' }} inverted>
      <StyledMenu stackable inverted secondary>
        <Container>
          <Menu.Item
            as={NavLink}
            exact
            to="/"
            name="Курсы"
            activeClassName="active"
          />
          <MenuMenu position="right">
            <Menu.Item
              as={NavLink}
              to="/report"
              name="Сообщить об ошибке"
              activeClassName="active"
            />
            <Menu.Item
              as={NavLink}
              to="/about"
              name="О нас"
              activeClassName="active"
            />
          </MenuMenu>
        </Container>
      </StyledMenu>
    </Segment>
  );
};

export default NavBar;
