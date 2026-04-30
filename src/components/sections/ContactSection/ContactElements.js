import styled from 'styled-components';
import { colors } from '../../../colors';

export const ContactContainer = styled.div`
  color: ${colors.darkGray};
  background: ${colors.lightGray};
  padding: 4rem 10%;

  @media screen and (max-width: 768px) {
    padding: 2rem 1.5rem;
  }
`;

export const ContactH2 = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${colors.darkGray};
  margin-bottom: 2rem;
`;

export const ContactRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const Column1 = styled.div`
  flex: 1;
  min-width: 320px;
`;

export const Column2 = styled.div`
  flex: 1;
  min-width: 320px;

  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const StyledContactForm = styled.div`
  form {
    display: flex;
    flex-direction: column;

    padding: 22px;
    border-radius: 2px;

    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(2px);

    border: 1px solid rgba(0, 0, 0, 0.06);

    input,
    textarea {
      width: 100%;
      padding: 10px 12px;

      border-radius: 4px;
      border: 1px solid rgba(0, 0, 0, 0.12);

      outline: none;
      font-size: 14px;

      transition: all 0.2s ease;

      background: white;

      &:focus {
        border-color: ${colors.blue};
        box-shadow: 0 0 0 3px rgba(0, 120, 255, 0.12);
      }
    }

    textarea {
      min-height: 120px;
      resize: none;
    }

    label {
      font-size: 12px;
      font-weight: 600;
      letter-spacing: 0.02em;
      color: ${colors.darkGray};
      margin-top: 8px;
    }

    button[type="submit"] {
      margin-top: 30px;
      width: 100%;
    }
  }
`;

export const ContactInfo = styled.div`
  font-size: 13px;
  font-weight: 500;
  color: ${colors.darkGray};
  line-height: 1.6;
`;

export const EmailLink = styled.a`
  color: inherit;
  text-decoration: none;
  font-weight: 600;

  &:hover {
    color: ${colors.blue};
    transition: 0.2s ease;
  }
`;

export const MapWrapper = styled.div`
  overflow: hidden;

  border: 1px solid rgba(0, 0, 0, 0.08);


  iframe {
    display: block;
    width: 100%;
  }
`;
