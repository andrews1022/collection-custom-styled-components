// components
import Heading from './components/Heading';
import Button from './components/Button';
import Copy from './components/Copy';
import ProgressRing from './components/ProgressRing';
import Accordion from './components/Accordion';

// grid
import Grid from './components/Grid';
import GridColumn from './components/GridColumn';

// flex
import Flex from './components/Flex';

// theme
import theme from './styles/theme';

// util
import Gap from './utils/Gap';
import FilterSingle from './components/FilterSingle';

const App = () => {
	const { colors } = theme;

	return (
		<div className='app'>
			<Gap />

			{/* headings */}
			<Heading color={colors.scandal} element='h1' fontSizeInPx={64}>
				Hello World!
			</Heading>
			<Heading color={colors.eastBay} element='h2' fontSizeInPx={32}>
				Hello Again!
			</Heading>

			<Gap />

			{/* button */}
			<Button mode='primary'>Click Me!</Button>
			<Button mode='secondary'>Click Me!</Button>

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
		</div>
	);
};

export default App;
