import classNames from 'classnames'
import { Product } from 'constants/dataBase/interfces'
import { useRef, useEffect, MouseEvent, RefObject, useState } from 'react'
import { ADDONS, INGREDIENTS } from 'constants/dataBase/ingredients'
import { capitalize } from 'utils/capitalize.util'
// @ts-ignore
import styles from './Modal.module.scss'
import { AddonCard } from './components/AddonCard'

interface IModalProps {
	isModalOpen: boolean
	setIsModalOpen: Function
	product: Product | null
}

export const Modal: React.FC<IModalProps> = ({
	isModalOpen,
	setIsModalOpen,
	product,
}: IModalProps) => {
	const smallSliderRef = useRef<HTMLDivElement>(null)
	const largeSliderRef = useRef<HTMLDivElement>(null)

	const [ingredients] = useState(INGREDIENTS)
	const [addons] = useState(ADDONS)

	useEffect(() => {
		window.addEventListener('keydown', e => {
			if (e.key === 'Escape') {
				setIsModalOpen(false)
			}
		})

		if (isModalOpen) {
			document.body.style.overflow = 'hidden'
			// document.body.style.marginRight = '15px'
		} else {
			document.body.style.overflow = ''
			// document.body.style.marginRight = ''
		}
	})

	const modalCloseHandler = (): void => {
		setIsModalOpen(false)
	}

	const sliderSwitchHandler = (
		e: MouseEvent<HTMLDivElement>,
		ref: RefObject<HTMLDivElement>
	) => {
		if (e.currentTarget.dataset.offset && ref && ref.current) {
			const elem = ref.current
			if (elem) {
				elem.style.transform = `translate(calc(100% * ${+e.currentTarget.dataset
					.offset}))`
			}
		}
	}

	const ingredientClickHandler = (e: MouseEvent<HTMLLIElement>) => {
		if (e.currentTarget.dataset.optional === 'true') {
			e.currentTarget.toggleAttribute('data-removed')
		}
	}

	return product ? (
		<>
			<div
				className={classNames(styles.modal, styles.modalMedium, {
					[styles.modalActive]: isModalOpen,
				})}
			>
				<button
					className={styles.modalClose}
					type='button'
					onClick={() => {
						setIsModalOpen(false)
					}}
					tabIndex={-1}
				>
					<img src='modal_close.svg' alt='Close button' />
				</button>
				<div className={styles.modalLeft} />
				<div className={styles.modalRight}>
					<div className={styles.modalScroll}>
						<h4 className={styles.modalTitle}>{product.title}</h4>
						<p className={classNames(styles.modalInfo, styles.info)}>
							<span className={styles.infoSize} id='info_size'>
								25 см
							</span>
							,
							<span className={styles.infoDoughType} id='info_dough_type'>
								традиционное тесто
							</span>
						</p>
						<ul
							className={classNames(styles.modalIngredientList, styles.ingredientList)}
						>
							{product.ingredients.map((id, index) => {
								const ingredient = ingredients[id - 1]
								return (
									<>
										<li
											className={styles.ingredientListItem}
											data-optional={ingredient.optional}
											onClick={ingredientClickHandler}
										>
											<span>
												{!index ? capitalize(ingredient.title) : ingredient.title}
											</span>
										</li>
										,&nbsp;
									</>
								)
							})}
						</ul>

						<div className={classNames(styles.modalSliderBtn, styles.sliderBtn)}>
							<div
								className={classNames(
									styles.sliderBtnSlider,
									styles.sliderBtnSliderSmall
								)}
								style={{ transform: 'translateX(100%)' }}
								ref={largeSliderRef}
							/>
							{['Маленькая', 'Средняя', 'Большая'].map((text, index) => {
								return (
									<div
										className={styles.sliderBtnItem}
										data-offset={index}
										onClick={e => {
											sliderSwitchHandler(e, largeSliderRef)
										}}
										key={Math.random()}
									>
										<label>
											<span>{text}</span>
											<input type='radio' name='pizza-size' value='small' />
										</label>
									</div>
								)
							})}
						</div>

						<div className={classNames(styles.modalSliderBtn, styles.sliderBtn)}>
							<div
								className={classNames(
									styles.sliderBtnSlider,
									styles.sliderBtnSliderLarge
								)}
								ref={smallSliderRef}
							/>
							{['Традиционное', 'Тонкое'].map((text, index) => {
								return (
									<div
										className={styles.sliderBtnItem}
										data-offset={index}
										key={Math.random()}
										onClick={e => {
											sliderSwitchHandler(e, smallSliderRef)
										}}
									>
										<label>
											<span>{text}</span>
											<input type='radio' name='pizza-size' value='small' />
										</label>
									</div>
								)
							})}
						</div>

						<div className={styles.addons}>
							<h5 className={styles.addonsTitle}>Добавить в пиццу</h5>
							<div className={styles.addonsList}>
								{product.addons &&
									product.addons.map(addonTitle => {
										const foundAddon = addons.find(addon => {
											return addon.title === addonTitle
										})

										return foundAddon && <AddonCard {...foundAddon} />
									})}
							</div>
						</div>
					</div>

					<div className={styles.modalCardBtnContainer}>
						<button className={styles.modalCardBtn} type='button' tabIndex={-1}>
							Добавить в корзину за 85 000 сум
						</button>
					</div>
				</div>
			</div>
			<div className={styles.modalBg} onClick={modalCloseHandler} />
		</>
	) : null
}
