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
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`
export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 32px;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 0 50px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
    }
`

export const FooterLinkTitle = styled.div`
    font-size: 14px;
    margin-bottom: 0.3rem;
`

export const FooterLink = styled(Link)`
    color: ${(colors.white)};
    text-decoration: none;
    margin-bottom: 0.3rem;
    font-size: 14px;

    &:hover {
        color: ${(colors.lightBlue)};
        transition: 0.3s ease-out;
    }
`

export const FooterLinksPage = styled(reactLink)`
    color: ${(colors.white)};
    text-decoration: none;
    margin-bottom: 0.3rem;
    font-size: 14px;

    &:hover {
        color: ${(colors.lightBlue)};
        transition: 0.3s ease-out;
    }
`
