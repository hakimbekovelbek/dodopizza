// @ts-ignore
import styles from './ProductsWrapper.module.scss'

export const ProductsWrapper: React.FC<any> = (props: any) => {
	// console.log(props.children)
	return (
		<section className={styles.productsSection} id={props.type}>
			<h2>{props.title}</h2>
			<div className={styles.productsContainer}>{props.children}</div>
		</section>
	)
}
