import React from 'react';
import { FormattedMessage } from 'react-intl';
import Wave from '../../../images/wave.svg';

import {
	AboutContainer,
	AboutWrapper,
	AboutRow,
	Column1,
	Column2,
	TextWrapper,
	Text,
	BtnWrap,
	ImgWrap,
	Img,
	RightSideWrapper,
	MiniCardsStack,
	MiniCard
} from './AboutElements';

import { ButtonLink } from './../../common/ButtonLink';
import { colors } from '../../../colors';

const AboutSection = () => {
	return (
		<AboutContainer id="onas">
			<AboutWrapper>
				<AboutRow>

					<Column1>
						<TextWrapper>

							<Text
								style={{
									color: colors.darkGray,
									fontWeight: 800,
									lineHeight: 1.6
								}}
							>
								<FormattedMessage
									id="aboutPage.p1"
								/>
							</Text>

							<Text><FormattedMessage id="aboutPage.p2" /></Text>
							<Text><FormattedMessage id="aboutPage.p3" /></Text>
							<Text><FormattedMessage id="aboutPage.p4" /></Text>
							<Text><FormattedMessage id="aboutPage.p5" /></Text>

							<BtnWrap>
								<ButtonLink to="oferta" smooth duration={500} spy offset={-80}>
									<FormattedMessage id="navigation.offer" />
								</ButtonLink>

								<ButtonLink to="kontakt" smooth duration={500} spy offset={-80}>
									<FormattedMessage id="navigation.contact" />
								</ButtonLink>
							</BtnWrap>

						</TextWrapper>
					</Column1>

					<Column2>

						<RightSideWrapper>

							<div className="right-content">

								<Text className="right-title">
									<FormattedMessage id="cardsPage.card2" />
								</Text>

								<MiniCardsStack>

									<MiniCard>
										<FormattedMessage id="cardsPage.card1" />
									</MiniCard>

									<MiniCard>
										<FormattedMessage id="cardsPage.card3" />
									</MiniCard>

								</MiniCardsStack>

							</div>

							<div className="wave-wrapper">
								<ImgWrap imgSize="120px">
									<Img src={Wave} alt="wave decoration" />
								</ImgWrap>
							</div>

						</RightSideWrapper>

					</Column2>

				</AboutRow>
			</AboutWrapper>
		</AboutContainer>
	);
};

export default AboutSection;