import { ProductType } from './dataBase/interfces'
import {COMBOS, DESSERTS, DRINKS, PIZZAS, PIZZAS_COMBO, SNAKS} from './dataBase';

export const NAVBAR_CONFIG = [
	{
		label: 'Пицца',
		link: 'pizzas',
	},
	{
		label: 'Комбо',
		link: 'combo',
	},
	{
		label: 'Закуски',
		link: 'snacks',
	},
	{
		label: 'Десерты',
		link: 'desserts',
	},
	{
		label: 'Напитки',
		link: 'drinks',
	},
	{
		label: 'Акции',
		link: 'bonusactions',
	},
	{
		label: 'Контакты',
		link: 'contacts',
	},
	{
		label: 'Франшиза',
		link: 'franchise',
	},
	{
		label: 'О нас',
		link: 'about',
	},
	{
		label: 'Прямой эфир',
		link: 'live',
	},
]

export const PRODUCTS_DATA: Array<ProductType> = [
	{
		id: 1,
		title: 'Пицца',
		type: 'pizzas',
		products: [...PIZZAS_COMBO, ...PIZZAS],
	},
	{
		id: 2,
		title: 'Комбо',
		type: 'combo',
		products: COMBOS,
	},
	{
		id: 3,
		title: 'Закуски',
		type: 'snacks',
		products: SNAKS,
	},
	{
		id: 4,
		title: 'Десерты',
		type: 'desserts',
		products: DESSERTS,
	},
	{
		id: 5,
		title: 'Напитки',
		type: 'drinks',
		products: DRINKS,
	},
]
