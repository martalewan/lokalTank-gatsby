import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
	FooterContainer,
	FooterWrapper,
	FooterTop,
	FooterBrand,
	FooterLogo,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLinksPage,
	FooterCredit
} from './FooterElements';
import { EmailLink } from '../../sections/ContactSection/ContactElements';
import { sendMail } from '../../sections/ContactSection';
import logoWhite from '../../../images/logoLT.svg';

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrapper>
				<FooterTop>
					<FooterBrand>
						<FooterLogo src={logoWhite} alt="Lokal Tank logo" />
					</FooterBrand>

					<FooterLinksContainer>
						<FooterLinksWrapper>
							<FooterLinkItems>
								<FooterLinkTitle>
									<strong>Lokal Tank</strong> Sp. z o.o.
								</FooterLinkTitle>
								<FooterLinkTitle>Gabriela Narutowicza 15</FooterLinkTitle>
								<FooterLinkTitle>41-530 Chorzów</FooterLinkTitle>
							</FooterLinkItems>
						</FooterLinksWrapper>

						<FooterLinkItems>
							<FooterLinkTitle>Tel. +48 517 580 300</FooterLinkTitle>
							<FooterLinkTitle>Tel. +48 664 570 171</FooterLinkTitle>
							<FooterLinkTitle>
								E-mail:&nbsp;
								<EmailLink onClick={sendMail}>
									biuro@lokaltank.pl
								</EmailLink>
							</FooterLinkTitle>
						</FooterLinkItems>

						<FooterLinksWrapper>
							<FooterLinkItems>
								<FooterLinkTitle>NIP 6272782103</FooterLinkTitle>
								<FooterLinksPage to="onas" smooth duration={500} spy offset={-80}>
									<FormattedMessage id="navigation.about" />
								</FooterLinksPage>
								<FooterLinksPage to="oferta" smooth duration={500} spy offset={-80}>
									<FormattedMessage id="navigation.offer" />
								</FooterLinksPage>
							</FooterLinkItems>
						</FooterLinksWrapper>
					</FooterLinksContainer>
				</FooterTop>

				<FooterCredit>
					<span>© 2026 Lokal Tank Sp. z o.o.</span>
					<span>Design & Development — Marta Lewandowska</span>
				</FooterCredit>
			</FooterWrapper>
		</FooterContainer>
	);
};

export default Footer;