import styled from 'styled-components';
import { colors } from '../../../colors';

export const ServicesCointeiner = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background: ${colors.white};
  padding: 0 10%;

  @media screen and (max-width: 1000px) {
    height: 630px;
  }

  @media screen and (max-width: 768px) {
    height: 1100px;
    padding: 0 1.8rem;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1000px;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: start;
  margin-top: 15px;
`;

export const ServicesCard = styled.div`
  background: ${colors.white};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  border: 10px;
  height: 190px;
  padding: 33px 30px 0 30px;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;
  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 55px;
  width: 50px;
  margin-bottom: 10px;
`;

export const ServicesH2 = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${colors.darkGray};
  margin-bottom: 1rem;
  font-family: Arial, sans-serif;
  margin-top: 3rem;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;
export const ImplementationBtn = styled.button`
  font-size: 0.8rem;
  margin: 2px 2px;
  background: none;
  border: 1px solid blue;
  line-height: 1.1rem;
  padding: 7px;
  font-weight: 700;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const ImgLeft = styled.img`
  width: 200px;
  margin: 0 30px 0 0;
  padding-right: 0;

  @media screen and (max-width: 480px) {
    padding-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;
