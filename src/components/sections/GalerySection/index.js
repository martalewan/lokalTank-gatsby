import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
	ServicesCointeiner,
	ServicesH2,
	ServicesWrapper,
	ImplementationBtn,
	ImgLeft
} from './GaleryElements'
import glassImg from '../../../images/glassImg.jpg'
import Line from '../../common/Line'

const GalerySection = () => {
	return (
		<ServicesCointeiner id="galeria">
			<Line />
			<ServicesH2>
				<FormattedMessage id="galeryPage.title" />
			</ServicesH2>
			<div>
				<ImplementationBtn>
					<FormattedMessage id="galeryPage.subtitle1" />
				</ImplementationBtn>

				<ImplementationBtn>
					<FormattedMessage id="galeryPage.subtitle2" />
				</ImplementationBtn>

				<ImplementationBtn>
					<FormattedMessage id="galeryPage.subtitle3" />
				</ImplementationBtn>


				<ImplementationBtn>
					<FormattedMessage id="galeryPage.subtitle4" />
				</ImplementationBtn>

				<ImplementationBtn>
					<FormattedMessage id="galeryPage.subtitle5" />
				</ImplementationBtn>

				<ImplementationBtn>
					<FormattedMessage id="galeryPage.subtitle6" />
				</ImplementationBtn>

				<ImplementationBtn>
					<FormattedMessage id="galeryPage.subtitle7" />
				</ImplementationBtn>
			</div>

			<ServicesWrapper>
				<ImgLeft src={glassImg} alt="Desc" />
			</ServicesWrapper>
			<div className="eltd-listing-related-content">
				<p> Grisslinge, Sweden</p>
			</div>


		</ServicesCointeiner>
	)
}

export default GalerySection;
