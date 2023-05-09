import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarWrapper,
	SidebarMenu,
	LanguageItemSidebar,
	SidebarLink,
	LanguagesContainerSidebar,
	LanguageWrapper,
	SidebarBtn
} from './SidebarElement';
import { useI18n } from '../../../providers/LanguageProvider';
import { StyledIcon } from './../Nav/NavElements';

const Sidebar = ({ isOpen, toggle }) => {
	const { lang, handleLanguage } = useI18n();
	const [isOpenLang, setIsOpenLang] = useState(false);

	const toggleLangDrop = () => {
		if (isOpenLang === true) {
			setIsOpenLang(false);
		} else {
			setIsOpenLang(true);
		}
	};
	const getLanguageName = (code) => {
		switch (code) {
		case 'en':
			return 'ENG';
		case 'pl':
			return 'POL';
		case 'de':
			return 'DEU';
		case 'uk':
			return 'UKR';
		default:
			return '';
		}
	};

	const langName = getLanguageName(lang);

	return (
		<SidebarContainer isOpen={isOpen} onClick={toggle}>
			<Icon>
				<CloseIcon />
			</Icon>

			<SidebarWrapper>
				<SidebarMenu>
					<SidebarLink to="onas" onClick={toggle} smooth duration={500} spy offset={-80}>
						<FormattedMessage id="navigation.about" />
					</SidebarLink>
					<SidebarLink to="oferta" onClick={toggle} smooth duration={500} spy offset={-80}>
						<FormattedMessage id="navigation.offer" />
					</SidebarLink>

					<SidebarLink to="galeria" onClick={toggle} smooth duration={500} spy offset={-80}>
						<FormattedMessage id="navigation.implementation" />
					</SidebarLink>

					<SidebarLink to="kontakt" onClick={toggle} smooth duration={500} spy offset={-80}>
						<FormattedMessage id="navigation.contact" />
					</SidebarLink>
					<LanguageWrapper>
						<SidebarBtn
							className="langBtn"
							onClick={toggleLangDrop}
							smooth
							duration={500}
							spy
							offset={-80}
						>
							{langName}
							<StyledIcon />
						</SidebarBtn>
					</LanguageWrapper>

					<LanguagesContainerSidebar id="lang-dropdown" isOpen={isOpenLang}>
						<LanguageItemSidebar onClick={() => handleLanguage('en')}>
							<FormattedMessage id="navigation.english" />
						</LanguageItemSidebar>
						<LanguageItemSidebar onClick={() => handleLanguage('pl')}>
							<FormattedMessage id="navigation.polish" />
						</LanguageItemSidebar>
						<LanguageItemSidebar onClick={() => handleLanguage('de')}>
							<FormattedMessage id="navigation.german" />
						</LanguageItemSidebar>
						<LanguageItemSidebar onClick={() => handleLanguage('uk')}>
							<FormattedMessage id="navigation.ukrainian" />
						</LanguageItemSidebar>
					</LanguagesContainerSidebar>
				</SidebarMenu>
			</SidebarWrapper>
		</SidebarContainer>
	);
};

export default Sidebar;
