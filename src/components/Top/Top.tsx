// import { AuthModal } from 'components/AuthModal'

// @ts-ignorenpm s
import styles from './Top.module.css'
import Logo from './logo.svg'
import Star from './star.svg'
import Icon from './icon.svg'

export interface IAuthModalProps {
	setIsAuthModalOpen: Function
}


export const Top: React.FC<IAuthModalProps> = ({
    setIsAuthModalOpen,
}: IAuthModalProps)=>{
    return(
        <div className={styles.headerNavInfo}>
            <div className={styles.left}>
                <div className={styles.headerNavInfoLogo}>
                    <h1 className={styles.headerHeading}>Dodo Pizza</h1>
                    <img src={Logo} alt="Dodo Pizza Logo" className={styles.logo}/>
                </div>
                <div className={styles.headerNavInfoRating}>
                    <p className={styles.top}>
                        Доставка пиццы <span className={styles.textOrange}>Ташкент</span>
                    </p>
                    <p className={styles.bottom}>
                        <span className={styles.deliveryTime}>44 мин</span>
                        <span>·</span>
                        <span className={styles.rating}
                        >4.54 <img src={Star} alt="star icon"
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
                <a  href='.' className={styles.dodoCoins}>
                    <span className={styles.icon}>
                        <img src={Icon} alt="."/>
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
    )}