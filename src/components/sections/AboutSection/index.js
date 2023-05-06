import React from 'react';
import { FormattedMessage } from 'react-intl'
import Wave from '../../../images/wave.svg';

import {
	AboutContainer,
	AboutWrapper,
	AboutRow,
	Column1,
	TextWrapper,
	Text,
	BtnWrap,
	Column2,
	ImgWrap,
	Img,
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
							<Text style={{ color: colors.darkGray, fontSize: '20px', fontWeight: 800, lineHeight: 1.6 }}>
								<FormattedMessage
									id="aboutPage.p1"
									values={{
										boldText: <strong>Lalala</strong>
									}}
								/>
							</Text>
							<Text>
								<FormattedMessage id="aboutPage.p2" />
							</Text>
							<Text>
								<FormattedMessage id="aboutPage.p3" />
							</Text>
							<Text>
								<FormattedMessage id="aboutPage.p4" />
							</Text>
							<Text>
								<FormattedMessage id="aboutPage.p5" />
							</Text>
							<BtnWrap>
								<ButtonLink
									to="oferta"
									smooth
									duration={500}
									spy
									offset={-80}
								>
									<FormattedMessage id="navigation.offer" />
								</ButtonLink>

								<ButtonLink
									to="kontakt"
									smooth
									duration={500}
									spy
									offset={-80}
								>
									<FormattedMessage id="navigation.contact" />
								</ButtonLink>

							</BtnWrap>
						</TextWrapper>
					</Column1>
					<Column2>

						<ImgWrap imgSize="120px">
							<Img src={Wave} alt="Desc" />
						</ImgWrap>

					</Column2>
				</AboutRow>
			</AboutWrapper>
		</AboutContainer>
	);
};

export default AboutSection;
