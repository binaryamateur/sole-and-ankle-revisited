import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import Icon from '../Icon';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <IconWrapper>
          <Icon id="shopping-bag"></Icon>
          <Icon id="search"></Icon>
          <Icon id="menu" onClick = {() => setShowMobileMenu(true)} ></Icon>
        </IconWrapper>
        <NonSide />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;
  @media ${QUERIES.tabletAndLess} {
    border-top: 10px solid ${COLORS.gray[900]};
    min-width: 100%;
    justify-content: space-between;
  }
`;

const Nav = styled.nav`
  display: flex;
  margin: 0px 48px;
  gap: 5%;
  @media ${QUERIES.tabletAndLess}{
    display: none; 
  }
`;

const IconWrapper = styled.nav`
  display: none; 

  @media ${QUERIES.tabletAndLess}{
    display: flex;
    gap: 1.5rem;
  }
`;

const Side = styled.div`
  flex: 1;
`;

const NonSide = styled.div`
  flex: 1;
  @media ${QUERIES.tabletAndLess}{
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};
  flex: 1;
  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
