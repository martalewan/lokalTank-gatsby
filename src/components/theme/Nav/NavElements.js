import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { Link } from '@reach/router';
import { FaCaretDown } from 'react-icons/fa'
import { colors } from '../../../colors'

export const Navbar = styled.nav`
  background: ${({ scrollNav }) => (scrollNav ? colors.darkGray : 'transparent')};
  height: 60px;
  display: flex;
  align-items: center;
  font-size: .75rem;
  position: fixed;
  top: 0;
  z-index: 9;
  width: 100%;
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    z-index: 1;
    width: 100%;
    padding: 0 10%;
    height: 100%;

    @media screen and (max-width: 768px) {
        padding: 0 1.8rem;
    }
`;

export const NavLogo = styled(LinkScroll)`
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;    
`;


export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1rem;
        cursor: pointer;
        color: #fff;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkScroll)`
  position: relative;

  color: rgba(255, 255, 255, 0.78);

  display: flex;
  align-items: center;

  text-decoration: none;

  padding: 0 1rem;
  height: 100%;

  cursor: pointer;

  font-size: 13px;
  font-weight: 500;


  &:hover {
    color: #ffffff;
  }

  &::after {
    content: '';

    position: absolute;
    left: 1rem;
    bottom: 18px;

    width: calc(100% - 2rem);
    height: 1px;

    background: ${colors.blue};

    transform: scaleX(0);
    transform-origin: left;

    transition: transform 0.25s ease;
  }

  &.active {
    color: #ffffff;

    &::after {
      transform: scaleX(1);
    }
  }
`;

export const Img = styled.img`
  height: 25px;
  margin-top: 3px;
`;

export const NavLinkBtn = styled.button`
    color: ${(colors.white)};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    background: none;
    border: none;
`;

export const LanguageItem = styled.button`
    align-items: center;
    justify-content: center;
    font-size: .8rem;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: ${(colors.darkGray)};
    width: 100%;
    border: 1px solid;
    border-color: ${(colors.lightGray)};
    margin: 0 0;
    text-align: left;
    
    &:hover {
        color: ${(colors.blue)};
        transition: 0.2 ease-in-out;
        cursor: pointer;
        background: ${(colors.white)};
    }
`

export const LanguagesContainer = styled.div`
    position: absolute;
    right: 10%;
    top: 52px;
    border-radius: 1px;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    width: 80px;

    @media screen and (max-width: 768px) {
        right: 1.8rem;
    }
`;

export const LngLink = styled(Link)`
    border: none;
    width: 100%;
    text-align: left;
    font-size: .9rem;
    text-decoration: none;
    color: ${(colors.darkGray)};
`;

export const StyledIcon = styled(FaCaretDown)`
    margin-left: 4px;
    pointer-events: none;
`;
