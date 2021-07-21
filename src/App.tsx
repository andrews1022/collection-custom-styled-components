// components
import Heading from './components/Heading';
import Button from './components/Button';
import Copy from './components/Copy';
import ProgressRing from './components/ProgressRing';

// grid
import Grid from './components/Grid';
import GridColumn from './components/GridColumn';

// flex
import Flex from './components/Flex';

// theme
import theme from './styles/theme';

// util
import Gap from './util/Gap';

const App = () => {
	const { colors } = theme;

	return (
		<div className='app'>
			<Gap />

			{/* Heading.tsx */}
			<Heading color={colors.scandal} fontSizeInPx={64} element='h1'>
				Hello World!
			</Heading>
			<Heading color={colors.eastBay} fontSizeInPx={32} element='h2'>
				Hello Again!
			</Heading>

			<Gap />

			{/* Button.tsx */}
			<Button mode='primary'>Click Me!</Button>
			<Button mode='secondary'>Click Me!</Button>

			<Gap />

			{/* Copy.tsx */}
			<Copy color={colors.eastBay}>Lorem ipsum dolor sit amet.</Copy>

			<Gap />

			{/* Grid.tsx + GridColumn.tsx */}
			<Grid>
				{/* full width */}
				<GridColumn layout={{ isFullWidth: true }}>
					<div style={{ backgroundColor: colors.creamBrulee }}>
						<h2>Hello!</h2>
					</div>
				</GridColumn>

				{/* 1/3 columns */}
				<GridColumn layout={{ columns: { startingColumn: 1, numberOfColumnsToSpan: 4 } }}>
					<div style={{ backgroundColor: colors.scandal }}>
						<h2>Hello!</h2>
					</div>
				</GridColumn>

				<GridColumn layout={{ columns: { startingColumn: 5, numberOfColumnsToSpan: 4 } }}>
					<div style={{ backgroundColor: colors.scandal }}>
						<h2>Hello!</h2>
					</div>
				</GridColumn>

				<GridColumn layout={{ columns: { startingColumn: 9, numberOfColumnsToSpan: 4 } }}>
					<div style={{ backgroundColor: colors.scandal }}>
						<h2>Hello!</h2>
					</div>
				</GridColumn>

				{/* 1/2 columns */}
				<GridColumn layout={{ columns: { startingColumn: 1, numberOfColumnsToSpan: 6 } }}>
					<div style={{ backgroundColor: colors.scandal }}>
						<h2>Hello!</h2>
					</div>
				</GridColumn>

				<GridColumn layout={{ columns: { startingColumn: 7, numberOfColumnsToSpan: 6 } }}>
					<div style={{ backgroundColor: colors.scandal }}>
						<h2>Hello!</h2>
					</div>
				</GridColumn>
			</Grid>

			<Gap />

			{/* Flex.tsx */}
			<Flex justifyContent='space-evenly'>
				<div style={{ backgroundColor: colors.scandal }}>
					<h2>Hello!</h2>
				</div>

				<div style={{ backgroundColor: colors.scandal, height: '2rem' }}>
					<h2>Hello!</h2>
				</div>

				<div style={{ backgroundColor: colors.scandal }}>
					<h2>Hello!</h2>
				</div>
			</Flex>

			<Gap />

			{/* ProgressRing.tsx */}
			<ProgressRing radius={68} stroke={6} />
		</div>
	);
};

export default App;
