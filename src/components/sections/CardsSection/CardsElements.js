import styled from 'styled-components';
import { colors } from '../../../colors';

export const CardsCointeiner = styled.div`
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${colors.lightGray};
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;

  @media screen and (max-width: 1000px) {
    height: 630px;
  }

  @media screen and (max-width: 768px) {
    height: 800px;
  }
`;

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
  padding: 30px;
  box-shadow: 15px 15px 30px #bebebe, -15px -15px 30px #ffffff;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 45px;
  width: 50px;
  margin-bottom: 7px;
`;

export const ServicesH2 = styled.h2`
  font-size: 1.6rem;
  color: ${colors.darkGray};
  margin-bottom: 64px;
  font-family: Arial, sans-serif;
`;

export const ServicesP = styled.p`
  font-size: 0.8rem;
  text-align: center;
  margin-top: 20px;
  line-height: 1.1rem;
  color: ${colors.secondary};
  height: 100%;
  display: flex;
  align-items: center;
`;
