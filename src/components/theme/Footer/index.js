import React from 'react';
import { FormattedMessage } from 'react-intl';
import {
	FooterContainer,
	FooterWrapper,
	FooterLinksContainer,
	FooterLinksWrapper,
	FooterLinkItems,
	FooterLinkTitle,
	FooterLinksPage,
} from './FooterElements';
import { EmailLink  } from '../../sections/ContactSection/ContactElements'
import { sendMail } from '../../sections/ContactSection'


const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrapper>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>
								<strong>Lokal Tank</strong> Sp. Z o.o.
							</FooterLinkTitle>
							<FooterLinkTitle>
                Gabriela Narutowicza 15,
							</FooterLinkTitle>
							<FooterLinkTitle>41-530 Chorzów</FooterLinkTitle>
						</FooterLinkItems>
					</FooterLinksWrapper>

					<FooterLinkItems>
						<FooterLinkTitle>Tel. +48 517 580 300,</FooterLinkTitle>
						<FooterLinkTitle>Tel. +48 664 570 171</FooterLinkTitle>
						<FooterLinkTitle>E-mail:&nbsp;

							<EmailLink
								to="/"
								onClick={sendMail}
								smooth
								duration={500}
								spy
								offset={-80}

							>
								biuro@lokaltank.pl
							</EmailLink>
						</FooterLinkTitle>
					</FooterLinkItems>

					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>NIP 6272782103</FooterLinkTitle>
							<FooterLinksPage
								to="onas"
								smooth
								duration={500}
								spy
								offset={-80}
							>
								<FormattedMessage id="navigation.about" />
							</FooterLinksPage>
							<FooterLinksPage
								to="oferta"
								smooth
								duration={500}
								spy
								offset={-80}
							>
								<FormattedMessage id="navigation.offer" />
							</FooterLinksPage>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>
			</FooterWrapper>
		</FooterContainer>
	);
};

export default Footer;
