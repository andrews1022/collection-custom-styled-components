// organization of theme inspired by this article (official docs lacking):
// https://dev.to/aromanarguello/how-to-use-themes-in-styled-components-49h

// colors were named using this tool:
// https://www.color-blindness.com/color-name-hue/
// naming colors this way is more meaningful/descriptive than just 'lightBlue', etc.

const theme = {
	mediaQueries: {
		desktopHD: 'only screen and (max-width: 1920px)',
		desktopMedium: 'only screen and (max-width: 1680px)',
		desktopSmall: 'only screen and (max-width: 1440px)',
		laptop: 'only screen and (max-width: 1366px)',
		laptopSmall: 'only screen and (max-width: 1280px)',
		tabletLandscape: 'only screen and (max-width: 1024px)',
		tabletMedium: 'only screen and (max-width: 900px)',
		tabletPortrait: 'only screen and (max-width: 768px)',
		mobileXLarge: 'only screen and (max-width: 640px)',
		mobileLarge: 'only screen and (max-width: 576px)',
		mobileMedium: 'only screen and (max-width: 480px)',
		mobileSmall: 'only screen and (max-width: 415px)',
		mobileXSmall: 'only screen and (max-width: 375px)',
		mobileTiny: 'only screen and (max-width: 325px)'
	},
	shades: {
		white: '#fff',
		black: '#000'
	},
	greys: {
		whiteSmoke: '#eee',
		gainsboro: '#ddd',
		veryLightGrey: '#ccc',
		silver: '#bbb',
		darkGrey: '#aaa',
		nobel: '#999',
		suvaGrey: '#888',
		grey: '#777',
		dimGrey: '#666',
		mortar: '#555',
		charcoal: '#444',
		nightRider: '#333',
		nero: '#222',
		black: '#111'
	},
	colors: {
		creamBrulee: '#ffe194',
		whiteIce: '#e8f6ef',
		scandal: '#b8dfd8',
		eastBay: '#4c4c6d'
	},
	fonts: {
		montserrat: "'Montserrat', sans-serif"
	},
	fontWeights: {
		thin: 100,
		extraLight: 200,
		light: 300,
		regular: 400,
		medium: 500,
		semiBold: 600,
		bold: 700,
		extraBold: 800,
		black: 900
	}
};

export default theme;
