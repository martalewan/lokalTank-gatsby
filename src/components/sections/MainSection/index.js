import React from 'react'
import { FormattedMessage } from 'react-intl'
import { MainContainer, MainBg, ImageBg, MainH1, MainP, BtnWrap } from './MainElements'
import { Button } from '../Button';

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

				<Button
					to="oferta"
					smooth
					duration={500}
					spy
					offset={-80}
				>
					<FormattedMessage id="navigation.offer" />
				</Button>
			</BtnWrap>

			<MainP>
				<FormattedMessage id="mainPage.descrition" />
			</MainP>
		</MainContainer>
	)
}

export default Main
