import React from 'react'
import { FormattedMessage } from 'react-intl'
import { MainContainer, MainBg, ImageBg, MainH1, MainP, BtnWrap } from './MainElements'
import { ButtonLink } from '../../common/ButtonLink';

const Main = () => {
	return (
		<MainContainer id="home">
			<MainBg>
				<ImageBg />
			</MainBg>
			<MainH1>
				<FormattedMessage id="mainPage.header" />
			</MainH1>
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
			</BtnWrap>

			<MainP>
				<FormattedMessage id="mainPage.description" />
			</MainP>
		</MainContainer>
	)
}

export default Main
