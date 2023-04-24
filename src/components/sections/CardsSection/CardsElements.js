import styled from 'styled-components'
import { colors } from '../../../colors'

export const ServicesCointeiner = styled.div`
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${(colors.lightGray)};
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;

    @media screen and (max-width: 768px) {
        height: 1100px;
    }

    @media screen and (max-width: 480px) {
        height: 1300px;
    }
`

export const ServicesWrapper = styled.div`
     max-width: 1000px;
     margin: 0 auto;
     display: grid;
     grid-template-columns: 1fr 1fr 1fr;
     align-items: center;
     grid-gap: 18px;
     padding: 0 50px;

     @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const ServicesCard = styled.div`
    background: ${(colors.white)};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    border: 10px;
    height: 190px;
    padding: 33px 30px 0 30px;
    box-shadow: 15px 15px 30px #bebebe,
             -15px -15px 30px #ffffff;
    &:hover {
        transform: scale(1.02);
        transition: all 0.2 ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 55px;
    width: 50px;
    margin-bottom: 10px;
`

export const ServicesH2 = styled.h2`
    font-size: 2rem;
    color: ${(colors.darkGray)};
    margin-bottom: 64px;
    font-family: Arial, sans-serif;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`
export const ServicesP = styled.p`
    font-size: .8rem;
    text-align: center;
    margin-top: 20px;
    line-height: 1.1rem;

    @media screen and (max-width: 480px) {
        font-size: 14px;
    }
`
