import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
	CardsCointeiner,
	ServicesH2,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesP
} from './CardsElements'
import tank from '../../../images/tank.svg'
import Line from '../../common/Line'

const CardsSection = () => {
	return (
		<CardsCointeiner>
			<ServicesH2>
				<FormattedMessage id="cardsPage.title" />
			</ServicesH2>
			<ServicesWrapper>

				<ServicesCard>
					<Line />
					<ServicesP>
						<FormattedMessage id="cardsPage.card1" />
					</ServicesP>
					<Line />

				</ServicesCard>

				<ServicesCard>
					<ServicesIcon src={tank} />
					<ServicesP>
						<FormattedMessage id="cardsPage.card2" />
					</ServicesP>
				</ServicesCard>

				<ServicesCard>
					<Line />

					<ServicesP>
						<FormattedMessage id="cardsPage.card3" />
					</ServicesP>
					<Line />

				</ServicesCard>
			</ServicesWrapper>
		</CardsCointeiner>
	)
}

export default CardsSection;
