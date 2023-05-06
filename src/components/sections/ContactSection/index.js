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
	ContactInfo
} from './ContactElements';

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

	const sendEmail = (e) => {
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
		<ContactContainer lightBg id="kontakt">
			<ContactH2>
				<FormattedMessage id="contactPage.contactForm" />
			</ContactH2>
			<ContactRow>
				<Column1>
					<StyledContactForm>


						<form onSubmit={sendEmail}>
							<label htmlFor="user_topic">
								<FormattedMessage id="contactPage.topic" />
				  <span className="required"> *</span>
							</label>
							<input
								required
								type="text"
								name="user_topic"
								id="user_topic"
								value={formData.user_topic}
								onChange={(e) => setFormData({ ...formData, user_topic: e.target.value })
								}
							/>

							<label htmlFor="message">
								<FormattedMessage id="contactPage.message" />
				  <span className="required"> *</span>
							</label>
							<textarea
								required
								name="message"
								id="message"
								value={formData.message}
								onChange={(e) => setFormData({ ...formData, message: e.target.value })
								}
							/>

							<label htmlFor="user_name">
								<FormattedMessage id="contactPage.nameAndCompany" />
								<span className="required"> *</span>
							</label>
							<input
								required
								type="text"
								name="user_name"
								id="user_name"
								value={formData.user_name}
								onChange={(e) => setFormData({ ...formData, user_name: e.target.value })
								}
							/>

							<label htmlFor="user_number">
								<FormattedMessage id="contactPage.phoneNumber" />
							</label>
							<input
								type="text"
								name="user_number"
								id="user_number"
								value={formData.user_number}
								onChange={(e) => setFormData({ ...formData, user_number: e.target.value })
								}
							/>

							<label htmlFor="user_email">
								<FormattedMessage id="contactPage.emailAdress" />
								<span className="required"> *</span>
							</label>
							<input
								required
								type="text"
								name="user_email"
								id="user_email"
								value={formData.user_email}
								onChange={(e) => setFormData({ ...formData, user_email: e.target.value })
								}
							/>
							<Button type="submit">
								<FormattedMessage id="contactPage.send" />
							</Button>
						</form>

						{successMessage && (
							<p style={{ color: 'green' }}>
								<FormattedMessage id="contactPage.successMessage" />
							</p>
						)}
						{errorMessage && (
							<p style={{ color: 'red' }}>
								<FormattedMessage id="contactPage.errorMessage" />
							</p>
						)}
					</StyledContactForm>
				</Column1>
				<Column2>
					<ContactInfo>Ul. Gabriela Narutowicza 15,</ContactInfo>
					<ContactInfo>41-530 Chorzów NIP: 6272782103</ContactInfo>
					<ContactInfo>Tel. +48 517 580 300/ +48 664 570 171</ContactInfo>
					<ContactInfo>E-mail: biuro@lokaltank.pl</ContactInfo>

					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2547.6286592474958!2d18.970595116405708!3d50.317521579457406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d2413713289f%3A0xd2aa5e4087cd7f03!2sGabriela%20Narutowicza%2015%2C%2041-503%20Chorz%C3%B3w%2C%20Poland!5e0!3m2!1sen!2sse!4v1673188109282!5m2!1sen!2sse"
						width="100%"
						height="335px"
						style={{ border: 0, marginTop: '20px' }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
						title="map"
					/>
				</Column2>
			</ContactRow>
		</ContactContainer>
	);
};

export default ContactSection;
