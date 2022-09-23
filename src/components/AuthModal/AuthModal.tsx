import classNames from 'classnames'
import { useEffect } from 'react'
// @ts-ignore
import styles from './AuthModal.module.css'




interface IAuthModalProps {
	isAuthModalOpen: boolean
	setIsAuthModalOpen: Function
}
export const AuthModal: React.FC<IAuthModalProps> = ({
    isAuthModalOpen,
    setIsAuthModalOpen,
}: IAuthModalProps) => {
    useEffect(() => {
		window.addEventListener('keydown', e => {
			if (e.key === 'Escape') {
				setIsAuthModalOpen(false)
			}
		})

		if (isAuthModalOpen) {
			document.body.style.overflow = 'hidden'
			document.body.style.marginRight = '15px'
		} else {
			document.body.style.overflow = ''
			document.body.style.marginRight = ''
		}
	})
    return(
        <>
            <div
                className={classNames(styles.modal, styles.modalMedium, {
                    [styles.modalActive]: isAuthModalOpen,
                })}
            >
                <button type='button' 
                    className={styles.modalClose}
                    onClick={() => {
                        setIsAuthModalOpen(false)
                    }}
                >
                    <img src='modal_close.svg' alt='Close button' />
                </button>
                <div className={styles.authModal}>
                    <div className={styles.top}>
                        <h1 className={styles.title}>Вход на сайт</h1>
                        <p className={styles.description}>Подарим подарок на день рождения, сохраним адрес доставки и расскажем об акциях</p>
                    </div>
                    <div className={styles.middle}>
                        <span className={styles.label}>Номер телефона</span>
                        <input type="tel" className={styles.input} pattern='[0-9]{3}-[0-9]{2}-[0-9]{3}-[0-9]{2}-[0-9]{2}' required/>
                    </div>
                    <div className={styles.bottom}>
                    <button type="button" className={styles.button}>Выслать код</button>
                    </div>
                </div>
            </div>
            <div className={styles.modalBg}  onClick={() => {
					setIsAuthModalOpen(false)
				}}/>
        </>
    )
}