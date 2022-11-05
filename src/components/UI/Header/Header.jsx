const tg = window.Telegram.WebApp

export default function Header() {

	const onClose = () => {
		tg.close();
	}

	return (
		<div className={'header'}>
			<button onClick={onClose}>
				Закрыть
			</button>
			<span className={'username'}>
				{tg.initDataUnsafe?.user?.username}
			</span>
		</div>
	)
}