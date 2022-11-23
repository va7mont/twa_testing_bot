import { useTelegram } from '../../../hooks/useTelegram'
import './Header.css'

export default function Header() {

	const { user, onClose } = useTelegram()

	return (
		<div className={'header'}>
			<button onClick={onClose}>
				Close
			</button>
			<span className={'username'}>
				{user?.username}
			</span>
		</div>
	)
}