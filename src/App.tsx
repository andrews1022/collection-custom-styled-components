import Heading from './components/Heading';
import Button from './components/Button';
import Gap from './Gap';

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
			<Button mode='solid' isPrimary={true} />
			<Button mode='hollow' isPrimary={false} />
		</div>
	);
};

export default App;
