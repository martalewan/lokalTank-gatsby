import React from 'react';
import { FormattedMessage } from 'react-intl'
import Wave from '../../../images/wave-gray.svg';

import {
	AboutContainer,
	AboutWrapper,
	AboutRow,
	Column1,
	TextWrapper,
	Heading,
	Text,
	BtnWrap,
	Column2,
	ImgWrap,
	Img,
} from './AboutElements';
import { Button } from './../Button';

const AboutSection = () => {
	return (
		<AboutContainer lightBg="true" id="onas">
			<AboutWrapper elementHeight="750px">
				<AboutRow imgStart={false}>
					<Column1>
						<TextWrapper>
							<Heading lightText={false}>
								<FormattedMessage id="about" />
							</Heading>
							<Text darkText={false}>
								<FormattedMessage id="aboutPage.p1" />
								<br />
								<br />
								<FormattedMessage id="aboutPage.p2" />
								<br />
								<br />
								<FormattedMessage id="aboutPage.p3" />
								<br />
								<br />
								<FormattedMessage id="aboutPage.p4" />
								<br />
								<br />
								<FormattedMessage id="aboutPage.p5" />
								<br />
								<br />
								<FormattedMessage id="aboutPage.p6" />
								<br />
								<br />

							</Text>

							<BtnWrap>
								<Button
									to="oferta"
									smooth
									duration={500}
									spy
									offset={-80}
								>
									<FormattedMessage id="navigation.offer" />
								</Button>

								<Button
									to="kontakt"
									smooth
									duration={500}
									spy
									offset={-80}
								>
									<FormattedMessage id="navigation.contact" />
								</Button>

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
