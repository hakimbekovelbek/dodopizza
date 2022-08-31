import { Product } from 'constants/dataBase/products/product'
// @ts-ignore
import styles from './ProductCard.module.css'

export interface IProductCardProps {
	product: Product
}

export const ProductCard: React.FC<IProductCardProps> = ({
	product,
}: IProductCardProps) => {
	return (
		<div className={styles.card}>
			<div className={styles.card_header}>
				<img
					src={product.img}
					alt='Маргарита'
					className={styles.card_img}
					width='221'
				/>
			</div>
			<div className={styles.card_body}>
				<h3 className={styles.card_title}>{product.title}</h3>
				<p className={styles.card_text}>
					Соус сырный, сыр моцарелла, цыпленок, томаты
				</p>
			</div>
			<div className={styles.card_footer}>
				<p className={styles.card_price}>от {`${product.price / 1000} 000`} сум</p>
				<div className={styles.card_button_wrapper}>
					<button className={styles.card_button} type='button'>
						Выбрать
					</button>
				</div>
			</div>
		</div>
	)
}
