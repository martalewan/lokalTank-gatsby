import styled from 'styled-components';
import { colors } from '../../../colors';

export const GaleryContainer = styled.div`
  height: 700px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  padding: 0 10%;


  @media screen and (max-width: 768px) {
    padding: 0 1.8rem;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  flex-direction: column;
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
  margin: 3rem 0;
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

  @media screen and (max-width: 480px) {
    padding-bottom: 20px;
  }
`;
