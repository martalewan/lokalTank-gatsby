import styled from 'styled-components';
import { colors } from '../../../colors';

export const ContactContainer = styled.section`
  position: relative;
  overflow: hidden;
  color: #ffffff;
  background: ${colors.darkGray};
  padding: 7rem 10%;

  @media screen and (max-width: 768px) {
    padding: 4rem 1.8rem;
  }
`;

export const ContactH2 = styled.h2`
  display: inline-flex;
  align-items: center;
  gap: 16px;

  margin: 0 0 64px;
  color: ${colors.blue};
  font-size: 10px;
  font-weight: 900;
  letter-spacing: 0.26em;
  text-transform: uppercase;

  &::before {
    content: '';
    width: 56px;
    height: 1px;
    background: ${colors.blue};
  }
`;

export const ContactRow = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 390px;
  gap: 90px;
  align-items: start;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
    gap: 56px;
  }
`;

export const Column1 = styled.div`
  width: 100%;
`;

export const Column2 = styled.aside`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 28px;

  .contact-card {
    position: relative;
    padding: 28px;
    background: rgba(255, 255, 255, 0.045);
    border: 1px solid rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(10px);

    transition:
      background 0.28s ease,
      border-color 0.28s ease,
      transform 0.28s ease;

    &:hover {
      transform: translateY(-4px);
      background: rgba(255, 255, 255, 0.065);
      border-color: rgba(126, 162, 255, 0.22);
    }
  }
`;

export const StyledContactForm = styled.div`
  form {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    column-gap: 28px;
    row-gap: 26px;
    width: 100%;
  }

label {
  display: flex;
  flex-direction: column;
  gap: 6px;

  color: rgba(255, 255, 255, 0.5);

  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: none;

  transition: color 0.22s ease;

  &:focus-within {
    color: ${colors.blue};
  }

  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
}

  .required {
    color: ${colors.blue};
  }

input,
textarea {
  width: 100%;
  padding: 14px 16px;

  color: #ffffff;

  background: rgba(255, 255, 255, 0.03);

  border: 1px solid rgba(255, 255, 255, 0.08);

  outline: none;

  font-size: 15px;
  line-height: 1.45;

  transition:
    border-color 0.25s ease,
    background 0.25s ease,
    transform 0.25s ease;

  &::placeholder {
    color: rgba(255, 255, 255, 0.26);
  }

  &:focus {
    border-color: ${colors.blue};
    background: rgba(255, 255, 255, 0.05);

    transform: translateY(-1px);
  }
}

  textarea {
    min-height: 120px;
    resize: none;
  }

  label:nth-of-type(1),
  label:nth-of-type(2),
  label:nth-of-type(5),
  button[type="submit"] {
    grid-column: 1 / -1;
  }

  button[type="submit"] {
    margin-top: 14px;
    width: fit-content;
    min-width: 180px;
    border-radius: 0 !important;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.09em;
    text-transform: uppercase;
  }

  .success-message {
    color: ${colors.blue};
  }

  .error-message {
    color: #ff6b6b;
  }

  p {
    margin-top: 18px;
    font-size: 13px;
  }

  @media screen and (max-width: 700px) {
    form {
      grid-template-columns: 1fr;
      row-gap: 22px;
    }

    label,
    label:nth-of-type(1),
    label:nth-of-type(2),
    label:nth-of-type(5),
    button[type="submit"] {
      grid-column: auto;
    }
  }
`;

export const ContactInfo = styled.div`
  padding: 12px 0;

  color: rgba(255, 255, 255, 0.72);
  font-size: 13px;
  line-height: 1.65;
  font-weight: 600;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);

  &:last-child {
    border-bottom: none;
  }
`;

export const EmailLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  font-weight: 800;
  cursor: pointer;

  transition: color 0.22s ease;

  &:hover {
    color: ${colors.blue};
  }
`;

export const MapWrapper = styled.div`
  overflow: hidden;
  min-height: 235px;

  filter: grayscale(100%) contrast(1.05) brightness(0.75);

  transition:
    filter 0.35s ease,
    transform 0.35s ease;

  &:hover {
    filter: grayscale(30%) contrast(1.05) brightness(0.9);
    transform: translateY(-4px);
  }

  iframe {
    display: block;
    width: 100%;
  }
`;