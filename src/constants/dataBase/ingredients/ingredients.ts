export interface Ingredients {
	id: any
	title: string
	optional: boolean
}

export const INGREDIENTS: Array<Ingredients> = [
	{
		id: 1,
		title: 'Увеличенная порция моцареллы',
		optional: false,
	},
	{
		id: 2,
		title: 'томаты',
		optional: false,
	},
	{
		id: 3,
		title: 'итальянские травы',
		optional: false,
	},
	{
		id: 4,
		title: 'томатный соус',
		optional: false,
	},
]
