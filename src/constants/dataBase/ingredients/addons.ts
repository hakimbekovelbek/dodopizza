export interface Addons {
	id?: any
	title: string
	img_url: string
	isChosen?: boolean
	price?:
		| number
		| {
				small?: number
				medium?: number
				large?: number
		  }
}

export const ADDONS: Array<Addons> = [
	{
		id: 1,
		title: 'Острый халапеньо',
		price: {
			small: 3000,
			medium: 4000,
			large: 5000,
		},
		img_url:
			'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A219740A95611E9DBAED95FEBAA',
	},
	{
		id: 2,
		title: 'Брынза',
		img_url:
			'https://dodopizza-a.akamaihd.net/static/Img/Ingredients/000D3A262427A95111E9DBAF776AD5E9',
		price: {
			small: 5000,
			medium: 7000,
			large: 10000,
		},
	},
]
