import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { colors } from '../../../colors';

export const ContactContainer = styled.div`
  color: ${colors.white};
  background: ${colors.lightGray};
  box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  padding: 0 10%;
  padding-top: 2rem;
  padding-bottom: 2rem;

  @media screen and (max-width: 768px) {
    padding: 1rem 1.8rem;
  };
`;

export const ContactH2 = styled.h2`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${colors.darkGray};
  margin-top: 3rem;
`;

export const ContactRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 40px;
  flex-wrap: wrap;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  align-items: center;
  width: 55%;

  @media screen and (max-width: 1200px) {
    width: 100%;
  };
`;

export const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1.7rem;
  width: 40%;

  @media screen and (max-width: 1200px) {
    width: 100%;
  };
`;

export const TextWrapper = styled.div`
  padding-top: 0;
`;

export const ContactInfo = styled.ul`
    margin: 0;
    padding: 0;
    color: ${colors.darkGray};
    font-size: 14px;
    font-weight: 600;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 42px;
  font-weight: 600;
  color: ${colors.darkGray};

  @media screen and (max-width: 480px) {
    font-size: 28px;
  } ;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
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

export const StyledContactForm = styled.div`
  form {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    width: 100%;
    min-width: 300px;
    font-size: 14px;
    color: ${colors.darkGray};

    input {
      width: 100%;
      height: 38px;
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
      width: 100%;
      height: 100px;
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
      font-weight: 600;
      color: ${colors.secondary};
    }

    button[type="submit"] {
      margin-top: 1.2rem;
      width: 100%;
    }
  }
`;
