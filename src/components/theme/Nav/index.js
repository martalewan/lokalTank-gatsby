/* eslint-disable no-undef */
import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa'
import { FormattedMessage } from 'react-intl'
import { Navbar, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, Img, NavLinkLang, LanguagesContainer, LanguageWrapper, LngLink } from './NavElements'
import LokalTWhite from '../../../images/LTlogo-main.svg';

const Nav = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);
	const [isOpen, setIsOpen] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	}

	// Close the dropdown menu if the user clicks outside of it
	// eslint-disable-next-line func-names
	window.onclick = function (event) {
		if (!(event.target).matches('.langBtn') && !(event.target).matches('.lang-dropdown')) {
			setIsOpen(false)
		}
	}

	const toggleLangDrop = () => {
		if (isOpen === true) {
			setIsOpen(false)
		} else {
			setIsOpen(true)
		}
	}

	useEffect(() => {
		window.addEventListener('scroll', changeNav)
	})

	return (
		<Navbar scrollNav={scrollNav}>
			<NavbarContainer>
				<NavLogo
					to="home"
					smooth
					duration={500}
					spy
					offset={-80}
				>
					<Img src={LokalTWhite} alt="Lokal Tank logo" />
				</NavLogo>
				<MobileIcon onClick={toggle}>
					<FaBars />
				</MobileIcon>

				<NavMenu>
					<NavItem>
						<NavLinks
							to="onas"
							smooth
							duration={500}
							spy
							offset={-80}
						>
							<FormattedMessage id="navigation.about" />
						</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinks
							to="oferta"
							smooth
							duration={500}
							spy
							offset={-80}
						>
							<FormattedMessage id="navigation.offer" />

						</NavLinks>
					</NavItem>

					<NavItem>
						<NavLinks
							to="oferta"
							smooth
							duration={500}
							spy
							offset={-80}
						>
							<FormattedMessage id="navigation.implementation" />
						</NavLinks>
					</NavItem>


					<NavItem>
						<NavLinks
							to="kontakt"
							smooth
							duration={500}
							spy
							offset={-80}
						>
							<FormattedMessage id="navigation.contact" />
						</NavLinks>
					</NavItem>
					<NavItem>
						<NavLinkLang
							className="langBtn"
							onClick={toggleLangDrop}
							smooth
							duration={500}
							spy
							offset={-80}
						>En/Pl</NavLinkLang>
					</NavItem>
				</NavMenu>

				<LanguagesContainer id="lang-dropdown" isOpen={isOpen}>
					{/* <LanguageWrapper>
						// eslint-disable-next-line max-len
						<LngLink to={getLocalizedRoute(originalPath, 'en')} language="en" className="langBtn">{t('navigation.english')}</LngLink>
					</LanguageWrapper>
					<LanguageWrapper>
						<LngLink to={getLocalizedRoute(originalPath, 'pl')} language="pl" className="langBtn">{t('navigation.polish')}</LngLink>
					</LanguageWrapper> */}
				</LanguagesContainer>
			</NavbarContainer>
		</Navbar>
	)
}

export default Nav
