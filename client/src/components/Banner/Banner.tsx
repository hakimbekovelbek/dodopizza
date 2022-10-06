// import axios from 'axios'

// export interface IBannerProps {
// 	setIsAuthModalOpen: Function
// }

// export const Banner: React.FC<IBannerProps> = ({
// 	setIsAuthModalOpen,
// }: IBannerProps) => {
// 	const modalOpenHandler = (): void => {
// 		axios.post('http://localhost:8085/', {
// 			msg: 'Hello from React',
// 		})
// 		setIsAuthModalOpen(true)
// 	}
// 	return (
// 		<>
// 			<button type='button' onClick={modalOpenHandler}>
// 				Войти
// 			</button>
// 		</>
// 	)
// }



// import { AuthModal } from 'components/AuthModal'

// @ts-ignorenpm s
import styles from './Banner.module.css'

export interface IBannerProps {
	setIsAuthModalOpen: Function
}


export const Banner: React.FC<IBannerProps> = ({
	setIsAuthModalOpen,
}: IBannerProps) => {
	return (
		<div className={styles.headerNavInfo}>
			<div className={styles.left}>
				<div className={styles.headerNavInfoLogo}>
					<h1 className={styles.headerHeading}>Dodo Pizza</h1>
					<img src='logo.svg' alt="Dodo Pizza Logo" className={styles.logo} />
				</div>
				<div className={styles.headerNavInfoRating}>
					<p className={styles.top}>
						Доставка пиццы <span className={styles.textOrange}>Ташкент</span>
					</p>
					<p className={styles.bottom}>
						<span className={styles.deliveryTime}>44 мин</span>
						<span>·</span>
						<span className={styles.rating}
						>4.54 <img src='star.svg' alt="star icon"
							/></span>
					</p>
				</div>
				<div className={styles.headerNavInfoContacts}>
					<div className={styles.top}>
						<a href="tel:+998712077729" className={styles.telNumber}>+998712077729</a>
					</div>
					<div className={styles.bottomTextGray}>Звонок бесплатный</div>
				</div>
			</div>
			<div className={styles.right}>
				<a href='.' className={styles.dodoCoins}>
					<span className={styles.icon}>
						<img src='icon.svg' alt="." />
					</span>
					<span className={styles.label}>Додокоины</span>
				</a>
				<div className={styles.headerNavInfoButton}>
					<button className={styles.loginBtn} type='button' onClick={() => {
						setIsAuthModalOpen(true)
					}}>Войти</button>
				</div>
			</div>
		</div>
	)
}
