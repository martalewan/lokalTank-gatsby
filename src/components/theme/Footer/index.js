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

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrapper>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle to="home">
								<strong>Lokal Tank</strong> Sp. Z o.o.
							</FooterLinkTitle>
							<FooterLinkTitle to="home">
                Gabriela Narutowicza 15,
							</FooterLinkTitle>
							<FooterLinkTitle to="home">41-530 Chorzów</FooterLinkTitle>
							<FooterLinkTitle to="home">Tel. +48 517 580 300,</FooterLinkTitle>
							<FooterLinkTitle to="home">Tel. +48 664 570 171</FooterLinkTitle>
						</FooterLinkItems>
					</FooterLinksWrapper>

					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle to="home">NIP 6272782103</FooterLinkTitle>
							<FooterLinkTitle to="home">
                biuro@lokaltank.pl
							</FooterLinkTitle>{' '}
							<FooterLinkTitle>-</FooterLinkTitle>
							<FooterLinksPage to="onas">
								<FormattedMessage id="navigation.about" />
							</FooterLinksPage>
							<FooterLinksPage to="oferta">
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
