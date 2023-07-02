import React from 'react'
import { FormattedMessage } from 'react-intl'
import {
	GaleryContainer,
	ServicesH2,
	ImageWrapper,
	ImgImp,
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
					<ImgImp src={Filtr_ciśnieniowy} alt="Filtr ciśnieniowy" />
					<PhotoDescription>
						<FormattedMessage id="galeryPage.pressureFilter" />
					</PhotoDescription>
				</ImageWrapper>
				<ImageWrapper>
					<ImgImp src={Filtry_ciśnieniowe_gumowane} alt="Filtry ciśnieniowe gumowane" />
					<PhotoDescription>
						<FormattedMessage id="galeryPage.pressureFilterCoated" />
					</PhotoDescription>
				</ImageWrapper>
				<ImageWrapper>
					<ImgImp src={Odgazowywacz_termiczny} alt="Odgazowywacz termiczny" />
					<PhotoDescription>
						<FormattedMessage id="galeryPage.thermalDeaerator" />
					</PhotoDescription>
				</ImageWrapper>
				<ImageWrapper>
					<ImgImp src={Przesiewacz} alt="Przesiewacz" />
					<PhotoDescription>
						<FormattedMessage id="galeryPage.sifter" />
					</PhotoDescription>
				</ImageWrapper>
				<ImageWrapper>
					<ImgImp src={Stopy_do_obudowy} alt="Stopy do obudowy" />
					<PhotoDescription>
						<FormattedMessage id="galeryPage.metalConstruction" />
					</PhotoDescription>
				</ImageWrapper>
				<ImageWrapper>
					<ImgImp src={Wkład_stalowy_do_wymiennika_2} alt="Wkład stalowy do wymiennika" />
					<PhotoDescription>
						<FormattedMessage id="galeryPage.steelCartridgeForHeat" />
					</PhotoDescription>
				</ImageWrapper>
				<ImageWrapper>
					<ImgImp src={Wkłady_mosiężne_do_wymienników_2} alt="Wkłady mosiężne do wymienników" />
					<PhotoDescription>
						<FormattedMessage id="galeryPage.brassCartridgeForHeat" />
					</PhotoDescription>
				</ImageWrapper>
				<ImageWrapper>
					<ImgImp src={Zbiornik_hydroforofy_ocynkowany} alt="Zbiornik hydroforofy ocynkowany" />
					<PhotoDescription>
						<FormattedMessage id="galeryPage.galvanizedWaterTank" />
					</PhotoDescription>
				</ImageWrapper>
				<ImageWrapper>
					<ImgImp src={Zbiornik_magazynowy_pary_kondensatu} alt="Zbiornik magazynowy pary kondensatu" />
					<PhotoDescription>
						<FormattedMessage id="galeryPage.storageTankForCondensate" />
					</PhotoDescription>
				</ImageWrapper>
			</ImagesContainer>
		</GaleryContainer>
	)
}

export default GalerySection;
