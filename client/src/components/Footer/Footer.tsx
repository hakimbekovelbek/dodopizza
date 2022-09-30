import React from 'react'
import classNames from 'classnames'
// @ts-ignore
import styles from './Footer.module.css'

export const Footer: React.FC = () => (
    <div className={styles.footer}>
        <div className={styles.footer_top}>
            <div className={classNames(styles.secret_buyer, styles.container)}>
                <img className={styles.secret_img} src='spy.svg' alt="" />
                <div className={styles.secret_text}>Стань тайным покупателем Додо Пиццы и получи пиццу в подарок</div>
                <a href="https://dodocontrol.ru" className={styles.secret_button}>Заполнить анкету</a>
            </div>
        </div>
        <div>
            <div className={classNames(styles.menu, styles.container)}>
                <div className={styles.navigation}>
                    <div className={styles.links__section}>
                        <span className={styles.links__section_title}>Додо Пицца</span>
                        <a href="#root" className={styles.links__section_link}>О нас</a>
                        <a href="#root" className={styles.links__section_link}>Додо-книга</a>
                        <a href="#root" className={styles.links__section_link}>Блог «Сила ума»</a>
                        <a href="#root" className={styles.links__section_link}>Додо ИС</a>
                    </div>
                    <div className={styles.links__section}>
                        <span className={styles.links__section_title}>Работа</span>
                        <a href="#root" className={styles.links__section_link}>В пиццерии</a>
                    </div>
                    <div className={styles.links__section}>
                        <span className={styles.links__section_title}>Партнерам</span>
                        <a href="#root" className={styles.links__section_link}>Франшиза</a>
                        <a href="#root" className={styles.links__section_link}>Инвестиции</a>
                        <a href="#root" className={styles.links__section_link}>Поставщикам</a>
                    </div>
                    <div className={styles.links__section}>
                        <span className={styles.links__section_title}>Это интересно</span>
                        <a href="#root" className={styles.links__section_link}>Почему мы готовим без перчаток?</a>
                        <a href="#root" className={styles.links__section_link}>Экскурсии и мастер-классы</a>
                    </div>
                </div>
                <div className={styles.menu_right}>
                    <div className={styles.contacts}>
                        <div className={styles.contacts_phone}>
                            <div className={styles.contacts_phone_description}>
                                <span className={styles.contacts_phone_description__text}>Звонок бесплатный</span>
                            </div>
                            <div className={styles.contacts_phone_number}>
                                <a href="#root" className={styles.contacts_phone_number__link}>+998712077729</a>
                            </div>
                        </div>
                        <a href="#root" className={styles.contacts_adress}>feedback@dodopizza.uz</a>
                    </div>
                </div>
            </div>
            <div className={classNames(styles.statistics, styles.container)}>
                <div className={styles.stats_part}>
                    <span className={styles.stats_main}>2 560 024 800 сум</span>
                    <span className={styles.stats_more}>Выручка узбекской сети в этом месяце. В прошлом —</span>
                    <span className={styles.stats_more}>2 757 163 900 сум</span>
                </div>
                <div className={styles.stats_part}>
                    <span className={styles.stats_main}>827 пиццерий</span>
                    <span className={styles.stats_more}>в 16 странах, от Великобритании до Нигерии</span>
                </div>
            </div>
            <div className={classNames(styles.footer_copyright, styles.container)}>
                <div className={styles.copyright}>
                    <span className={styles.copyright_text}>ДОДО ПИЦЦА</span>
                    <span className={styles.copyright_icon}>© 2022</span>
                </div>
                <div className={styles.bottom_links}>
                    <a href="#root" className={styles.bottom_link}>Правовая информация</a>
                </div>
                <div className={styles.social_links}>
                    <a href="#root" className={styles.social_link}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
                            <path className={styles.social_img} d="M29.56,24.55a5,5,0,0,0-5,5v80.88a5,5,0,0,0,5,5H73.1V80.26H61.25V66.53H73.1V56.41c0-11.74,7.17-18.13,17.65-18.13a97.08,97.08,0,0,1,10.58.54V51.09H94.07c-5.7,0-6.8,2.71-6.8,6.68v8.76h13.59L99.08,80.26H87.27v35.2h23.17a5,5,0,0,0,5-5V29.56a5,5,0,0,0-5-5H29.56Z"> </path>
                        </svg>
                    </a>
                    <a href="#root" className={styles.social_link}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
                            <path className={styles.social_img} d="M49.91,22.28A27.69,27.69,0,0,0,22.28,50V90a27.68,27.68,0,0,0,27.62,27.69H90.09A27.68,27.68,0,0,0,117.72,90V50a27.69,27.69,0,0,0-27.62-27.7H49.91Zm0,8.2H90.09A19.34,19.34,0,0,1,109.54,50V90a19.33,19.33,0,0,1-19.44,19.49H49.91A19.33,19.33,0,0,1,30.47,90V50A19.33,19.33,0,0,1,49.91,30.49Zm45.71,8.2a5.74,5.74,0,1,0,5.72,5.74A5.73,5.73,0,0,0,95.61,38.69ZM70,45.43A24.57,24.57,0,1,0,94.52,70,24.6,24.6,0,0,0,70,45.43Zm0,8.2A16.37,16.37,0,1,1,53.67,70,16.29,16.29,0,0,1,70,53.63Z"> </path>
                        </svg>
                    </a>
                    <a href="#root" className={styles.social_link}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
                            <path className={styles.social_img} d="M70,30.36c-22.31,0-44.61,1.71-49.51,5.12-9.8,6.83-9.8,62.19,0,69s89.22,6.83,99,0,9.8-62.19,0-69c-4.9-3.42-27.21-5.12-49.51-5.12h0ZM58.69,53.43L87.39,70,58.69,86.57V53.43Z"> </path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </div>
)