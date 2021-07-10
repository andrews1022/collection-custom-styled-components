// styled components
import Heading from './components/Heading/Heading';
import Button from './components/Button/Button';
import Copy from './components/Copy/Copy';

// util
import Gap from './util/Gap';

const App = () => {
	return (
		<div className='app'>
			{/* Heading.tsx */}
			<Heading color='#f08080' size={32} weight={100} element='h2'>
				Hello World!
			</Heading>
			<Heading color='#663399' size={64} weight={700} element='h4'>
				Hello Again!
			</Heading>

			<Gap />

			{/* Button.tsx */}
			<Button mode='solid' isPrimary={true}>
				Click Me!
			</Button>
			<Button mode='hollow' isPrimary={false}>
				Click Me!
			</Button>

			<Gap />

			{/* Copy.tsx */}
			<Copy>Lorem ipsum dolor sit amet.</Copy>
		</div>
	);
};

export default App;
