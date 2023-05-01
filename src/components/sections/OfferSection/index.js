import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Document, Page, pdfjs } from 'react-pdf';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import lokalTank6_16 from '../../../images/lokalTank6_16.pdf';
import { Button } from '../Button'
import {
	OfferContainer,
	AboutWrapper,
	AboutRow,
	Column1,
	TextWrapper,
	Heading,
	Column2,
	LinksWrapper,
	PDFModal,
	OfferBtn,
	OfferBtnSecondaryWrapper,
	OfferBtnSecondary,
	PageBtn,
	StyledIcon,
	ItemWrapper,
	Text
} from './OfferElements';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const OfferSection = () => {
	const [show, setShow] = useState(false);
	const [numPages, setNumPages] = useState(null);
	const [pageNumber, setPageNumber] = useState(1);
	const [showSecondaryLinks, setShowSecondaryLinks] = useState(false); // new state variable

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

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
		<OfferContainer lightBg id="oferta">
			<AboutWrapper elementHeight="380px">
				<AboutRow imgStart={false}>
					<Column1>
						<TextWrapper>
							<Heading lightText={false}>
								<FormattedMessage id="navigation.offer" />
							</Heading>

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
										file={lokalTank6_16}
										onLoadSuccess={onDocumentLoadSuccess}
									>
										<Page pageNumber={pageNumber} />
									</Document>
								</Modal.Body>

								{numPages > 0 ? (
									<Modal.Footer>
										<PageBtn onClick={handlePrevPage} disabled={pageNumber === 1}>
													Previous
										</PageBtn>

										<PageBtn
											onClick={handleNextPage}
											disabled={pageNumber === numPages}
										>
													Next
										</PageBtn>
									</Modal.Footer>
								) : null}


							</PDFModal>

							<LinksWrapper>
								<ItemWrapper>
									<OfferBtn onClick={handleShow}>
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
											<OfferBtnSecondary offset={-80} smooth duration={500}>
												<FormattedMessage id="offer.filtryCiśnieniowe" />
											</OfferBtnSecondary>
											<Button secondary>
												<FormattedMessage id="navigation.download" />
											</Button>
										</ItemWrapper>
										<ItemWrapper>
											<OfferBtnSecondary offset={-80} smooth duration={500}>
												<FormattedMessage id="offer.mieszaczeWodnoPowietrzne" />
											</OfferBtnSecondary>
											<Button secondary>
												<FormattedMessage id="navigation.download" />
											</Button>
										</ItemWrapper>
										<ItemWrapper>
											<OfferBtnSecondary offset={-80} smooth duration={500}>
												<FormattedMessage id="offer.zbiornikiHydroforowe" />
											</OfferBtnSecondary>
											<Button secondary>
												<FormattedMessage id="navigation.download" />
											</Button>
										</ItemWrapper>
										<ItemWrapper>
											<OfferBtnSecondary offset={-80} smooth duration={500}>
												<FormattedMessage id="offer.wymiennikiPojemnościowe" />
											</OfferBtnSecondary>
											<Button secondary>
												<FormattedMessage id="navigation.download" />
											</Button>
										</ItemWrapper>
										<ItemWrapper>
											<OfferBtnSecondary offset={-80} smooth duration={500}>
												<FormattedMessage id="offer.zasobnikiCiepłejWodyLubPary" />
											</OfferBtnSecondary>
											<Button secondary>
												<FormattedMessage id="navigation.download" />
											</Button>
										</ItemWrapper>
										<ItemWrapper>
											<OfferBtnSecondary offset={-80} smooth duration={500}>
												<FormattedMessage id="offer.odgazowywaczeTermiczne" />
											</OfferBtnSecondary>
											<Button secondary>
												<FormattedMessage id="navigation.download" />
											</Button>
										</ItemWrapper>
									</OfferBtnSecondaryWrapper>
								)}

								<ItemWrapper>
									<OfferBtn offset={-80} smooth duration={500}>
										<FormattedMessage id="offer.zbiornikiProcesowe" />
									</OfferBtn>
									<Button secondary>
										<FormattedMessage id="navigation.download" />
									</Button>
								</ItemWrapper>

								<ItemWrapper>

									<OfferBtn offset={-80} smooth duration={500}>
										<FormattedMessage id="offer.zbiornikiNaZamówienie" />
									</OfferBtn>
									<Button secondary>
										<FormattedMessage id="navigation.download" />
									</Button>
								</ItemWrapper>

								<ItemWrapper>

									<OfferBtn offset={-80} to="product4" smooth duration={500}>
										<FormattedMessage id="offer.konstrukcjeStalowe" />
									</OfferBtn>
									<Button secondary>
										<FormattedMessage id="navigation.download" />
									</Button>
								</ItemWrapper>

								<ItemWrapper>
									<OfferBtn offset={-80} to="product4" smooth duration={500}>
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
						<Text>
							<FormattedMessage id="aboutPage.p5" />
						</Text>
					</Column2>
				</AboutRow>
			</AboutWrapper>
		</OfferContainer>
	);
};

export default OfferSection;
