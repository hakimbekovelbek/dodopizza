import classNames from 'classnames'
import { useState, useEffect, useRef, ChangeEvent } from 'react'
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
		setAuthModalState('initial')
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

		setIsTelValid(
			tel.startsWith('998') &&
				CODE_PREFIXES.includes(tel.slice(3, 5)) &&
				tel.length === 12
		)
	})

	useEffect(() => {
		const telInput = document.querySelector(
			'.react-tel-input input[type="tel"]'
		) as HTMLInputElement

		if (telInput) {
			telInput.tabIndex = isAuthModalOpen ? 1 : -1
			telInput.focus()
		}
	}, [authModalState, isAuthModalOpen])

	useEffect(() => {
		if (authModalState === 'confirmation') {
			const firstOTPInput = document.querySelector(
				'#OTPCodeInputsContainer input[type="tel"]'
			) as HTMLInputElement

			if (firstOTPInput) {
				firstOTPInput.focus()
			}
		}
	}, [authModalState])

	const formatTelNumber = (telephone: string): string => {
		const phone = telephone.split('')
		phone.splice(2 + 1, 0, ' ')
		phone.splice(5 + 1, 0, ' ')
		phone.splice(9 + 1, 0, ' ')
		phone.splice(12 + 1, 0, ' ')
		return `+${phone.join('')}`
	}

	const OTPCodeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (/\D/.test(e.target.value)) {
			e.target.value = ''
			return
		}

		if (e.target.value === '') return

		const nextInput = e.target.nextElementSibling as HTMLInputElement
		if (nextInput) {
			nextInput.focus()
		}
	}

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
					tabIndex={-1}
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
											value={tel}
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
								onClick={() => {
									setAuthModalState('confirmation')
								}}
							/>
						</form>
					</>
				) : (
					<>
						<div className={styles.modalText}>
							Код отправили сообщением на
							<div>
								<span className={styles.phoneNumber}>{formatTelNumber(tel)}</span>
								<span
									onClick={() => {
										setAuthModalState('initial')
									}}
									className={styles.textButton}
								>
									Изменить
								</span>
							</div>
						</div>
						<div
							className={styles.OTPCodeInputsContainer}
							id='OTPCodeInputsContainer'
						>
							{[1, 2, 3, 4].map(() => (
								<input
									type='tel'
									maxLength={1}
									minLength={1}
									key={Math.random()}
									className={styles.OTPCodeInput}
									onChange={OTPCodeInputHandler}
								/>
							))}
						</div>
						<input
							type='submit'
							value='Получить новый код'
							className={styles.submitButton}
							ref={submitBtnRef}
							onClick={() => {
								setAuthModalState('confirmation')
							}}
						/>
					</>
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
