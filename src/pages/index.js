import React, { useState } from 'react'
import Layout from '../components/common/Layout'
import SEO from '../components/common/SEO'
import Footer from '../components/theme/Footer'
import Nav from '../components/theme/Nav'
import Sidebar from '../components/theme/Sidebar'
import AboutSection from '../components/sections/AboutSection'
import MainSection from '../components/sections/MainSection'
import OfferSection from '../components/sections/OfferSection'
import CardsSection from '../components/sections/CardsSection'
import GalerySection from '../components/sections/GalerySection'
import ContactSection from '../components/sections/ContactSection'

const IndexPage = () => {
	const [isOpen, setIsOpen] = useState(false)

	const toggle = (event) => {
		if (event.target.tagName !== 'BUTTON') {
			setIsOpen(!isOpen)
		}
	}

	return (
		<Layout>
			<React.Fragment>
				<SEO title="welcome" />
				{/* <Header /> */}
				<Nav toggle={toggle} />
				<Sidebar isOpen={isOpen} toggle={toggle} />

				<MainSection />
				<AboutSection />
				<CardsSection />
				<OfferSection />
				<GalerySection />

				<ContactSection />

				<Footer />
			</React.Fragment>
		</Layout>
	)
}

export default IndexPage
