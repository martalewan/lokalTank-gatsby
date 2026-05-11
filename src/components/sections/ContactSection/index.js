/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FormattedMessage } from 'react-intl';
import { Button } from '../../common/Button';

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
						<ContactInfo>Ul. Gabriela Narutowicza 15</ContactInfo>

						<ContactInfo>41-530 Chorzów • NIP: 6272782103</ContactInfo>

						<ContactInfo>
							📞 +48 517 580 300 / +48 664 570 171
						</ContactInfo>

						<ContactInfo>
							📧 E-mail:{' '}
							<EmailLink onClick={sendMail}>
								biuro@lokaltank.pl
							</EmailLink>
						</ContactInfo>
					</div>

					<MapWrapper>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8332.704702418963!2d18.96786994261085!3d50.31497758123612!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d3d4e4473f17%3A0xb6ebe39ff8c81015!2sLokal%20Tank%20Sp.%20z%20o.o.!5e0!3m2!1sen!2sse!4v1683493673559!5m2!1sen!2ssee"
							width="100%"
							height="235px"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="map"
						/>
					</MapWrapper>
				</Column2>
			</ContactRow>
		</ContactContainer>
	);
};

export default ContactSection;