import React from 'react'
import Helmet from 'react-helmet'
import { useIntl } from 'react-intl'
import config from '../../../../data/config'
import configUk from '../../../../data/configUk'
import { useI18n } from '../../../providers/LanguageProvider'

const SEO = ({ location = '', title }) => {
	const { lang } = useI18n()
	const { formatMessage } = useIntl()

	const structuredDataOrganization = `{ 
		"@context": "http://schema.org",
		"@type": "Organization",
		"legalName": "${lang === 'uk' ? configUk.legalName : config.legalName}",
		"url": "${config.url}",
		"logo": "${config.logo}",
		"foundingDate": "${config.foundingDate}",
		"founders": [{
			"@type": "Person",
			"name": "${lang === 'uk' ? configUk.legalName : config.legalName}"
		}],
		"contactPoint": [{
			"@type": "ContactPoint",
			"email": "${config.contact.email}",
			"telephone": "${config.contact.phone}",
			"contactType": "customer service"
		}],
		"address": {
			"@type": "PostalAddress",
			"addressLocality": "${lang === 'uk' ? configUk.address.city : config.address.city}",
			"addressRegion": "${lang === 'uk' ? configUk.address.region : config.address.region}",
			"addressCountry": "${lang === 'uk' ? configUk.address.country : config.address.country}",
			"postalCode": "${config.address.zipCode}"
		},
		"sameAs": [
			"${config.socialLinks.twitter}",
			"${config.socialLinks.google}",
			"${config.socialLinks.youtube}",
			"${config.socialLinks.linkedin}",
			"${config.socialLinks.instagram}",
			"${config.socialLinks.github}"
		]
	}`

	return (
		<Helmet>
			<html lang={lang} />
			<meta name="google-site-verification" content={config.googleVerification} />
			<link rel="shortcut icon" href={config.favicon} />

			<meta name="robots" content="index, follow" />
			<meta name="description" content={lang === 'uk' ? configUk.description : config.description} />
			<meta name="image" content={config.cover} />

			<meta property="og:url" content={`${config.url}${location}`} />
			<meta property="og:type" content="website" />
			<meta property="og:title" content={lang === 'uk' ? configUk.title : config.title} />
			<meta property="og:description" content={lang === 'uk' ? configUk.description : config.description} />
			<meta property="og:image" content={config.cover} />
			<meta property="fb:app_id" content={config.social.facebook} />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:creator" content={config.social.twitter} />
			<meta name="twitter:site" content={config.socialLinks.twitter} />
			<meta name="twitter:title" content={lang === 'uk' ? configUk.title : config.title} />
			<meta name="twitter:description" content={lang === 'uk' ? configUk.description : config.description} />
			<meta name="twitter:image:src" content={config.cover} />
			<script type="application/ld+json">{structuredDataOrganization}</script>
			<link rel="publisher" href={config.socialLinks.google} />
			<title>
				{formatMessage({ id: title })}
			</title>
		</Helmet>
	)
}

export default SEO
