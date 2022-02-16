import React from 'react';

// components
import Accordion from './components/Accordion';
import ProgressRing from './components/ProgressRing';

// styled components
import { Button } from './components/UI/Button';
import { Copy } from './components/UI/Copy';
import { Flex } from './components/UI/Flex';
import { Gap } from './components/UI/Gap';
import { Grid } from './components/UI/Grid';
import { GridColumn } from './components/UI/GridColumn';
import { Heading } from './components/UI/Heading';
import { ScreenReaderText } from './components/UI/ScreenReaderText';

// flex

// theme
import theme from './styles/theme';

// util
import FilterSingle from './components/FilterSingle';

const App = () => {
	const { colors } = theme;

	return (
		<div className='app'>
			<Gap />

			{/* headings */}
			<Heading as='h1' marginBottom={1.5} size={3.5}>
				I&apos;m an h1!
			</Heading>

			<Heading as='h2' marginBottom={1.5} size={3}>
				I&apos;m an h2!
			</Heading>

			<Heading as='h3' marginBottom={1.5} size={2.5}>
				I&apos;m an h3!
			</Heading>

			<Heading as='h4' marginBottom={1.5} size={2}>
				I&apos;m an h4!
			</Heading>

			<Heading as='h5' marginBottom={1.5} size={1.5}>
				I&apos;m an h5!
			</Heading>

			<Heading as='h6' marginBottom={1.5} size={1}>
				I&apos;m an h6!
			</Heading>

			<Gap />

			{/* button */}
			<Button mode='primary' type='button'>
				Click Me!
			</Button>

			<Button mode='secondary' type='button'>
				Click Me!
			</Button>

			<Gap />

			{/* copy */}
			<Copy color={colors.eastBay}>
				This is some text inside the Copy component! Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Excepturi, eligendi!
			</Copy>

			<Gap />

			{/* grid + grid column */}
			<Grid>
				{/* full width */}
				<GridColumn layout={{ isFullWidth: true }}>
					<div style={{ backgroundColor: colors.creamBrulee }}>
						<h2>I am a full width grid item!</h2>
					</div>
				</GridColumn>

				{/* 1/3 columns */}
				<GridColumn layout={{ columns: { startingColumn: 1, numberOfColumnsToSpan: 4 } }}>
					<div style={{ backgroundColor: colors.scandal }}>
						<h2>I am a 1/3 grid item!</h2>
					</div>
				</GridColumn>

				<GridColumn layout={{ columns: { startingColumn: 5, numberOfColumnsToSpan: 4 } }}>
					<div style={{ backgroundColor: colors.scandal }}>
						<h2>I am a 1/3 grid item!</h2>
					</div>
				</GridColumn>

				<GridColumn layout={{ columns: { startingColumn: 9, numberOfColumnsToSpan: 4 } }}>
					<div style={{ backgroundColor: colors.scandal }}>
						<h2>I am a 1/3 grid item!</h2>
					</div>
				</GridColumn>

				{/* 1/2 columns */}
				<GridColumn layout={{ columns: { startingColumn: 1, numberOfColumnsToSpan: 6 } }}>
					<div style={{ backgroundColor: colors.scandal }}>
						<h2>I am a 1/2 grid item!</h2>
					</div>
				</GridColumn>

				<GridColumn layout={{ columns: { startingColumn: 7, numberOfColumnsToSpan: 6 } }}>
					<div style={{ backgroundColor: colors.scandal }}>
						<h2>I am a 1/2 grid item!</h2>
					</div>
				</GridColumn>

				{/* 1/4 columns */}
				<GridColumn layout={{ columns: { startingColumn: 1, numberOfColumnsToSpan: 3 } }}>
					<div style={{ backgroundColor: colors.scandal }}>
						<h2>I am a 1/4 grid item!</h2>
					</div>
				</GridColumn>

				<GridColumn layout={{ columns: { startingColumn: 4, numberOfColumnsToSpan: 3 } }}>
					<div style={{ backgroundColor: colors.scandal }}>
						<h2>I am a 1/4 grid item!</h2>
					</div>
				</GridColumn>

				<GridColumn layout={{ columns: { startingColumn: 7, numberOfColumnsToSpan: 3 } }}>
					<div style={{ backgroundColor: colors.scandal }}>
						<h2>I am a 1/4 grid item!</h2>
					</div>
				</GridColumn>

				<GridColumn layout={{ columns: { startingColumn: 10, numberOfColumnsToSpan: 3 } }}>
					<div style={{ backgroundColor: colors.scandal }}>
						<h2>I am a 1/4 grid item!</h2>
					</div>
				</GridColumn>
			</Grid>

			<Gap />

			{/* flex */}
			<Flex justifyContent='space-evenly'>
				<div style={{ backgroundColor: colors.scandal }}>
					<h2>I am a flexed item!</h2>
				</div>

				<div style={{ backgroundColor: colors.scandal, height: '2rem' }}>
					<h2>I am a flexed item!</h2>
				</div>

				<div style={{ backgroundColor: colors.scandal }}>
					<h2>I am a flexed item!</h2>
				</div>
			</Flex>

			<Gap />

			{/* progress ring */}
			<ProgressRing radius={68} slideDuration={3000} stroke={6} />

			<Gap />

			{/* accordion */}
			<Accordion />

			<Gap />

			{/* single filtering */}
			<FilterSingle />

			<Gap />

			{/* screen reader text */}
			<p>
				There&apos;s some accessible text here! --&gt; <ScreenReaderText>Told ya!</ScreenReaderText>
			</p>
		</div>
	);
};

export default App;
