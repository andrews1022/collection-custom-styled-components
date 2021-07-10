import Heading from './components/Heading';

const App = () => {
	return (
		<div className='app'>
			<Heading color='lightcoral' size={32} weight={100} element='h2'>
				Hello World!
			</Heading>
			<Heading color='rebeccapurple' size={64} weight={700} element='h4'>
				Hello Again!
			</Heading>
		</div>
	);
};

export default App;
