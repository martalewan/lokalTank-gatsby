import styled from 'styled-components';
import { colors } from '../../../colors';

export const GaleryContainer = styled.section`
  background: #fbfbfa;
  padding: 2rem 10% 7rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 1.8rem 4rem;
  }
`;

export const ServicesH2 = styled.h2`
  display: inline-flex;
  align-items: center;
  gap: 16px;

  margin: 0 0 64px;

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

export const ImagesContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(4, 1fr);

  gap: 32px 18px;

  width: 100%;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageWrapper = styled.figure`
  margin: 0;
  position: relative;

  &:hover img {
    transform: translateY(-6px) scale(1.025);
    filter: grayscale(0) contrast(1.04);
  }

  &:hover p {
    color: #2358d8;
    transform: translateX(6px);
  }
`;

export const ImgImp = styled.img`
  display: block;
  width: 100%;

  aspect-ratio: 1.18 / 1;

  object-fit: contain;
  object-position: center;

  filter: grayscale(10%) contrast(1.02);

  transition:
    transform 0.55s ease,
    filter 0.45s ease;

  ${ImageWrapper}:hover & {
    transform: translateY(-6px) scale(1.025);
    filter: grayscale(0) contrast(1.04);
  }
`;

export const PhotoDescription = styled.p`
  margin: 18px 0 0;

  color: #111827;
  font-size: 15px;
  line-height: 1.25;
  font-weight: 800;
  letter-spacing: -0.045em;

  transition:
    color 0.28s ease,
    transform 0.28s ease;

  &::before {
    content: '';
    display: block;
    width: 32px;
    height: 1px;
    margin-bottom: 14px;
    background: rgba(17, 24, 39, 0.18);
  }
`;

export const ServicesIcon = styled.img`
  height: 55px;
  width: 50px;
  margin-bottom: 10px;
`;

export const ImplementationBtn = styled.button`
  font-size: 0.8rem;
  margin: 2px 2px;
  background: none;
  border: 1px solid #2358d8;
  line-height: 1.1rem;
  padding: 7px;
  font-weight: 700;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;