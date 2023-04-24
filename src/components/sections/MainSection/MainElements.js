import styled from 'styled-components'
import bgImage from './../../../images/bgImage.jpg'
import { colors } from '../../../colors'

export const MainContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 100vh;
    position: relative;
    z-index: 1;
`

export const MainBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const ImageBg = styled.div`
    background-image: url(${bgImage});
    opacity: 0.93;
    width: 100%;
    height: 100%;
    background-size: cover;
`

export const MainH1 = styled.h1`
    color: ${(colors.darkGray)};
    font-size: 50px;
    text-align: center;
    font-family: Arial, sans-serif;
    font-weight: 700;
    z-index: 3;
    position: absolute;
    align-items: center;
    padding: 0 10%;

    
    @media screen and (max-width: 768px) {
        padding: 0 1.8rem;     
       font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    };
`
export const BtnWrap = styled.div`
    z-index: 3;
    position: absolute;
    align-items: center;
    margin-top: 200px;
`

export const MainP = styled.p`
    color: ${(colors.white)};
    font-size: 14px;
    text-align: left;
    z-index: 3;
    position: absolute;
    bottom: 2.3rem;
    left: 0;
    margin: 0 10%;
    padding-bottom: 4px;
    border-bottom: 2.5px solid white;

    @media screen and (max-width: 768px) {
        margin: 0 1.8rem;
        font-size: 15px;
    }

    @media screen and (max-width: 480px) {
        font-size: 15px;
    };
`
