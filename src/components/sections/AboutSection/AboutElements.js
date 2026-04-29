import styled from 'styled-components';
import { colors } from '../../../colors';

export const AboutContainer = styled.div`
  color: ${colors.secondary};
  background: ${colors.white};
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  padding: 2rem 10%;

  @media screen and (max-width: 768px) {
    padding: 1rem 1.8rem;
  }
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
  grid-gap: 120px;
  grid-template-areas: "col1 col2";
  align-items: start;

  @media screen and (max-width: 768px) {
    grid-template-areas:
      "col1"
      "col2";
  }
`;

export const Column1 = styled.div`
  grid-area: col1;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 420px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Column2 = styled.div`
  grid-area: col2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

/* LEFT SIDE (UNCHANGED) */
export const TextWrapper = styled.div`
  padding-top: 0;
`;

export const Text = styled.p`
  max-width: 750px;
  margin-bottom: 25px;
  font-size: 15px;
  line-height: 1.5;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 2.5rem;
`;

export const RightSideWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
`;

export const RightTitle = styled.p`
  font-size: 12px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.45);
  text-align: center;
  margin-bottom: 6px;
`;

export const MiniCardsStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 100%;
  align-items: center;
`;

export const MiniCard = styled.div`
  background: #ffffff;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 14px;

  border: 1px solid rgba(0, 0, 0, 0.08);

  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04);

  padding: 12px 14px;

  font-size: 0.85rem;
  font-weight: 500;
  color: ${colors.darkGray};

  text-align: center;
  line-height: 1.2;

  transition: all 0.25s ease;

  position: relative;

  &:hover {
    transform: translateY(-3px);
    border-color: rgba(0, 0, 0, 0.16);

    box-shadow:
      0 2px 4px rgba(0, 0, 0, 0.08),
      0 2px 5px rgba(0, 0, 0, 0.10);

    cursor: pointer;
  }
`;

export const ImgWrap = styled.div`
  max-width: ${({ imgSize }) => imgSize};
  margin-top: 60px; /* 👈 ONLY CHANGE: pushes it lower */
  opacity: 0.3;
  position: relative;

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
  }
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  opacity: 0.3;
`;