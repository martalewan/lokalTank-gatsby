import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Document, Page, pdfjs } from 'react-pdf';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import filtry_FWP from '../../../images/filtry-FWP.pdf';
// import filtry_pionowe_FWL from '../../../images/FILTRY-PIONOWE-FWL.pdf';
import hydrofory_pionowe_HPB from '../../../images/Hydrofory-pionowe-HPB.pdf';
import odgazowywacze_termiczne from '../../../images/Odgazowywacze-termoczne-kaskadowe-typu-ODT.pdf';
import pionowe_zasobniki from '../../../images/Pionowe-zasobniki-ciepłej-wody-ZWV.pdf';
import WP_3 from '../../../images/WP-3x.pdf';
import waves from '../../../images/waves.svg';

import { Button } from '../../common/Button';
import {
	OfferContainer,
	OffersWrapper,
	Column1,
	TextWrapper,
	Heading,
	Column2,
	LinksWrapper,
	PDFModal,
	OfferBtn,
	OfferBtnSecondaryWrapper,
	OfferBtnSecondary,
	PopupBtn,
	StyledIcon,
	ItemWrapper,
	Text,
	Img,
	ImgWrap
} from './OfferElements';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const OfferSection = () => {
	const [show, setShow] = useState(false);
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const [showSecondaryLinks, setShowSecondaryLinks] = useState(false); // new state variable
	const [filePaths] = useState({
		zbiornikiMagazynowe: '',
		filtryCisnieniowe: filtry_FWP,
		mieszaczeWodnoPowietrzne: '',
		zbiornikiHydroforowe: hydrofory_pionowe_HPB,
		wymiennikiPojemnosciowe: WP_3,
		zasobnikiCieplejWodyLubPary: pionowe_zasobniki,
		odgazowywaczeTermiczne: odgazowywacze_termiczne,
		zbiornikiProcesowe: '',
	});
	const [selectedFile, setSelectedFile] = useState(filePaths.magazynowe);

	const handleClose = () => setShow(false);
	const handleShow = (pdfFile) => {
		setSelectedFile(pdfFile);
		setShow(true);
	};

	// eslint-disable-next-line no-shadow
	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
	}

	function toggleSecondaryLinks() {
		setShowSecondaryLinks(!showSecondaryLinks);
	}

	function handleNextPage() {
		if (pageNumber < numPages) {
			setPageNumber(pageNumber + 1);
		}
	}

	function handlePrevPage() {
		if (pageNumber > 1) {
			setPageNumber(pageNumber - 1);
		}
	}

	return (
		<OfferContainer id="oferta">
			<Heading>
				<FormattedMessage id="navigation.offer" />
			</Heading>
			<OffersWrapper>
				<Column1>
					<TextWrapper>
						<PDFModal show={show} onHide={handleClose} size="lg">
							{numPages > 0 ? (
								<Modal.Header>
									<FontAwesomeIcon
										icon={faTimes}
										className="close"
										onClick={handleClose}
										style={{ pointerEvent: 'none' }}
									/>
								</Modal.Header>
							) : null}

							<Modal.Body>
								<Document
									file={selectedFile}
									onLoadSuccess={onDocumentLoadSuccess}
								>
									<Page pageNumber={pageNumber} />
								</Document>
							</Modal.Body>

							{numPages > 0 ? (
								<Modal.Footer>
									<PopupBtn
										onClick={handlePrevPage}
										disabled={pageNumber === 1}
									>
                    Previous
									</PopupBtn>

									<PopupBtn
										onClick={handleNextPage}
										disabled={pageNumber === numPages}
									>
                    Next
									</PopupBtn>
								</Modal.Footer>
							) : null}
						</PDFModal>

						<LinksWrapper>
							<ItemWrapper>
								<OfferBtn>
									<FormattedMessage id="offer.zbiornikiMagazynowe" />
								</OfferBtn>
								<Button secondary>
									<FormattedMessage id="navigation.download" />
								</Button>
							</ItemWrapper>
							<ItemWrapper>
								<OfferBtn onClick={toggleSecondaryLinks}>
									<FormattedMessage id="offer.zbiornikiCiśnieniowe" />
									<StyledIcon />
								</OfferBtn>
							</ItemWrapper>

							{showSecondaryLinks && (
								<OfferBtnSecondaryWrapper>
									<ItemWrapper>
										<OfferBtnSecondary onClick={() => handleShow(filePaths.filtryCisnieniowe)}>
											<li>
												<FormattedMessage id="offer.filtryCiśnieniowe" />
											</li>
										</OfferBtnSecondary>
										<Button secondary>
											<FormattedMessage id="navigation.download" />
										</Button>
									</ItemWrapper>
									<ItemWrapper>
										<OfferBtnSecondary>
											<li>
												<FormattedMessage id="offer.mieszaczeWodnoPowietrzne" />
											</li>
										</OfferBtnSecondary>
										<Button secondary>
											<FormattedMessage id="navigation.download" />
										</Button>
									</ItemWrapper>
									<ItemWrapper>
										<OfferBtnSecondary onClick={() => handleShow(filePaths.zbiornikiHydroforowe)}>
											<li>
												<FormattedMessage id="offer.zbiornikiHydroforowe" />
											</li>
										</OfferBtnSecondary>
										<Button secondary>
											<FormattedMessage id="navigation.download" />
										</Button>
									</ItemWrapper>
									<ItemWrapper>
										<OfferBtnSecondary onClick={() => handleShow(filePaths.wymiennikiPojemnosciowe)}>
											<li>
												<FormattedMessage id="offer.wymiennikiPojemnościowe" />
											</li>
										</OfferBtnSecondary>
										<Button secondary>
											<FormattedMessage id="navigation.download" />
										</Button>
									</ItemWrapper>
									<ItemWrapper>
										<OfferBtnSecondary onClick={() => handleShow(filePaths.zasobnikiCieplejWodyLubPary)}>
											<li>
												<FormattedMessage id="offer.zasobnikiCiepłejWodyLubPary" />
											</li>
										</OfferBtnSecondary>
										<Button secondary>
											<FormattedMessage id="navigation.download" />
										</Button>
									</ItemWrapper>
									<ItemWrapper>
										<OfferBtnSecondary onClick={() => handleShow(filePaths.odgazowywaczeTermiczne)}>
											<li>
												<FormattedMessage id="offer.odgazowywaczeTermiczne" />
											</li>
										</OfferBtnSecondary>
										<Button secondary>
											<FormattedMessage id="navigation.download" />
										</Button>
									</ItemWrapper>
								</OfferBtnSecondaryWrapper>
							)}

							<ItemWrapper>
								<OfferBtn>
									<FormattedMessage id="offer.zbiornikiProcesowe" />
								</OfferBtn>
								<Button secondary>
									<FormattedMessage id="navigation.download" />
								</Button>
							</ItemWrapper>

							<ItemWrapper>
								<OfferBtn onClick={() => handleShow(filePaths.zbiornikiNaZamówienie)}>
									<FormattedMessage id="offer.zbiornikiNaZamówienie" />
								</OfferBtn>
								<Button secondary>
									<FormattedMessage id="navigation.download" />
								</Button>
							</ItemWrapper>

							<ItemWrapper>
								<OfferBtn>
									<FormattedMessage id="offer.konstrukcjeStalowe" />
								</OfferBtn>
								<Button secondary>
									<FormattedMessage id="navigation.download" />
								</Button>
							</ItemWrapper>

							<ItemWrapper>
								<OfferBtn>
									<FormattedMessage id="offer.instalacjeProcesowe" />
								</OfferBtn>
								<Button secondary>
									<FormattedMessage id="navigation.download" />
								</Button>
							</ItemWrapper>
						</LinksWrapper>
					</TextWrapper>
				</Column1>
				<Column2>
					<ImgWrap imgSize="150px">
						<Img src={waves} alt="Desc" />
					</ImgWrap>
					<Text>
						<FormattedMessage id="offer.text" />
					</Text>
				</Column2>
			</OffersWrapper>
		</OfferContainer>
	);
};

export default OfferSection;
