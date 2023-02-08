/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen = {isOpen} onDismiss ={onDismiss}>
      <Content>
        <StyledButton> 
          <Icon onClick={onDismiss} id = "close"></Icon>
        </StyledButton>
        <StyledNav>
          <StyledA href="/sale">SALE</StyledA>
          <StyledA href="/new">NEW&nbsp;RELEASES</StyledA>
          <StyledA href="/men">MEN</StyledA>
          <StyledA href="/women">WOMEN</StyledA>
          <StyledA href="/kids">KIDS</StyledA>
          <StyledA href="/collections">COLLECTIONS</StyledA>
        </StyledNav>
        <StyledFooter>
          <StyledF href="/terms">Terms and Conditions</StyledF>
          <StyledF href="/privacy">Privacy Policy</StyledF>
          <StyledF href="/contact">Contact Us</StyledF>
        </StyledFooter>
      </Content>
    </Overlay>
  );
};


const Overlay = styled(DialogOverlay)`
  position: fixed; 
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
  background: hsl(0deg 0% 0% / 0.5); 
  min-height: 100%;
  display: flex;
`;

const Content = styled(DialogContent)`
  position: fixed;
  min-width: 20rem;
  right: 0;
  top: 0;
  bottom: 0;
  padding-left: 2rem;
  display: flex; 
  flex-direction: column;
  flex-basis: 100%;
  background-color: white;
  justify-content: space-between;
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-bottom: 2rem;
`;

const StyledA = styled.a`
  font-weight: 600;
  color: black;
  font-size: 1.2rem;
  font-family: 'Raleway';
`;

const StyledF = styled.a`
  font-weight: 500;
  color: ${COLORS.gray[700]};
  font-size: 14px;
  font-family: 'Raleway';
`;

const StyledButton = styled(UnstyledButton)`
  align-self: flex-end;
  margin-top: 2rem;
  margin-right: 2rem;
`;

export default MobileMenu;
