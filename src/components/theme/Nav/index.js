/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';
import { useI18n } from '../../../providers/LanguageProvider';
import {
	Navbar,
	NavbarContainer,
	NavLogo,
	MobileIcon,
	NavMenu,
	NavItem,
	NavLinks,
	Img,
	NavLinkBtn,
	LanguagesContainer,
	LanguageItem,
	StyledIcon,
} from './NavElements';
import logoWhite from '../../../images/logoLT.svg';

const Nav = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const { lang, handleLanguage } = useI18n();

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

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	// Close the dropdown menu if the user clicks outside of it
	// eslint-disable-next-line func-names
	window.onclick = function (event) {
		if (
			!event.target.matches('.langBtn')
			&& !event.target.matches('.lang-dropdown')
		) {
			setIsOpen(false);
		}
	};

	const toggleLangDrop = () => {
		if (isOpen === true) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	});

	return (
		<Navbar scrollNav={scrollNav}>
			<NavbarContainer>
				<NavLogo to="home" smooth duration={500} spy offset={-80}>
					<Img src={logoWhite} alt="Lokal Tank logo" />
				</NavLogo>
				<MobileIcon onClick={toggle}>
					<FaBars />
				</MobileIcon>

				<NavMenu>
					<NavItem>
						<NavLinks to="onas" smooth duration={500} spy offset={-80}>
							<FormattedMessage id="navigation.about" />
						</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks to="oferta" smooth duration={500} spy offset={-80}>
							<FormattedMessage id="navigation.offer" />
						</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks to="galeria" smooth duration={500} spy offset={-80}>
							<FormattedMessage id="navigation.implementation" />
						</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks to="kontakt" smooth duration={500} spy offset={-80}>
							<FormattedMessage id="navigation.contact" />
						</NavLinks>
					</NavItem>
					<div>
						<NavLinkBtn
							className="langBtn"
							onClick={toggleLangDrop}
							smooth
							duration={500}
							spy
							offset={-80}
						>
							{langName}
							<StyledIcon />
						</NavLinkBtn>
					</div>
				</NavMenu>

				<LanguagesContainer id="lang-dropdown" isOpen={isOpen}>
					<LanguageItem onClick={() => handleLanguage('en')}>
						<FormattedMessage id="navigation.english" />
					</LanguageItem>
					<LanguageItem onClick={() => handleLanguage('pl')}>
						<FormattedMessage id="navigation.polish" />
					</LanguageItem>
					<LanguageItem onClick={() => handleLanguage('de')}>
						<FormattedMessage id="navigation.german" />
					</LanguageItem>
					<LanguageItem onClick={() => handleLanguage('uk')}>
						<FormattedMessage id="navigation.ukrainian" />
					</LanguageItem>
				</LanguagesContainer>
			</NavbarContainer>
		</Navbar>
	);
};

export default Nav;
