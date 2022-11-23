import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'

import { useTelegram } from './hooks/useTelegram'
import Header from './components/UI/Header/Header'
import Products from './components/Products/Products'
import Form from './components/Form/Form'

export default function App() {

	const { tg } = useTelegram()

	useEffect(() => {
		tg.ready()
	}, [tg])

	return (
		<div className="App">
			<Header />
			<Routes>
				<Route index element={<Products />} />
				<Route path='/form' element={<Form />} />
			</Routes>

		</div>
	)
}
