import { ProductType } from './dataBase/products/product'
import { PIZZAS } from './dataBase/products/pizzas'

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

export const PRODUCTS_TYPE: Array<ProductType> = [
	{
		id: 1,
		title: 'Пицца',
		type: 'pizzas',
		products: PIZZAS,
	},
]
