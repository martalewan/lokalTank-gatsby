import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
	ServicesCointeiner,
	ServicesH2,
	ServicesWrapper,
	ServicesCard,
	ServicesIcon,
	ServicesP
} from './CardsElements'
import tank from '../../../images/tank.svg'
import location from '../../../images/location.svg'
import progress from '../../../images/progress.svg'

const CardsSection = () => {
	return (
		<ServicesCointeiner>
			<ServicesH2>
				<FormattedMessage id="cardsPage.title" />
			</ServicesH2>
			<ServicesWrapper>

				<ServicesCard>
					<ServicesIcon src={tank} />
					<ServicesP>
						<FormattedMessage id="cardsPage.card1" />
					</ServicesP>
				</ServicesCard>

				<ServicesCard>
					<ServicesIcon src={location} />
					<ServicesP>
						<FormattedMessage id="cardsPage.card2" />
					</ServicesP>
				</ServicesCard>

				<ServicesCard>
					<ServicesIcon src={progress} />
					<ServicesP>
						<FormattedMessage id="cardsPage.card3" />
					</ServicesP>
				</ServicesCard>
			</ServicesWrapper>
		</ServicesCointeiner>
	)
}

export default CardsSection;
