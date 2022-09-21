import classNames from 'classnames'
import { useState, useEffect, useRef } from 'react'
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
	const telInputRef = useRef<HTMLInputElement>(null)
	const modalBgRef = useRef<HTMLDivElement>(null)
	const submitBtnRef = useRef<HTMLInputElement>(null)

	const [telArray, setTelArray] = useState<Array<string>>(['+998-'])

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

	const phoneNumberInputHandler = (event: KeyboardEvent) => {
		if (telInputRef.current) {
			const updatedTelArray = [...telArray]
			if (event.key === 'Backspace' && telArray.length > 1) {
				updatedTelArray.pop()
				setTelArray(updatedTelArray)
				return
			}

			if (event.key === 'Backspace' && telArray.length === 1) {
				event.preventDefault()
				return
			}

			if (updatedTelArray.length === 11) {
				event.preventDefault()
				return
			}

			if (/\d/.test(event.key)) {
				if (
					updatedTelArray.length === 2 ||
					updatedTelArray.length === 5 ||
					updatedTelArray.length === 7
				) {
					updatedTelArray.push(event.key.concat('-'))
					setTelArray(updatedTelArray)
					telInputRef.current.value = telArray.join('')
				} else {
					updatedTelArray.push(event.key)
					setTelArray(updatedTelArray)
					telInputRef.current.value = telArray.join('')
				}
			}

			if (/\D/.test(event.key)) {
				if (event.key !== 'Backspace') {
					event.preventDefault()
				}
			}

			if (telInputRef.current?.value.length === 17) {
				if (submitBtnRef.current) {
					submitBtnRef.current.disabled = false
				}
			} else {
				// @ts-ignore
				submitBtnRef.current.disabled = true
			}
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
						<div className={styles.countrySelectButtonContainer}>
							<label>
								<span className={styles.labelText}>Страна</span>
								<button type='button' className={styles.countrySelectButton}>
									Uzb
								</button>
							</label>
						</div>
						<div className={styles.telInputContainer}>
							<label>
								<span className={styles.labelText}>Номер телефона</span>
								<input
									type='tel'
									onKeyDown={e => {
										// @ts-ignore
										phoneNumberInputHandler(e)
									}}
									placeholder='+998 99-999-99-99'
									maxLength={13}
									minLength={13}
									className={styles.telInput}
									ref={telInputRef}
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
