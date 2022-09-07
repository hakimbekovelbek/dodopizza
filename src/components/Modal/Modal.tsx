import classNames from 'classnames'
// @ts-ignore
import styles from './Modal.module.scss'

export const Modal = () => {
	return (
		<>
			<div
				className={classNames(styles.modal, styles.modalMedium, styles.modalActive)}
			>
				<button className={styles.modalClose} type='button'>
					<img src='modal_close.svg' alt='x' />
				</button>
				<div className={styles.modalLeft} />
				<div className={styles.modalRight}>
					<div className={styles.modalScroll}>
						<h4 className={styles.modalTitle}>Овощи и грибы</h4>
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
							<li
								className={styles.ingredientListItem}
								data-optional='true'
								data-removed='false'
							>
								<span>Базилик</span>
							</li>
							,
							<li className={styles.ingredientListItem} data-optional='false'>
								<span>томатный соус</span>
							</li>
							,
							<li
								className={styles.ingredientListItem}
								data-optional='true'
								data-removed='false'
							>
								<span>кубики брынзы</span>
							</li>
							,
							<li
								className={styles.ingredientListItem}
								data-optional='true'
								data-removed='false'
							>
								<span>шампиньоны</span>
							</li>
							,
							<li
								className={styles.ingredientListItem}
								data-optional='true'
								data-removed='false'
							>
								<span>сладкий перец</span>
							</li>
							,
							<li
								className={styles.ingredientListItem}
								data-optional='true'
								data-removed='false'
							>
								<span>красный лук</span>
							</li>
							,
							<li className={styles.ingredientListItem} data-optional='false'>
								<span>моцарелла</span>
							</li>
							,
							<li
								className={styles.ingredientListItem}
								data-optional='true'
								data-removed='false'
							>
								<span>маслины</span>
							</li>
							,
							<li
								className={styles.ingredientListItem}
								data-optional='true'
								data-removed='false'
							>
								<span>томаты</span>
							</li>
						</ul>

						<div className={classNames(styles.modalSliderBtn, styles.sliderBtn)}>
							<div
								className={classNames(
									styles.sliderBtnSlider,
									styles.sliderBtnSliderSmall
								)}
								style={{ transform: 'translateX(100%)' }}
							/>
							{['Маленькая', 'Средняя', 'Большая'].map((text, index) => {
								return (
									<div
										className={styles.sliderBtnItem}
										data-offset={index}
										onClick={() => {}}
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
							/>
							{['традиционное', 'тонкое'].map((text, index) => {
								return (
									<div className={styles.sliderBtnItem} data-offset={index}>
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
								<div className={classNames(styles.addonsCard, styles.addonCard)}>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAED95FEBAA'
										alt='Острый халапеньо'
										className={styles.addonCardImage}
									/>
									<h6 className={styles.addonCardTitle}>Острый халапеньо</h6>
									<p className={styles.addonCardPrice}>5 000 сум</p>
								</div>

								<div className={classNames(styles.addonsCard, styles.addonCard)}>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611EA0840DB86284E'
										alt='Острый халапеньо'
										className={styles.addonCardImage}
									/>
									<h6 className={styles.addonCardTitle}>Сыр моцарелла</h6>
									<p className={styles.addonCardPrice}>18 000 сум</p>
								</div>

								<div className={classNames(styles.addonsCard, styles.addonCard)}>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAF25CA64B9'
										alt='Острый халапеньо'
										className={styles.addonCardImage}
									/>
									<h6 className={styles.addonCardTitle}>Ветчина</h6>
									<p className={styles.addonCardPrice}>10 000 сум</p>
								</div>
								<div className={classNames(styles.addonsCard, styles.addonCard)}>
									<img
										src='https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAF25CA64B9'
										alt='Острый халапеньо'
										className={styles.addonCardImage}
									/>
									<h6 className={styles.addonCardTitle}>Ветчина</h6>
									<p className={styles.addonCardPrice}>10 000 сум</p>
								</div>
							</div>
						</div>
					</div>

					<button className={styles.modalCardBtn} type='button'>
						Добавить в корзину за 85 000 сум
					</button>
				</div>
			</div>
			<div className={styles.modalBg} />
		</>
	)
}
