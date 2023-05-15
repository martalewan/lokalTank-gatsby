import React from 'react';
import Helmet from 'react-helmet';
import { useIntl } from 'react-intl';
import { useI18n } from '../../../providers/LanguageProvider';
import config from '../../../../data/config';
import configUk from '../../../../data/configUk';

const SEO = ({ location = '', title }) => {
	const { lang } = useI18n();
	const { formatMessage } = useIntl();

	const currentConfig = lang === 'uk' ? configUk : config;

	const structuredDataOrganization = {
		'@context': 'http://schema.org',
		'@type': 'Organization',
		legalName: currentConfig.legalName,
		url: currentConfig.url,
		logo: currentConfig.logo,
		foundingDate: currentConfig.foundingDate,
		founders: [{
			'@type': 'Person',
			name: currentConfig.legalName,
		}],
		contactPoint: [{
			'@type': 'ContactPoint',
			email: currentConfig.contact.email,
			telephone: currentConfig.contact.phone,
			contactType: 'customer service',
		}],
		address: {
			'@type': 'PostalAddress',
			addressLocality: currentConfig.address.city,
			addressRegion: currentConfig.address.region,
			addressCountry: currentConfig.address.country,
			postalCode: currentConfig.address.zipCode,
		},
		sameAs: [
			currentConfig.socialLinks.linkedin,
		],
	};

	return (
		<Helmet>
			<html lang={lang} />
			<meta name="author" content="Lokal Tank" />
			<meta name="keywords" content="LokalTank, LokalTank," />
			<meta name="google-site-verification" content={currentConfig.googleVerification} />
			<link rel="shortcut icon" href={currentConfig.favicon} />
			<meta name="robots" content="index, follow" />
			<meta name="description" content={currentConfig.description} />
			<meta name="image" content={currentConfig.cover} />
			<meta property="og:url" content={`${currentConfig.url}${location}`} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={currentConfig.title} />
			<meta property="og:description" content={currentConfig.description} />
			<meta property="og:image" content={currentConfig.cover} />
			<script type="application/ld+json">{JSON.stringify(structuredDataOrganization)}</script>
			<link rel="publisher" href={currentConfig.socialLinks.google} />
			<title>{formatMessage({ id: title })}</title>
		</Helmet>
	);
};

export default SEO;
