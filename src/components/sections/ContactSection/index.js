/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FormattedMessage } from 'react-intl';
import { Button } from '../../common/Button';
import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaBuilding
} from 'react-icons/fa';

import {
	ContactContainer,
	ContactRow,
	Column1,
	Column2,
	StyledContactForm,
	ContactH2,
	ContactInfo,
	EmailLink,
	MapWrapper
} from './ContactElements';

export const sendMail = () => {
	const recipient = 'me@example.com';
	const subject = 'Wiadomosc w sprawie oferty Lokal Tank';
	const body = '';

	const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

	window.location.href = mailtoUrl;
};

const ContactSection = () => {
	const [successMessage, setSuccessMessage] = useState('');
	const [errorMessage, setErrorMessage] = useState('');
	const [formData, setFormData] = useState({
		user_topic: '',
		message: '',
		user_name: '',
		user_number: '',
		user_email: '',
	});

	const sendEmailForm = (e) => {
		e.preventDefault();

		emailjs
			.send(
				'service_ko1vxj9',
				'template_zw1aosf',
				formData,
				'hKL4V3pCvAaCEoZa4'
			)
			.then(
				(response) => {
					console.log('SUCCESS!', response.status, response.text);
					setSuccessMessage('success');
					setErrorMessage('');
				},
				(error) => {
					console.log('FAILED...', error);
					setSuccessMessage('');
					setErrorMessage('error');
				}
			);

		setFormData({
			user_topic: '',
			message: '',
			user_name: '',
			user_number: '',
			user_email: '',
		});
	};

	return (
		<ContactContainer id="kontakt">
			<ContactH2>
				<FormattedMessage id="contactPage.contactForm" />
			</ContactH2>

			<ContactRow>
				<Column1>
					<StyledContactForm>
						<form onSubmit={sendEmailForm}>
							<label htmlFor="user_topic">
								<span>
									<FormattedMessage id="contactPage.topic" />
									<span className="required"> *</span>
								</span>

								<input
									required
									type="text"
									name="user_topic"
									id="user_topic"
									value={formData.user_topic}
									onChange={(e) =>
										setFormData({
											...formData,
											user_topic: e.target.value,
										})
									}
								/>
							</label>

							<label htmlFor="message">
								<span>
									<FormattedMessage id="contactPage.message" />
									<span className="required"> *</span>
								</span>

								<textarea
									required
									name="message"
									id="message"
									value={formData.message}
									onChange={(e) =>
										setFormData({
											...formData,
											message: e.target.value,
										})
									}
								/>
							</label>

							<label htmlFor="user_name">
								<span>
									<FormattedMessage id="contactPage.nameAndCompany" />
									<span className="required"> *</span>
								</span>

								<input
									required
									type="text"
									name="user_name"
									id="user_name"
									value={formData.user_name}
									onChange={(e) =>
										setFormData({
											...formData,
											user_name: e.target.value,
										})
									}
								/>
							</label>

							<label htmlFor="user_number">
								<span>
									<FormattedMessage id="contactPage.phoneNumber" />
								</span>

								<input
									type="text"
									name="user_number"
									id="user_number"
									value={formData.user_number}
									onChange={(e) =>
										setFormData({
											...formData,
											user_number: e.target.value,
										})
									}
								/>
							</label>

							<label htmlFor="user_email">
								<span>
									<FormattedMessage id="contactPage.emailAdress" />
									<span className="required"> *</span>
								</span>

								<input
									required
									type="text"
									name="user_email"
									id="user_email"
									value={formData.user_email}
									onChange={(e) =>
										setFormData({
											...formData,
											user_email: e.target.value,
										})
									}
								/>
							</label>

							<Button type="submit">
								<FormattedMessage id="contactPage.send" />
							</Button>
						</form>

						{successMessage && (
							<p className="success-message">
								<FormattedMessage id="contactPage.successMessage" />
							</p>
						)}

						{errorMessage && (
							<p className="error-message">
								<FormattedMessage id="contactPage.errorMessage" />
							</p>
						)}
					</StyledContactForm>
				</Column1>

				<Column2>
					<div className="contact-card">
						<div className="contact-item">
							<div className="contact-icon">
								<FaMapMarkerAlt />
							</div>

							<div>
								<span>Address</span>
								<p>Ul. Gabriela Narutowicza 15</p>
								<p>41-530 Chorzów</p>
							</div>
						</div>

						<div className="contact-item">
							<div className="contact-icon">
								<FaBuilding />
							</div>

							<div>
								<span>Company</span>
								<p>NIP: 6272782103</p>
							</div>
						</div>

						<div className="contact-item">
							<div className="contact-icon">
								<FaPhoneAlt />
							</div>

							<div>
								<span>Phone</span>
								<p>+48 517 580 300</p>
								<p>+48 664 570 171</p>
							</div>
						</div>

						<div className="contact-item">
							<div className="contact-icon">
								<FaEnvelope />
							</div>

							<div>
								<span>Email</span>

								<EmailLink onClick={sendMail}>
									biuro@lokaltank.pl
								</EmailLink>
							</div>
						</div>
					</div>

				</Column2>
			</ContactRow>
		</ContactContainer>
	);
};

export default ContactSection;