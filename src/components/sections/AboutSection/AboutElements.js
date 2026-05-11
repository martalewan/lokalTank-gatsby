import styled from 'styled-components';
import { colors } from '../../../colors';

export const AboutContainer = styled.section`
  position: relative;
  overflow: hidden;
  background: #fbfbfa;
  color: ${colors.secondary};
  padding: 2rem 10%;

  @media screen and (max-width: 768px) {
    padding: 1rem 1.8rem;
  }
`;

export const AboutWrapper = styled.div`
  min-height: 112vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 72px 0;
`;

export const IntroBlock = styled.div`
  max-width: 1120px;
margin-bottom: clamp(110px, 14vw, 220px);
`;

export const AccentLabel = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 34px;

  color: #2358d8;
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.26em;
  text-transform: uppercase;

  &::before {
    content: '';
    width: 56px;
    height: 1px;
    background: #2358d8;
  }
`;

export const LeadText = styled.p`
  max-width: 920px;
  margin: 0;

  color: #111827;

  font-size: clamp(24px, 4vw, 58px);
  line-height: 0.98;
  letter-spacing: -0.075em;
  font-weight: 850;

  @media screen and (max-width: 768px) {
    font-size: clamp(22px, 9vw, 42px);
    line-height: 1.02;
  }
`;

export const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 90px;
  align-items: start;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 52px;
  }
`;

export const CopyBlock = styled.div`
  position: relative;

  max-width: 700px;

  padding-top: 34px;

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 72px;
    height: 1px;

    background: rgba(17, 24, 39, 0.18);
  }
`;

export const Text = styled.p`
  max-width: 660px;
  margin-bottom: 18px;

  color: #111827;

  font-size: 18px;
  line-height: 1.9;
  letter-spacing: -0.005em;


  &:first-of-type {

    font-size: 18px;
    line-height: 1.85;
    font-weight: 500;

    opacity: 1;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 38px;

  a {
    border-radius: 0 !important;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;

    transition:
      transform 0.22s ease,
      opacity 0.22s ease;

    &:hover {
      transform: translateY(-2px);
      opacity: 0.9;
    }
  }
`;

export const InfoPanel = styled.aside`
  position: relative;
  width: 100%;
  max-width: 360px;
  padding: 6px 0 0;
`;

export const MiniCardsStack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

export const MiniCard = styled.div`
  position: relative;
  padding: 22px 24px 22px 58px;

  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(17, 24, 39, 0.1);

  color: #111827;
  font-size: 18px;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.035em;

  transition:
    transform 0.24s ease,
    border-color 0.24s ease,
    background 0.24s ease;

  span {
    position: absolute;
    left: 22px;
    top: 24px;

    color: #2358d8;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.14em;
  }

  &:hover {
    transform: translateY(-3px);
    background: #ffffff;
    border-color: rgba(35, 88, 216, 0.26);
  }
`;

export const ImgWrap = styled.div`
  position: absolute;
  right: -30px;
  bottom: -54px;
  max-width: ${({ imgSize }) => imgSize};

  opacity: 0.1;
  pointer-events: none;

  animation: waveFloat 10s ease-in-out infinite;

  @keyframes waveFloat {
    0%, 100% {
      transform: translateY(0) rotate(-4deg);
    }

    50% {
      transform: translateY(-8px) rotate(3deg);
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
  display: block;
`;