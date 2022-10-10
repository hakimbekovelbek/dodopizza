import { Sizes } from '../ingredients/index'

export interface Product {
	id: number | string
	title: string
	img?: string
	price: number
	sizes?: Sizes
	additionalPrice?: number
	ingredients?: number[]
	description?: string
	addons?: Array<Array<any | boolean>>
}

export interface ComboProducts {
	id: number | string
	title: string
	price: number
	products: [Product]
}

export interface ProductType {
	id: any
	title: string
	type: string
	products: Array<Product>
}
