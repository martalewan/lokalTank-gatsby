import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as reactLink } from 'react-scroll';
import { colors } from '../../../colors'

export const FooterContainer = styled.footer`
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    background-color: ${(colors.darkGray)}
;
`
export const FooterWrapper = styled.div`
        padding: 0 10%;


`
export const FooterLinksContainer = styled.div`
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media screen and (max-width: 620px) {
        flex-direction: column;
    }  
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 920px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    box-sizing: border-box;
    color: ${(colors.white)};

    @media screen and (max-width: 620px) {
        margin: 0;
        padding: 10px;
        align-items: center;
    }
`

export const FooterLinkTitle = styled.div`
    font-size: 14px;
`

export const FooterLink = styled(Link)`
    color: ${(colors.white)};
    text-decoration: none;
    font-size: 14px;

    &:hover {
        color: ${(colors.blue)};
        transition: 0.3s ease-out;
    }
`

export const FooterLinksPage = styled(reactLink)`
    color: ${(colors.white)};
    text-decoration: none;
    font-size: 14px;

    &:hover {
        color: ${(colors.blue)};
        transition: 0.3s ease-out;
        cursor: pointer;
    }
`
