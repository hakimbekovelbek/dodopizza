export const ProductCard: React.FC<{ pizza: any }> = ({ pizza }: any) => {
	return (
		<div className='card'>
			<div className='card_header'>
				<img
					src={pizza.sizes.medium && pizza.sizes.medium.imgs.normal}
					alt='Маргарита'
					className='card_img'
					width='221'
				/>
			</div>
			<div className='card_body'>
				<h3 className='card_title'>{pizza.title}</h3>
				<p className='card_text'>Соус сырный, сыр моцарелла, цыпленок, томаты</p>
			</div>
			<div className='card_footer'>
				<p className='card_price'>
					от {pizza.sizes.medium && pizza.sizes.medium.price} сумов
				</p>
				<div className='card_button_wrapper'>
					<button className='card_button' type='button'>
						Выбрать
					</button>
				</div>
			</div>
		</div>
	)
}
