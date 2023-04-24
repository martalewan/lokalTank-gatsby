import styled from 'styled-components'
import { Link as LinkScroll } from 'react-scroll'
import { colors } from '../../../colors'

export const AboutContainer = styled.div`
    color: ${(colors.lightGray)};
    background: ${({ lightBg }) => (lightBg ? colors.white : colors.darkGray)};
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
    padding: 0 10%;

    @media screen and (max-width: 768px) {
        padding: 0 1.8rem;     
    };
`

export const AboutWrapper = styled.div`
    z-index: 1;
    height: ${({ elementHeight }) => (elementHeight)};
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
`

export const AboutRow = styled.div`
    display: grid;
    width:100%;
    grid-gap: 30px;
    grid-auto-columns: minmax(2fr, 1fr);
    align-items: start;
    grid-template-areas: ${({ imgStart }) => (imgStart ? '"col2 col1"' : '"col1 col2"')};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({ imgStart }) => (imgStart ? '"col1" "col2"' : '"col1 col1" "col2 col2"')}
    };
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    grid-area: col1;
    display: flex;
    direction: row;
    flex-direction: row;
    align-items: center;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 10px;
        width: 100%;
        flex-direction: column;
        align-items: start;

    }
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    grid-area: col2;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const TextWrapper = styled.div`
    padding-top: 0;
`

export const Heading = styled.h2`
    margin-bottom: 24px;
    font-size: 36px;
    line-height: 36px;
    font-weight: 600;
    color: ${({ lightText }) => (lightText ? colors.white : colors.darkGray)};

    @media screen and (max-width: 480px) {
        font-size: 28px;
    };
`

export const Text = styled.p`
    max-width: 800px;
    margin-bottom: 35px;
    font-size: 16px;
    line-height: 24px;
    color: ${({ lightText }) => (lightText ? colors.white : colors.darkGray)};

    @media screen and (max-width: 480px) {
        font-size: 14px;
        line-height: 18px;
    };
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: ${({ imgSize }) => (imgSize)};
    height: 100%;

    @media screen and (max-width: 768px) {
        display: none;
    };
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    opacity: .3;
`
export const ImgLeft = styled.img`
    width: 300px;
    margin: 0 30px 0 0;
    padding-right: 0;

    @media screen and (max-width: 480px) {
        padding-bottom: 20px;
    };

    @media screen and (max-width: 768px) {
        display: none;
    };
`
export const LinksWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const OfferLink = styled(LinkScroll)`
    color: ${(colors.darkGray)};
    background: ${(colors.white)};
    text-decoration: none;
    margin: 0.3rem 0;
    font-size: 14px;
    cursor: pointer;
    padding: 7px;
    box-shadow: 15px 15px 30px #bebebe,
             -15px -15px 30px #ffffff;
             
    &:hover {
        color: ${(colors.darkBlue)};
        transform: scale(1.01);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`
