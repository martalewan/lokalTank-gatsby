import React from 'react'
import { IntlProvider } from 'react-intl'
import { useI18n } from '../../../providers/LanguageProvider'
import localEng from '../../../../data/en.json'
import localUa from '../../../../data/ua.json'
import localPl from '../../../../data/pl.json'
import localDe from '../../../../data/de.json'
import { Global } from './styles'
import './layout.css'


const messages = {
	en: localEng,
	ua: localUa,
	pl: localPl,
	de: localDe
}

const Layout = ({ children }) => {
	const { lang } = useI18n()
	return (
		<IntlProvider locale={lang} messages={messages[lang]}>
			<Global lang={lang}>
				{children}
			</Global>
		</IntlProvider>
	)
}

export default Layout
