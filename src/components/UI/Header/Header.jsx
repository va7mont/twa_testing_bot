import { useTelegram } from "../../../hooks/useTelegram";

export default function Header() {

	const { user, onClose } = useTelegram()

	return (
		<div className={'header'}>
			<button onClick={onClose}>
				Закрыть
			</button>
			<span className={'username'}>
				{user?.username}
			</span>
		</div>
	)
}