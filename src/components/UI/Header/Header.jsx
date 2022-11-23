import { useTelegram } from '../../../hooks/useTelegram'
import './Header.css'

import Button from '../Button/Button'

export default function Header() {

	const { user, onClose } = useTelegram()

	return (
		<div className={'header'}>
			<Button onClick={onClose}>
				Close
			</Button>
			<span className={'username'}>
				{user?.username}
			</span>
		</div>
	)
}