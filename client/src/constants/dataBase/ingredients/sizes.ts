export interface Types {
	id?: any
	thin?: string
	normal?: string
}

export interface Nutrition {
	id?: any
	calories?: number
	proteins?: number
	fats?: number
	carbohydrates?: number
	weight?: number
	diameter?: number
}

export interface Sizes {
	id?: any
	small?: {
		price: number
		imgs?: Types
		nutrition: {
			normal?: Nutrition
		}
	}
	medium?: {
		price: number
		imgs?: Types
		nutrition: {
			thin?: Nutrition
			normal?: Nutrition
		}
	}
	large?: {
		price: number
		imgs?: Types
		nutrition: {
			thin?: Nutrition
			normal?: Nutrition
		}
	}
}
