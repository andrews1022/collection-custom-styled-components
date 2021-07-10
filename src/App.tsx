import Heading from './components/Heading';
import Buttons from './components/Buttons';
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

			{/* Buttons.tsx */}
			<Buttons mode='solid' isPrimary={true} />
			<Buttons mode='hollow' isPrimary={false} />
		</div>
	);
};

export default App;
