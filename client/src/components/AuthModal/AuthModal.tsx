/* eslint-disable no-unused-expressions */
/* eslint-disable no-nested-ternary */
import classNames from 'classnames'
import {
	useState,
	useEffect,
	useRef,
	ChangeEvent,
	KeyboardEvent,
	MouseEvent,
} from 'react'
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

	const OTPCodeInputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (/\D/.test(e.target.value)) {
			e.currentTarget.value = ''
			return
		}

		if (e.target.value === '') return

		const nextInput = e.target.nextElementSibling as HTMLInputElement
		nextInput && nextInput.focus()
	}

	const switchInput = (
		e: KeyboardEvent<HTMLInputElement>,
		pos: string
	): void => {
		const input =
			pos === 'prev'
				? (e.currentTarget.previousElementSibling as HTMLInputElement)
				: pos === 'next'
				? (e.currentTarget.nextElementSibling as HTMLInputElement)
				: null
		input && input.focus()
		if (e.currentTarget !== document.activeElement) {
			e.currentTarget.style.caretColor = ''
		}
		if (input && input.value.length === 1) {
			input.style.caretColor = 'transparent'
		}
	}

	const OTPCodeKeyboardPressHanlder = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'ArrowRight') {
			switchInput(e, 'next')
		}

		if (e.key === 'ArrowLeft') {
			switchInput(e, 'prev')
		}

		if (e.key === 'Backspace') {
			e.preventDefault()

			if (e.currentTarget.value.length === 1) {
				e.currentTarget.value = ''
			} else {
				const input = e.currentTarget.previousElementSibling as HTMLInputElement
				if (input) {
					input.focus()
					input.value = ''
				}
			}
			e.currentTarget.style.caretColor = ''
		}

		if (
			/\d/.test(e.key) &&
			e.key.toLowerCase() !== 'e' &&
			e.currentTarget.value.length === 1
		) {
			e.currentTarget.value = e.key
			const input = e.currentTarget.nextElementSibling as HTMLInputElement
			setTimeout(() => {
				input && input.focus()
			}, 0)
		}
	}

	const OTPCodeClickHanlder = (e: MouseEvent<HTMLInputElement>) => {
		// if (e.detail === 1 && e.currentTarget.value.length) {
		// 	e.currentTarget.style.caretColor = 'transparent'
		// } else {
		// 	e.currentTarget.style.caretColor = 'black'
		// }
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
				<h2 className={styles.modalTitle}>???????? ???? ????????</h2>
				{authModalState === 'initial' ? (
					<>
						<p className={styles.modalDescription}>
							?????????????? ?????????????? ???? ???????? ????????????????, ???????????????? ?????????? ???????????????? ?? ?????????????????? ????
							????????????
						</p>
						<form action='#' className={styles.modalForm}>
							<div className={styles.modalFormContainer}>
								<div className={styles.telInputContainer}>
									<label>
										<span className={styles.labelText}>?????????? ????????????????</span>
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
								value='?????????????? ??????'
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
							?????? ?????????????????? ???????????????????? ????
							<div>
								<span className={styles.phoneNumber}>{formatTelNumber(tel)}</span>
								<span
									onClick={() => {
										setAuthModalState('initial')
									}}
									className={styles.textButton}
								>
									????????????????
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
									onChange={OTPCodeInputChangeHandler}
									onKeyDown={OTPCodeKeyboardPressHanlder}
									onClick={OTPCodeClickHanlder}
								/>
							))}
						</div>
						<input
							type='submit'
							value='???????????????? ?????????? ??????'
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
