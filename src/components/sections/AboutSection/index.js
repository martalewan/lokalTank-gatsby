import React from 'react';
import { FormattedMessage } from 'react-intl';
import Wave from '../../../images/wave.svg';

import {
	AboutContainer,
	AboutWrapper,
	IntroBlock,
	AccentLabel,
	LeadText,
	ContentGrid,
	CopyBlock,
	Text,
	BtnWrap,
	InfoPanel,
	RightTitle,
	MiniCardsStack,
	MiniCard,
	ImgWrap,
	Img
} from './AboutElements';

import { ButtonLink } from './../../common/ButtonLink';

const AboutSection = () => {
	return (
		<AboutContainer id="onas">
			<AboutWrapper>
				<IntroBlock>
					<AccentLabel>
						<FormattedMessage id="navigation.about" defaultMessage="About us" />
					</AccentLabel>

					<LeadText>
						<FormattedMessage id="aboutPage.p1" />
					</LeadText>
				</IntroBlock>

				<ContentGrid>
					<CopyBlock>
						<Text><FormattedMessage id="aboutPage.p2" /></Text>
						<Text><FormattedMessage id="aboutPage.p3" /></Text>
						<Text><FormattedMessage id="aboutPage.p5" /></Text>

						<BtnWrap>
							<ButtonLink to="oferta" smooth duration={500} spy offset={-80}>
								<FormattedMessage id="navigation.offer" />
							</ButtonLink>

							<ButtonLink to="kontakt" smooth duration={500} spy offset={-80}>
								<FormattedMessage id="navigation.contact" />
							</ButtonLink>
						</BtnWrap>
					</CopyBlock>

					<InfoPanel>

						<MiniCardsStack>
							<MiniCard>
								<span>01</span>
								<FormattedMessage id="cardsPage.card1" />
							</MiniCard>

							<MiniCard>
								<span>02</span>
								<FormattedMessage id="cardsPage.card2" />
							</MiniCard>

							<MiniCard>
								<span>03</span>
								<FormattedMessage id="cardsPage.card3" />
							</MiniCard>
						</MiniCardsStack>

						<ImgWrap imgSize="150px">
							<Img src={Wave} alt="wave decoration" />
						</ImgWrap>
					</InfoPanel>
				</ContentGrid>
			</AboutWrapper>
		</AboutContainer>
	);
};

export default AboutSection;