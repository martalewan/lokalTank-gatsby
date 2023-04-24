import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import { Link as LinkScroll } from 'react-scroll'
import { colors } from '../../../colors'

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: ${(colors.darkGray)};
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const CloseIcon = styled(FaTimes)`
    color: ${(colors.white)};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const SidebarWrapper = styled.div`
    color: ${(colors.white)};
`

export const LanguageWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    padding: 0;
    margin: 0;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(6, 60px)
    }
`

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: ${(colors.white)};

    &:hover {
        color: ${(colors.mediumBlue)};
        transition: 0.2 ease-in-out;
        cursor: pointer
    }
`

export const LanguageItem = styled.a`
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: ${(colors.white)};
    padding: 4px;
    width: 110px;
    border: 2px solid white;
    margin: 0 9px;


    &:hover {
        color: ${(colors.mediumBlue)};
        transition: 0.2 ease-in-out;
        cursor: pointer;
        background: ${(colors.white)};
    }
`

export const LanguagesContainer = styled.div`
    display: flex;
    flex-direction: row;
    transition: 0.2s ease-in-out;
    color: ${(colors.white)};
    margin: auto;
    margin-top: 24px;
    border-radius: 1px;
`

export const LanguagesContainerSidebar = styled.div`
    border-radius: 1px;
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    font-size: 1.5rem;
    
    @media screen and (max-width: 768px) {
        right: 1.8rem;
    }
`;

export const LanguageItemSidebar = styled.button`
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: ${(colors.white)};
    width: 100%;
    border: 2px solid white;
    margin: 0 0;
    color: black;
    padding-left: 5px;
    text-align: center;
    background: none;
    color: white;
    border: none;
    margin-bottom: .5rem;
    padding: .3rem 0;

    &:hover {
        color: ${(colors.mediumBlue)};
        transition: 0.2 ease-in-out;
        cursor: pointer;
        background: ${(colors.white)};
    }
`

export const SidebarBtn = styled.button`
    color: ${(colors.white)};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    background: none;
    border: none;
    font-size: 1.5rem;
    text-align: center;

`;
