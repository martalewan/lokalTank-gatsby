import styled from 'styled-components';
import { Modal } from 'react-bootstrap';
import { FaCaretDown } from 'react-icons/fa';
import { colors } from '../../../colors';

export const OfferContainer = styled.section`
  position: relative;
  overflow: hidden;
  color: ${colors.darkGray};
  background: #fbfbfa;
  padding: 2rem 10%;
  min-height: 105vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 1rem 1.8rem;
  }
`;

export const AccentLabel = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 46px;

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

export const OffersWrapper = styled.div`
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 360px;
  gap: 90px;
  align-items: start;
  width: 100%;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`;

export const Column1 = styled.div`
  width: 100%;
`;

export const Column2 = styled.aside`
  position: relative;
  padding-top: 6px;

  @media screen and (max-width: 980px) {
    max-width: 540px;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid rgba(17, 24, 39, 0.13);
`;

export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;
  gap: 18px;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid rgba(17, 24, 39, 0.13);

  a {
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #2358d8;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const OfferBtn = styled.button`
  position: relative;
  width: 100%;
  min-height: 68px;
  padding: 20px 0;
  border: none;
  background: transparent;
  color: #111827;

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 22px;

  font-size: clamp(17px, 1.5vw, 23px);
  line-height: 1.15;
  letter-spacing: -0.05em;
  font-weight: 800;
  text-align: left;
  cursor: pointer;

  transition:
    color 0.25s ease,
    padding-left 0.25s ease;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 0;
    height: 1px;
    background: #2358d8;
    transition: width 0.35s ease;
  }

  &:hover {
    color: #2358d8;
    padding-left: 10px;

    &::before {
      width: 100%;
    }
  }
`;

export const OfferBtnSecondaryWrapper = styled.div`
  grid-column: 1 / -1;
  width: 100%;
  padding: 8px 0 18px 34px;
  border-bottom: 1px solid rgba(17, 24, 39, 0.13);

  @media screen and (max-width: 768px) {
    padding-left: 18px;
  }
`;

export const OfferBtnSecondary = styled.button`
  width: 100%;
  min-height: 48px;
  padding: 13px 0;
  border: none;
  background: transparent;
  color: rgba(17, 24, 39, 0.72);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 18px;

  font-size: 14px;
  line-height: 1.35;
  font-weight: 700;
  text-align: left;
  cursor: pointer;

  transition:
    color 0.22s ease,
    padding-left 0.22s ease;

  li {
    list-style: none;
  }

  span {
    color: #2358d8;
    font-size: 10px;
    font-weight: 900;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  &:hover {
    color: #2358d8;
    padding-left: 8px;
  }
`;

export const StyledIcon = styled(FaCaretDown)`
  flex-shrink: 0;
  color: #2358d8;
  font-size: 14px;
  pointer-events: none;
`;

export const Text = styled.div`
  position: relative;

  max-width: 300px;
  margin-left: auto;

  padding: 28px;

  color: #111827;
  font-size: 18px;
  line-height: 1.52;
  font-weight: 600;
  letter-spacing: -0.04em;

  text-align: right;

  background: rgba(255, 255, 255, 0.55);

  border: 1px solid rgba(17, 24, 39, 0.06);

  backdrop-filter: blur(8px);

  transition:
    transform 0.28s ease,
    border-color 0.28s ease,
    background 0.28s ease;

  &:hover {
    transform: translateY(-4px);

    background: rgba(255, 255, 255, 0.72);

    border-color: rgba(17, 24, 39, 0.12);
  }

  @media screen and (max-width: 980px) {
    margin-left: 0;
    max-width: 100%;
    text-align: left;
  }
`;
export const ImgWrap = styled.div`
  position: absolute;

  right: -34px;
  bottom: -120px;

  max-width: ${({ imgSize }) => imgSize || '150px'};

  opacity: 0.08;
  pointer-events: none;

  animation: waveFloat 10s ease-in-out infinite;

  @keyframes waveFloat {
    0%, 100% {
      transform: translateY(0) rotate(-6deg);
    }

    50% {
      transform: translateY(-14px) rotate(3deg);
    }
  }

  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 100%;
  display: block;
`;

export const PDFModal = styled(Modal)`
  z-index: 9;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: Arial, Helvetica, sans-serif;

  .modal-content {
    border-radius: 0;
    border: none;
    box-shadow: 0 34px 90px rgba(17, 24, 39, 0.28);
    max-width: 538px;
    max-height: 98vh;
    overflow: hidden;
  }

  .modal-footer {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 5px;
    width: 100%;
    border: none;
  }

  .modal-header {
    position: absolute;
    z-index: 9;
    margin-left: -30px;
    padding: 0 7px;
    cursor: pointer;
    border: none;
    border-radius: 0;
    background-color: #ffffff;
    box-shadow: 0 10px 28px rgba(17, 24, 39, 0.18);
  }

  .react-pdf__Page {
    max-width: 539px !important;
    min-width: 300px !important;
  }

  .annotationLayer {
    height: 0 !important;
  }

  canvas {
    width: 480px !important;
    height: auto !important;

    @media screen and (max-width: 768px) {
      max-width: 83vw;
    }
  }
`;

export const PopupBtn = styled.button`
  border-radius: 0;
  background: #2358d8;
  padding: 5px 12px;
  min-width: 4.6rem;
  color: #ffffff;
  font-size: 11px;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
  margin: 0.4rem 2px;

  transition:
    background 0.2s ease,
    opacity 0.2s ease;

  &:hover {
    background: ${colors.darkBlue};
  }

  &:disabled {
    background: rgba(17, 24, 39, 0.18);
    cursor: not-allowed;
  }
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const ModalBtn = styled.button``;