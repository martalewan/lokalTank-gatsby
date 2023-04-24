import React from 'react'
import styled from 'styled-components'
import { FormattedMessage } from 'react-intl'
import Layout from '../components/common/Layout'
import Container from '../components/common/Container'
import SEO from '../components/common/SEO'
// import Header from '../components/theme/Header'
import Footer from '../components/theme/Footer'
import Nav from '../components/theme/Nav'
import AboutSection from '../components/sections/AboutSection'
import MainSection from '../components/sections/MainSection'
import OfferSection from '../components/sections/OfferSection'

const IndexPage = () => (
	<Layout>
		<React.Fragment>
			<SEO title="welcome" />
			{/* <Header /> */}
			<Nav />

			<MainSection />
			<AboutSection />
			<OfferSection />

			<Welcome as={Container}>
				<h2>
					<FormattedMessage id="welcome" />
				</h2>
			</Welcome>
			<Footer />

		</React.Fragment>
	</Layout>
)

const Welcome = styled.div`
	padding: 2rem 0;
`

export default IndexPage
