import React from 'react'
import classNames from 'classnames'
// @ts-ignore
import styles from './Contacts.module.css'

export const Contacts: React.FC = () => {
    return (
        <>
            <div className={classNames(styles.main, styles.container)}>
                <div className={styles.navigation}>
                    <h1 className={styles.navigationTitle}>Ташкент</h1>
                    <div className={styles.navigationNavBar}>
                        <div className={styles.navigationInput}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className={styles.searchInputIcon}>
                                <path className={styles.searchInputIconPath}fill-rule="evenodd" clip-rule="evenodd"
                                    d="M18.293 19.707l-4-4 1.414-1.414 4 4a1 1 0 01-1.414 1.414z" fill="#000"></path>
                                <path className={styles.searchInputIconPath}fill-rule="evenodd" clip-rule="evenodd"
                                    d="M10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11zm0 2a7.5 7.5 0 100-15 7.5 7.5 0 000 15z"
                                    fill="#000"></path>
                            </svg>
                            <input type="text" className={styles.input} value="" placeholder="Район, улица или станция метро"></input>
                        </div>
                        <button className={styles.navigationButtonMap}>
                            <svg className={styles.navigationButtonIcon} width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path className={styles.navigationButtonPath} fill-rule="evenodd" clip-rule="evenodd"
                                    d="M14.857 17.26C16.543 15.294 18 12.614 18 9.5c0-.925-.293-2.343-1.155-3.477C16.057 4.985 14.66 4 12 4c-2.66 0-4.057.985-4.845 2.023C6.293 7.157 6 8.575 6 9.5c0 3.113 1.457 5.793 3.144 7.76.828.967 1.775 1.882 2.856 2.565 1.08-.683 2.028-1.598 2.857-2.564zM12 22c1 0 8-5 8-12.5C20 7 18.5 2 12 2S4 7 4 9.5C4 17 11 22 12 22z"
                                    fill="#000"></path>
                                <path className={styles.navigationButtonPath} fill-rule="evenodd" clip-rule="evenodd"
                                    d="M11.387 9v2h1a1 1 0 100-2h-1zM9.933 7a.545.545 0 00-.546.545v4.91c0 .3.244.545.546.545h2.454a3 3 0 100-6H9.933z"
                                    fill="#000"></path>
                            </svg>
                            Зона доставки
                        </button>
                    </div>
                    <div className={styles.navigationLinks}>
                        <div className={styles.navigationLink}>
                            <button className={styles.navigationLinkButton}></button>
                            <div className={styles.navigationLinkTitle}>Круглосуточно</div>
                        </div>
                        <div className={styles.navigationLink}>
                            <button className={styles.navigationLinkButton}></button>
                            <div className={styles.navigationLinkTitle}>Работает сейчас</div>
                        </div>
                    </div>
                </div>
                <div className={styles.information}>
                    <div className={styles.informationPhoneNumber}>
                        <div className={styles.informationTitle}>Телефон:</div>
                        <div className={styles.informationText}>+998712077729</div>
                    </div>
                    <div className={styles.informationEmail}>
                        <div className={styles.informationTitle}>Вопросы, отзывы и предложения:</div>
                        <div className={styles.informationText}>feedback@dodopizza.uz</div>
                    </div>
                </div>
            </div>
            <div className={classNames(styles.menu, styles.container)}>
                <div className={styles.menuSection}>
                    <div className={styles.menuSectionTitle}>Буюк Ипак Йули</div>
                    <div className={styles.menuSectionDescripton}>
                        41 мин
                        <div><i className={styles.menuBlackPoint}></i></div>
                        4.51
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.menuStar}><defs><linearGradient id="star_16_svg__a"><stop offset="50%" stop-color="#FFD200"></stop><stop offset="50%" stop-color="#999" stop-opacity="0.5"></stop></linearGradient></defs><path className={styles.menuStarIcon} d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                    </div>
                    <div className={styles.menuSectionText}>
                        <span className={styles.menuSectionItems}>ул. Буюк Ипак Йули (3), 123</span>
                        <span className={styles.menuSectionItems}>Доставка и самовывоз<div className={styles.menuWorkTime}> 09:00 — 00:00</div></span>
                        <span className={styles.menuSectionItems}>Ресторан<div className={styles.menuWorkTime}> 09:00 — 00:00</div></span>
                    </div>
                </div >
                <div className={styles.menuSection}>
                    <div className={styles.menuSectionTitle}>Новомосковская</div>
                    <div className={styles.menuSectionDescripton}>
                        40 мин
                        <div><i className={styles.menuBlackPoint}></i></div>
                        4.7
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.menuStar}><defs><linearGradient id="star_16_svg__a"><stop offset="50%" stop-color="#FFD200"></stop><stop offset="50%" stop-color="#999" stop-opacity="0.5"></stop></linearGradient></defs><path className={styles.menuStarIcon} d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                    </div>
                    <div className={styles.menuSection_text}>
                        <span className={styles.menuSectionItems}>ул. Кары-Ниязи, 61</span>
                        <span className={styles.menuSectionItems}>Доставка и самовывоз<div className={styles.menuWorkTime}> 09:00 — 23:00</div></span>
                        <span className={styles.menuSectionItems}>Ресторан<div className={styles.menuWorkTime}> 09:00 — 23:00</div></span>
                    </div>
                </div>
                <div className={styles.menuSection}>
                    <div className={styles.menuSectionTitle}>Саид Барака</div>
                    <div className={styles.menuSectionDescripton}>
                        47 мин
                        <div><i className={styles.menuBlackPoint}></i><div></div></div>
                        4.53
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className={styles.menuStar}><defs><linearGradient id="star_16_svg__a"><stop offset="50%" stop-color="#FFD200"></stop><stop offset="50%" stop-color="#999" stop-opacity="0.5"></stop></linearGradient></defs><path className={styles.menuStarIcon} d="M8.451 1.49a1 1 0 00-.902 0c-.245.123-.378.359-.461.528-.09.182-.185.427-.296.712l-.928 2.39a3.374 3.374 0 01-.07.173v.002H5.79c-.036.006-.086.01-.184.02l-2.504.214c-.272.024-.51.044-.695.077-.176.032-.418.09-.6.274a1 1 0 00-.28.826c.03.256.186.45.307.583.126.139.302.3.503.485l1.987 1.823.125.118.002.002v.003c-.006.033-.016.079-.036.168l-.592 2.66a9.167 9.167 0 00-.145.73c-.024.184-.042.445.087.68a1 1 0 00.733.508c.265.038.504-.072.667-.16a9.15 9.15 0 00.632-.392l2.036-1.332c.086-.056.13-.085.164-.104L8 12.476l.003.002c.033.019.078.048.164.104l2.036 1.332c.246.161.458.3.632.393.163.087.401.197.667.159a1 1 0 00.733-.508c.13-.235.11-.496.087-.68a9.199 9.199 0 00-.145-.73l-.592-2.66c-.02-.09-.03-.135-.035-.168v-.003l.001-.002.125-.118 1.987-1.823c.201-.185.377-.346.503-.485.12-.133.276-.327.308-.583a1 1 0 00-.281-.826c-.182-.183-.424-.242-.6-.274-.185-.033-.423-.053-.695-.077l-2.504-.215a3.372 3.372 0 01-.184-.018h-.003l-.002-.003a3.421 3.421 0 01-.069-.172l-.928-2.39a9.644 9.644 0 00-.296-.713c-.083-.17-.216-.405-.46-.529z"></path></svg>
                    </div>
                    <div className={styles.menuSectionText}>
                        <span className={styles.menuSectionItems}><svg className={styles.menuItemMetro} width="20" height="17" viewBox="0 0 20 15"><path fill="#EB1D00" fill-rule="evenodd" d="M13.399.056h-.158L9.88 6.54 6.401 0 1.638 11.816H.406v.949H7.15v-.95H5.813L7.15 8.124l2.73 4.642 2.624-4.642 1.338 3.693h-1.338v.949h6.691v-.95h-1.159z"></path></svg>Ойбек</span>
                        <span className={styles.menuSectionItems}>ул. Саида Барака, 16Б</span>
                        <span className={styles.menuSectionItems}>Доставка и самовывоз<div className={styles.menuWorkTime}> Круглосуточно</div></span>
                        <span className={styles.menuSectionItems}>Ресторан<div className={styles.menuWorkTime}> Круглосуточно</div></span>
                    </div>
                </div>
            </div>
        </>
    )
}