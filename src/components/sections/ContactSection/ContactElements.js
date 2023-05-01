import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { colors } from '../../../colors';

export const ContactContainer = styled.div`
  color: ${colors.white};
  background: ${colors.lightGray};
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  padding: 0 10%;

  @media screen and (max-width: 768px) {
    padding: 0 1.8rem;
  } ;
`;

export const ContactWrapper = styled.div`
  z-index: 1;
  height: ${({ elementHeight }) => elementHeight};
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
`;

export const ContactH2 = styled.h2`
  color: ${colors.darkGray};
`;

export const ContactRow = styled.div`
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
  margin-bottom: 15px;
  grid-area: col2;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TextWrapper = styled.div`
  padding-top: 0;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 42px;
  line-height: 36px;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? colors.white : colors.darkGray)};

  @media screen and (max-width: 480px) {
    font-size: 28px;
  } ;
`;

export const Text = styled.p`
  max-width: 800px;
  margin-bottom: 35px;
  font-size: 16px;
  line-height: 24px;
  color: ${({ lightText }) => (lightText ? colors.white : colors.darkGray)};

  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 18px;
  } ;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: ${({ imgSize }) => imgSize};
  height: 100%;

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
export const ImgLeft = styled.img`
  width: 300px;
  margin: 0 30px 0 0;
  padding-right: 0;

  @media screen and (max-width: 480px) {
    padding-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  } ;
`;
export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const OfferLink = styled(LinkScroll)`
  color: ${colors.darkGray};
  background: ${colors.white};

  text-decoration: none;
  margin: 0.3rem 0;
  font-size: 14px;
  cursor: pointer;
  padding: 6px;

  &:hover {
    color: ${colors.darkBlue};
    transform: scale(1.01);
    transition: all 0.2 ease-in-out;
    cursor: pointer;
  }
`;

// Styles
export const StyledContactForm = styled.div`
  width: 400px;
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    font-size: 14px;
    color: ${colors.darkGray};

    input {
      width: 100%;
      height: 35px;
      padding: 7px;
      outline: none;
      border-radius: 2px;
      border: 1px solid rgb(220, 220, 220);
      &:focus {
        border: 2px solid;
        border-color: ${colors.blue};
      }
    }
    textarea {
      max-width: 100%;
      min-width: 100%;
      width: 100%;
      max-height: 100px;
      min-height: 100px;
      padding: 7px;
      outline: none;
      border-radius: 2px;
      border: 1px solid rgb(220, 220, 220);

      &:focus {
        border: 2px solid;
        border-color: ${colors.blue};
      }
    }
    label {
      margin-top: 0.4rem;
    }
    input[type="submit"] {
      margin-top: 1.2rem;
      border-radius: 8px;
      background: ${colors.blue};
      white-space: nowrap;
      color: ${({ dark }) => (dark ? '#010606' : colors.white)};
      font-size: "16px";
      outline: none;
      border: none;
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      margin-right: 10px;
      font-weight: 500;
      height: 2.5rem;

      &:hover {
        transition: all 0.2s ease-in-out;
        background: ${colors.darkBlue};
      }
    }
  }
`;
