import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
	GaleryContainer,
	ServicesH2,
	ImageWrapper,
	ImplementationBtn,
	ImgLeft,
	ImagesContainer
} from './GaleryElements'

import Filtr_ciśnieniowy from '../../../images/Filtr_ciśnieniowy.png'
import Filtry_ciśnieniowe_gumowane from '../../../images/Filtry_ciśnieniowe_gumowane.png'
import Odgazowywacz_termiczny from '../../../images/Odgazowywacz_termiczny.png'
import Przesiewacz from '../../../images/Przesiewacz.png'
import Stopy_do_obudowy from '../../../images/Stopy_do_obudowy.png'
import Wkład_stalowy_do_wymiennika_2 from '../../../images/Wkład_stalowy_do_wymiennika_2.png'
import Wkłady_mosiężne_do_wymienników_2 from '../../../images/Wkłady_mosiężne_do_wymienników_2.png'
import Zbiornik_hydroforofy_ocynkowany from '../../../images/Zbiornik_hydroforofy_ocynkowany2.png'
import Zbiornik_magazynowy_pary_kondensatu from '../../../images/Zbiornik_magazynowy_pary_kondensatu.png'

const GalerySection = () => {
	return (
		<GaleryContainer id="galeria">
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
			<ImagesContainer>
				<ImageWrapper>
					<ImgLeft src={Filtr_ciśnieniowy} alt="Desc" />
					<p>Filtr ciśnieniowy</p>
				</ImageWrapper>
				<ImageWrapper>
					<ImgLeft src={Filtry_ciśnieniowe_gumowane} alt="Desc" />
					<p>Filtry ciśnieniowe gumowane</p>
				</ImageWrapper>
				<ImageWrapper>
					<ImgLeft src={Odgazowywacz_termiczny} alt="Desc" />
					<p>Odgazowywacz termiczny</p>
				</ImageWrapper>
				<ImageWrapper>
					<ImgLeft src={Przesiewacz} alt="Desc" />
					<p>Przesiewacz</p>
				</ImageWrapper>
				<ImageWrapper>
					<ImgLeft src={Stopy_do_obudowy} alt="Desc" />
					<p>Stopy do obudowy</p>
				</ImageWrapper>
				<ImageWrapper>
					<ImgLeft src={Wkład_stalowy_do_wymiennika_2} alt="Desc" />
					<p>Wkład stalowy do wymiennika</p>
				</ImageWrapper>
				<ImageWrapper>
					<ImgLeft src={Wkłady_mosiężne_do_wymienników_2} alt="Desc" />
					<p>Wkłady mosiężne do wymienników</p>
				</ImageWrapper>
				<ImageWrapper>
					<ImgLeft src={Zbiornik_hydroforofy_ocynkowany} alt="Desc" />
					<p>Zbiornik hydroforofy ocynkowany</p>
				</ImageWrapper>
				<ImageWrapper>
					<ImgLeft src={Zbiornik_magazynowy_pary_kondensatu} alt="Desc" />
					<p>Zbiornik magazynowy pary kondensatu</p>
				</ImageWrapper>
			</ImagesContainer>
		</GaleryContainer>
	)
}

export default GalerySection;
