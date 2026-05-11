import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as reactLink } from 'react-scroll';
import { colors } from '../../../colors';

export const FooterContainer = styled.footer`
  background-color: ${colors.darkGray};
  border-top: 1px solid rgba(255, 255, 255, 0.08);
`;

export const FooterWrapper = styled.div`
  padding: 30px 10% 18px;

  @media screen and (max-width: 768px) {
    padding: 28px 1.8rem 18px;
  }
`;

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 160px minmax(0, 1fr);
  gap: 64px;
  align-items: start;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`;

export const FooterBrand = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const FooterLogo = styled.img`
  width: 86px;
  height: auto;
  opacity: 0.92;
`;

export const FooterLinksContainer = styled.div`
  display: grid;
  grid-template-columns: 1.15fr 1fr 0.8fr;
  gap: 48px;
  align-items: start;

  @media screen and (max-width: 760px) {
    grid-template-columns: 1fr;
    gap: 22px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FooterLinkTitle = styled.div`
  color: rgba(255, 255, 255, 0.64);
  font-size: 12px;
  line-height: 1.55;
  font-weight: 500;

  strong {
    color: #ffffff;
    font-weight: 800;
  }
`;

export const FooterLink = styled(Link)`
  color: rgba(255, 255, 255, 0.64);
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;

  &:hover {
    color: ${colors.blue};
  }
`;

export const FooterLinksPage = styled(reactLink)`
  width: fit-content;
  color: rgba(255, 255, 255, 0.64);
  text-decoration: none;
  font-size: 12px;
  line-height: 1.55;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    color: ${colors.blue};
  }
`;

export const FooterCredit = styled.div`
  margin-top: 28px;
  padding-top: 14px;

  border-top: 1px solid rgba(255, 255, 255, 0.08);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;

  color: rgba(255, 255, 255, 0.4);

  font-size: 11px;
  line-height: 1.4;
  font-weight: 500;
  letter-spacing: 0.01em;

  span:last-child {
    color: rgba(255, 255, 255, 0.64);
  }

  @media screen and (max-width: 620px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;