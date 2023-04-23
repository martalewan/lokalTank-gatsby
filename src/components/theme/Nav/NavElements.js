import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { Link } from '@reach/router';
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
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 10%;

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

export const NavLinkLang = styled.a`
    color: ${(colors.white)};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
`;

export const LanguagesContainer = styled.div`
    position: absolute;
    right: 10.5%;
    top: 52px;
    border-radius: 1px;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};

    @media screen and (max-width: 768px) {
        right: 1.8rem;
    }
`;

export const LanguageWrapper = styled.div`
    width: 70px;
    background: ${(colors.white)};
    padding: 4px;
    opacity: 0.95;
    border-radius: 1px;

    &:hover {
        background-color: lightgrey;
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
