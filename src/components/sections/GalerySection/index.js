import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
	GaleryContainer,
	ServicesH2,
	ImageWrapper,
	ImgLeft,
	ImagesContainer,
	PhotoDescription
} from './GaleryElements'
import Line from '../../common/Line/index'
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
			<Line />

			{/* <div>
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
			</div> */}
			<ImagesContainer>
				<ImageWrapper>
					<ImgLeft src={Filtr_ciśnieniowy} alt="Desc" />
					<PhotoDescription>Filtr ciśnieniowy</PhotoDescription>
				</ImageWrapper>
				<ImageWrapper>
					<ImgLeft src={Filtry_ciśnieniowe_gumowane} alt="Desc" />
					<PhotoDescription>Filtry ciśnieniowe gumowane</PhotoDescription>
				</ImageWrapper>
				<ImageWrapper>
					<ImgLeft src={Odgazowywacz_termiczny} alt="Desc" />
					<PhotoDescription>Odgazowywacz termiczny</PhotoDescription>
				</ImageWrapper>
				<ImageWrapper>
					<ImgLeft src={Przesiewacz} alt="Desc" />
					<PhotoDescription>Przesiewacz</PhotoDescription>
				</ImageWrapper>
				<ImageWrapper>
					<ImgLeft src={Stopy_do_obudowy} alt="Desc" />
					<PhotoDescription>Stopy do obudowy</PhotoDescription>
				</ImageWrapper>
				<ImageWrapper>
					<ImgLeft src={Wkład_stalowy_do_wymiennika_2} alt="Desc" />
					<PhotoDescription>Wkład stalowy do wymiennika</PhotoDescription>
				</ImageWrapper>
				<ImageWrapper>
					<ImgLeft src={Wkłady_mosiężne_do_wymienników_2} alt="Desc" />
					<PhotoDescription>Wkłady mosiężne do wymienników</PhotoDescription>
				</ImageWrapper>
				<ImageWrapper>
					<ImgLeft src={Zbiornik_hydroforofy_ocynkowany} alt="Desc" />
					<PhotoDescription>Zbiornik hydroforofy ocynkowany</PhotoDescription>
				</ImageWrapper>
				<ImageWrapper>
					<ImgLeft src={Zbiornik_magazynowy_pary_kondensatu} alt="Desc" />
					<PhotoDescription>Zbiornik magazynowy pary kondensatu</PhotoDescription>
				</ImageWrapper>
			</ImagesContainer>
		</GaleryContainer>
	)
}

export default GalerySection;
