import classNames from 'classnames'
import { useState, useEffect, useRef } from 'react'
import PhoneInput from 'react-phone-input-2'
import { CODE_PREFIXES } from '../../constants'
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
	const [isTelValid, setIsTelValid] = useState<boolean>(false)
	const [authModalState, setAuthModalState] = useState<string>('initial')

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

		if (submitBtnRef.current) {
			if (isTelValid) {
				submitBtnRef.current.disabled = false
			} else {
				submitBtnRef.current.disabled = true
			}
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
				{authModalState === 'initial' ? (
					<>
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
											placeholder='+998 99-999-99-99'
											masks={{ uz: '..-...-..-..' }}
											onChange={val => {
												setTel(val)
											}}
											isValid={(telephone): boolean => {
												setIsTelValid(
													telephone.startsWith('998') &&
														CODE_PREFIXES.includes(telephone.slice(3, 5)) &&
														telephone.length === 12
												)
												return isTelValid
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
								onClick={() => {
									setAuthModalState('confirmation')
								}}
							/>
						</form>
					</>
				) : (
					'Hello'
				)}
			</div>
			<div
				className={styles.modalBg}
				ref={modalBgRef}
				onClick={modalCloseHandler}
			/>
		</>
	)
}
