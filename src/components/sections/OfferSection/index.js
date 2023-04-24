import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { FormattedMessage } from 'react-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Document, Page, pdfjs } from 'react-pdf';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import lokalTank6_16 from '../../../images/lokalTank6_16.pdf';

import {
	AboutContainer,
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

	// new function to toggle the visibility of the secondary links
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
		<AboutContainer lightBg id="oferta">
			<AboutWrapper elementHeight="380px">
				<AboutRow imgStart={false}>
					<Column1>
						<TextWrapper>
							<Heading lightText={false}>
								<FormattedMessage id="navigation.offer" />
							</Heading>

							<PDFModal show={show} onHide={handleClose} size="lg">
								<Modal.Header>
									<FontAwesomeIcon
										icon={faTimes}
										className="close"
										onClick={handleClose}
									/>
								</Modal.Header>
								<Modal.Body>
									<Document
										file={lokalTank6_16}
										onLoadSuccess={onDocumentLoadSuccess}
									>
										<Page pageNumber={pageNumber} />
									</Document>
								</Modal.Body>

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
							</PDFModal>

							<LinksWrapper>
								<OfferBtn onClick={handleShow}>
									<FormattedMessage id="offer.zbiornikiMagazynowe" />
								</OfferBtn>

								<OfferBtn onClick={toggleSecondaryLinks}>
									<FormattedMessage id="offer.zbiornikiCiśnieniowe" />
								</OfferBtn>

								{showSecondaryLinks && (
									<OfferBtnSecondaryWrapper>
										<OfferBtnSecondary offset={-80} smooth duration={500}>
											<FormattedMessage id="offer.filtryCiśnieniowe" />
										</OfferBtnSecondary>

										<OfferBtnSecondary offset={-80} smooth duration={500}>
											<FormattedMessage id="offer.mieszaczeWodnoPowietrzne" />
										</OfferBtnSecondary>

										<OfferBtnSecondary offset={-80} smooth duration={500}>
											<FormattedMessage id="offer.zbiornikiHydroforowe" />
										</OfferBtnSecondary>

										<OfferBtnSecondary offset={-80} smooth duration={500}>
											<FormattedMessage id="offer.wymiennikiPojemnościowe" />
										</OfferBtnSecondary>

										<OfferBtnSecondary offset={-80} smooth duration={500}>
											<FormattedMessage id="offer.zasobnikiCiepłejWodyLubPary" />
										</OfferBtnSecondary>

										<OfferBtnSecondary offset={-80} smooth duration={500}>
											<FormattedMessage id="offer.odgazowywaczeTermiczne" />
										</OfferBtnSecondary>
									</OfferBtnSecondaryWrapper>
								)}

								<OfferBtn offset={-80} smooth duration={500}>
									<FormattedMessage id="offer.zbiornikiProcesowe" />
								</OfferBtn>

								<OfferBtn offset={-80} to="product4" smooth duration={500}>
									<FormattedMessage id="offer.zbiornikiProcesowe" />
								</OfferBtn>

								<OfferBtn offset={-80} to="product4" smooth duration={500}>
									<FormattedMessage id="offer.konstrukcjeStalowe" />
								</OfferBtn>

								<OfferBtn offset={-80} to="product4" smooth duration={500}>
									<FormattedMessage id="offer.InstalacjeProcesowe" />
								</OfferBtn>
							</LinksWrapper>
						</TextWrapper>
					</Column1>
					<Column2 />
				</AboutRow>
			</AboutWrapper>
		</AboutContainer>
	);
};

export default OfferSection;
