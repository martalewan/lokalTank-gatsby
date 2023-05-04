import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { Link } from '@reach/router';
import { FaCaretDown } from 'react-icons/fa'
import { colors } from '../../../colors'

export const Navbar = styled.nav`
    background: ${({ scrollNav }) => (scrollNav ? colors.darkGray : 'transperent')};
    height: 80px;
    margin-top: -80px;
    display: flex;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 9;
    width: 100%;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
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
    color: ${(colors.white)};
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    font-weight: bold;
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
        font-size: 1.8rem;
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
    color: ${(colors.white)};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    
    &.active {
        border-bottom: 5px solid ${(colors.lightBlue)};
    }
`;

export const Img = styled.img`
    height: 25px;
    margin-top: 4px;
`

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
        color: ${(colors.mediumBlue)};
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
