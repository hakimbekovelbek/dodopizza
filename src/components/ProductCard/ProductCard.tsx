import { Product } from 'constants/dataBase/products/product'

export interface IProductCardProps {
	product: Product
}

export const ProductCard: React.FC<IProductCardProps> = ({
	product,
}: IProductCardProps) => {
	return (
		<div className='card'>
			<div className='card_header'>
				<img src={product.img} alt='Маргарита' className='card_img' width='221' />
			</div>
			<div className='card_body'>
				<h3 className='card_title'>{product.title}</h3>
				<p className='card_text'>Соус сырный, сыр моцарелла, цыпленок, томаты</p>
			</div>
			<div className='card_footer'>
				<p className='card_price'>от {product.price} сумов</p>
				<div className='card_button_wrapper'>
					<button className='card_button' type='button'>
						Выбрать
					</button>
				</div>
			</div>
		</div>
	)
}
