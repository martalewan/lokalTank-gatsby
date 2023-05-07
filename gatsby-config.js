const config = require('./data/config');

module.exports = {
	siteMetadata: {
		site_url: config.url
	},
	plugins: [
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-styled-components',
		'gatsby-plugin-netlify',
		'gatsby-plugin-catch-links',
		{
			resolve: 'gatsby-plugin-google-fonts',
			options: {
				fonts: ['Cairo', 'Roboto']
			}
		},
		{
			resolve: 'gatsby-plugin-canonical-urls',
			options: {
				siteUrl: config.url
			}
		},
		{
			resolve: 'gatsby-plugin-nprogress',
			options: {
				color: config.themeColor,
				showSpinner: false
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Lokal Tank',
				short_name: 'Lokal Tank',
				start_url: '/',
				background_color: config.backgroundColor,
				theme_color: config.themeColor,
				display: 'minimal-ui',
				icons: [
					{
						src: '/favicon-lt/android-chrome-512x512.png',
						sizes: '192x192',
						type: 'image/png'
					},
					{
						src: '/favicon-lt/android-chrome-512x512.png',
						sizes: '512x512',
						type: 'image/png'
					}
				]
			}
		}
		// 'gatsby-plugin-offline'
	]
};
