import { Product } from '../interfces'

export const SNAKS: Array<any> = [
	{
		id: 1,
		title: 'Додстер',
		img: 'https://cdn.dodostatic.net/static/Img/Products/3dbbe8c9cb4844cc9103e1c52dd37258_292x292.jpeg',
		price: 22000,
		description:
			'Легендарная горячая закуска с цыплёнком, томатами, моцареллой, соусом ранч в тонкой пшеничной лепешке',
	},
	{
		id: 2,
		title: 'Острый Додстер',
		img: 'https://cdn.dodostatic.net/static/Img/Products/7f5ddc2ece6f4672934fb96ed96d2cf5_292x292.jpeg',
		price: 24000,
		description:
			'Горячая закуска с цыпленком, перцем халапеньо, солеными огурчиками, томатами, моцареллой и соусом барбекю в тонкой пшеничной лепешке',
	},
	{
		id: 3,
		title: 'Дэнвич Чоризо',
		img: 'https://cdn.dodostatic.net/static/Img/Products/64cec4ded8214ef2aad6011bdae9763d_1875x1875.jpeg',
		price: 30000,
		description:
			'Новая фирменная закуска - дэнвич! Это новинка с хрустящей чиабаттой, колбасками чоризо и пепперони, сыром моцарелла, соусами бургер и барбекю.',
	},
	{
		id: 4,
		title: 'Дэнвич Ветчина и Сыр',
		img: 'https://cdn.dodostatic.net/static/Img/Products/7ff755dd0e6040d4945ea30e4baeb88e_292x292.jpeg',
		price: 30000,
		description:
			'Новая фирменная закуска с великолепным сочетанием ветчины и сыра. И все это в хрустящей Чиаббате.',
	},
	{
		id: 5,
		title: 'Додо картофель',
		img: 'https://cdn.dodostatic.net/static/Img/Products/38450794582a4b989ba0d52037900acf_292x292.png',
		price: 24000,
		description:
			'Ароматный запеченный картофель с итальянскими травами. Стандартная порция.',
	},
	{
		id: 6,
		title: 'Сырный Стартер',
		img: 'https://cdn.dodostatic.net/static/Img/Products/999297357e564271bf42937690bca701_292x292.jpeg',
		price: 20000,
		description:
			'Горячая закуска с сыром моцарелла, сыром пармезан и сыром чеддер в тонкой пшеничной лепешке',
	},
	{
		id: 7,
		title: 'Грибной Стартер',
		img: 'https://cdn.dodostatic.net/static/Img/Products/95928faa151b46ee9b44e26b219d4d66_292x292.jpeg',
		price: 20000,
		description:
			'Горячая закуска с шампиньонами, моцареллой и соусом ранч в тонкой пшеничной лепешке',
	},
	{
		id: 8,
		title: 'Острый Стартер',
		img: 'https://cdn.dodostatic.net/static/Img/Products/6305364e91d9488e80872a5d196030dc_292x292.jpeg',
		price: 23000,
		description:
			'Горячая закуска с колбасками пепперони, цыпленком, перцем халапеньо, моцареллой и соусом сальса в тонкой пшеничной лепешке',
	},
	{
		id: 9,
		title: 'Наггетсы',
		img: 'https://cdn.dodostatic.net/static/Img/Products/c3e2b4616a324bdb8a0ec09008f5d98f_292x292.png',
		price: 22000,
		description: 'Хрустящие запеченные дольки куриного филе в панировке',
	},
	{
		id: 10,
		title: 'Салат цезарь',
		img: 'https://cdn.dodostatic.net/static/Img/Products/e80ada0f5fc24d74b41a1b8b6ce6efee_292x292.jpeg',
		price: 23000,
		description:
			'Цыпленок, свежие листья салата айсберг, томаты черри, пармезан, пшеничные гренки, итальянские травы, соус цезарь',
	},
	{
		id: 11,
		title: 'Куриные крылья, Стандартная',
		img: 'https://cdn.dodostatic.net/static/Img/Products/a81858f39cbb481e9061d5ca1d4f5dcb_292x292.jpeg',
		price: 20000,
		description:
			'Запеченные куриные крылья в пикантном маринаде из соуса барбекю',
	},
	{
		id: 12,
		title: 'Куриные крылья, Большая',
		description:
			'Запеченные куриные крылья в пикантном маринаде из соуса барбекю',
		price: 32000,
		img: 'https://cdn.dodostatic.net/static/Img/Products/5a07208aef6041ef952b5eda60da9471_292x292.jpeg',
	},
	{
		id: 13,
		title: 'Рулетики с сыром, 16 шт',
		description: 'Сытные рулетики с моцареллой и сырным соусом',
		price: 25000,
		img: 'https://cdn.dodostatic.net/static/Img/Products/30a728f08752492995c777ee82eb8964_292x292.jpeg',
	},
	{
		id: 14,
		title: 'Рулетики с пепперони',
		description:
			'Горячие рулетики с колбасками пепперони, моцареллой и сырным соусом',
		price: 32000,
		img: 'https://cdn.dodostatic.net/static/Img/Products/94935dbff02a4ab1ae982db85e39cdb0_292x292.jpeg',
	},
	{
		id: 15,
		title: 'Рулетики с пепперони + Рулетики с сыром',
		description:
			'Микс горячих рулетиков с сырным соусом: 8 штук с пепперони и моцареллой, 8 штук с моцареллой',
		price: 32000,
		img: 'https://cdn.dodostatic.net/static/Img/Products/2add9d072b1a41c88ec62c804439ec4b_292x292.jpeg',
	},
	{
		id: 16,
		title: 'Рулетики с сыром, 8 шт',
		description: 'Сытные рулетики с моцареллой и сырным соусом',
		price: 15000,
		img: 'https://cdn.dodostatic.net/static/Img/Products/f40edd7fa7b14401889cd1484cdd44c4_292x292.jpeg',
	},
]
