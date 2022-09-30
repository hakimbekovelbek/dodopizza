import classNames from 'classnames'
import { useState, useEffect, useRef } from 'react'
import PhoneInput from 'react-phone-input-2'
// @ts-ignore
import styles from './AuthModal.module.scss'

export interface IAuthModalProps {
	isAuthModalOpen: boolean
	setIsAuthModalOpen: Function
}

export const AuthModal: React.FC<IAuthModalProps> = ({
	isAuthModalOpen,
	setIsAuthModalOpen,
}: IAuthModalProps) => {
	const modalBgRef = useRef<HTMLDivElement>(null)
	const submitBtnRef = useRef<HTMLInputElement>(null)

	const [tel, setTel] = useState<string>('998')

	const modalCloseHandler = (): void => {
		setIsAuthModalOpen(false)
	}

	useEffect(() => {
		window.addEventListener('wheel', (e): void => {
			if (e.ctrlKey) e.preventDefault()
		})

		if (isAuthModalOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = ''
		}
	})

	return (
		<>
			<div
				className={classNames(styles.modal, styles.modalSmall, {
					[styles.modalActive]: isAuthModalOpen,
				})}
			>
				<button
					className={styles.modalClose}
					type='button'
					onClick={modalCloseHandler}
				>
					<img src='modal_close.svg' alt='Close button' />
				</button>
				<h2 className={styles.modalTitle}>Вход на сайт</h2>
				<p className={styles.modalDescription}>
					Подарим подарок на день рождения, сохраним адрес доставки и расскажем об
					акциях
				</p>
				<form action='#' className={styles.modalForm}>
					<div className={styles.modalFormContainer}>
						<div className={styles.telInputContainer}>
							<label>
								<span className={styles.labelText}>Номер телефона</span>
								<PhoneInput
									country='uz'
									disableSearchIcon
									disableDropdown
									placeholder='+998 99-888-77-66'
									masks={{ uz: '..-...-..-..' }}
									onChange={val => {
										setTel(val)
									}}
								/>
							</label>
						</div>
					</div>
					<input
						type='submit'
						value='Выслать код'
						className={styles.submitButton}
						ref={submitBtnRef}
						disabled
					/>
				</form>
			</div>
			<div
				className={styles.modalBg}
				ref={modalBgRef}
				onClick={modalCloseHandler}
			/>
		</>
	)
}
