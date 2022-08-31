import { Sizes } from '../ingredients/index'

export interface Product {
	id: number | string
	title: string
	img?: string
	price: number
	sizes?: Sizes
	additionalPrice?: number
	ingredients?: Array<Array<any | boolean>>
	description?: string
	addons?: Array<Array<any | boolean>>
}

export type Products = Array<Product>

export interface comboProducts {
	id: number | string
	title: string
	price: number
	products: [Product]
}

export type productsType = Array<{
	id: any
	title: string
	type: string
	products: Products
}>
