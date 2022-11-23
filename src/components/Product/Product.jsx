import Button from '../UI/Button/Button'
import './Product.css'

export default function Product(props) {

	const onAddHandler = () => {
		props.onAdd(props.product)
	}

	return (
		<div className={`product ${props.className}`}>
			<div className={'img'} />
			<div className={'title'}>
				{props.product.title}
			</div>
			<div className={'description'}>
				{props.product.description}
			</div>
			<div className={'price'}>
				<span>
					Стоимость: <b>{props.product.price}</b>
				</span>
			</div>
			<Button className={'add-btn'} onClick={onAddHandler}>
				Добавить в корзину
			</Button>
		</div>
	)
}