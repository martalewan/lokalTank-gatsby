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
    padding: 34px 30px;

    background: rgba(255, 255, 255, 0.035);
    border: 1px solid rgba(255, 255, 255, 0.075);

    backdrop-filter: blur(10px);
    overflow: hidden;
  }

  .contact-item {
    position: relative;

    display: grid;
    grid-template-columns: 36px minmax(0, 1fr);
    gap: 18px;

    padding: 20px 0;

    border-bottom: 1px solid rgba(255, 255, 255, 0.075);

    transition:
      transform 0.25s ease,
      opacity 0.25s ease;

    &:first-child {
      padding-top: 4px;
    }

    &:last-child {
      padding-bottom: 0;
      border-bottom: none;
    }

    &:hover {
      transform: translateX(4px);
    }

    span {
      display: block;
      margin-bottom: 7px;
      opacity: 0.4;
      font-size: 10px;
      font-weight: 900;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }

    p {
      margin: 0;

      color: rgba(255, 255, 255, 0.82);
      font-size: 14px;
      line-height: 1.65;
      font-weight: 500;
      letter-spacing: -0.01em;
    }
  }

  .contact-icon {
    width: 36px;
    height: 36px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 13px;

    background: rgba(255, 255, 255, 0.035);
    border: 1px solid rgba(255, 255, 255, 0.08);

    transition:
      background 0.25s ease,
      border-color 0.25s ease,
      transform 0.25s ease;
  }

  .contact-item:hover .contact-icon {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.14);
    transform: scale(1.04);
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
  color: rgba(255, 255, 255, 0.82);
  font-size: 14px;
  line-height: 1.65;
  font-weight: 500;
`;

export const EmailLink = styled.a`
  display: inline-block;

  color: #ffffff;
  text-decoration: none;
  font-size: 14px;
  line-height: 1.65;
  font-weight: 700;
  cursor: pointer;

  transition:
    color 0.22s ease,
    transform 0.22s ease;

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