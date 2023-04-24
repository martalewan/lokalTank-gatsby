import React, { useRef } from 'react';
import { FormattedMessage } from 'react-intl';
import emailjs from '@emailjs/browser';
import glassImg from '../../../images/glassImg.jpg';
import waves from '../../../images/waves.svg';

import {
	ContactContainer,
	ContactWrapper,
	ContactRow,
	Column1,
	Column2,
	ImgWrap,
	Img,
	StyledContactForm
} from './ContactElements';

const ContactSection = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				'replace with service id',
				'replace with template id',
				form.current,
				'replace with user id'
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log('message sent');
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<ContactContainer lightBg id="kontakt">
			<ContactWrapper elementHeight="750px">
				<ContactRow imgStart={false}>
					<Column1>
						<StyledContactForm>
							<form ref={form} onSubmit={sendEmail}>
								<label>Name</label>
								<input type="text" name="user_name" />
								<label>Email</label>
								<input type="email" name="user_email" />
								<label>Message</label>
								<textarea name="message" />
								<input type="submit" value="Send" />
							</form>
						</StyledContactForm>

					</Column1>
					<Column2>

						<ImgWrap imgSize="150px">
							<Img src={waves} alt="Desc" />
						</ImgWrap>

						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2547.6286592474958!2d18.970595116405708!3d50.317521579457406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4716d2413713289f%3A0xd2aa5e4087cd7f03!2sGabriela%20Narutowicza%2015%2C%2041-503%20Chorz%C3%B3w%2C%20Poland!5e0!3m2!1sen!2sse!4v1673188109282!5m2!1sen!2sse"
							width="100%"
							height="265"
							style={{ border: 0, marginTop: '20px' }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="map"
						/>
					</Column2>
				</ContactRow>
			</ContactWrapper>
		</ContactContainer>
	);
};

export default ContactSection;
