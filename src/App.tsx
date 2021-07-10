import Heading from './components/Heading';

const App = () => {
	return (
		<div className='app'>
			<Heading color='#f08080' size={32} weight={100} element='h2'>
				Hello World!
			</Heading>
			<Heading color='#663399' size={64} weight={700} element='h4'>
				Hello Again!
			</Heading>
		</div>
	);
};

export default App;
