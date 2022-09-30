// @ts-ignore
import styles from './ProductsWrapper.module.scss'

export const ProductsWrapper: React.FC<any> = (props: any) => {
	return (
		<section className={styles.productsSection}>
			<h2>Section title</h2>
			<div className={styles.productsContainer}>{props.children}</div>
		</section>
	)
}
