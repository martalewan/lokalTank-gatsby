import styled from 'styled-components';
import { colors } from '../../../colors';

export const AboutContainer = styled.div`
  color: ${colors.secondary};
  background: ${colors.white};
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  padding: 2rem 10%;

  @media screen and (max-width: 768px) {
    padding: 1rem 1.8rem;
  } ;
`;

export const AboutWrapper = styled.div`
  z-index: 1;
  min-height: 750px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`;

export const AboutRow = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 30px;
  grid-auto-columns: minmax(2fr, 1fr);
  align-items: start;
  grid-template-areas: ${({ imgStart }) => (imgStart ? '"col2 col1"' : '"col1 col2"')};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) => (imgStart ? '"col1" "col2"' : '"col1 col1" "col2 col2"')};
  } ;
`;

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
`;

export const Column2 = styled.div`
  margin-top: 15px;
  grid-area: col2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrapper = styled.div`
  padding-top: 0;
`;

export const Heading = styled.h2`
  margin-bottom: 24px;
  font-size: 1.6rem;
  line-height: 36px;
  font-weight: 600;
  background: ${colors.white};
  color: ${colors.darkGray};

  @media screen and (max-width: 480px) {
    font-size: 28px;
  } ;
`;

export const Text = styled.p`
  max-width: 750px;
  margin-bottom: 25px;
  font-size: 15px;
  line-height: 1.5;
  background: ${colors.white};

  @media screen and (max-width: 480px) {
    font-size: 15px;
    line-height: 20px;
  } ;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2.5rem;
`;

export const ImgWrap = styled.div`
  max-width: ${({ imgSize }) => imgSize};
  height: 100%;
  animation: move 8s infinite alternate;

  @keyframes move {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateX(10%);
    }
    100% {
      transform: translateY(-10%);
    }
  }
  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  opacity: 0.3;
`;
