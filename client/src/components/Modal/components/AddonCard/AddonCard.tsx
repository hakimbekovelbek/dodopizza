import classNames from 'classnames'
import styles from './AddonCard.module.scss'

export interface IAddonCardProps {
	id: any
	title: string
	img: string
	price:
		| number
		| {
				small?: number
				medium?: number
				large?: number
		  }
}

export const AddonCard: React.FC<IAddonCardProps> = ({
	img,
	title,
	price,
	id,
}: IAddonCardProps) => {
	return (
		<div
			className={classNames(styles.addonsCard, styles.addonCard)}
			key={id * Math.random()}
		>
			<img src={img} alt={title} className={styles.addonCardImage} />
			<h6 className={styles.addonCardTitle}>{title}</h6>
			<p className={styles.addonCardPrice}>{`${price.medium} сум`}</p>
		</div>
	)
}
