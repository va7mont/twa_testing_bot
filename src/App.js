import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Header from './components/UI/Header/Header';

function App() {

	const { tg, onToggleButton } = useTelegram()

	useEffect(() => {
		tg.ready();
	}, [tg])

	return (
		<div className="App">
			<Header />

			<button onClick={onToggleButton}>
				Toggle
			</button>
		</div>
	);
}

export default App;
