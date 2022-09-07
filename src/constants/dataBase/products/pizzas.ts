import { ComboProducts, Product } from '../interfces'

export const PIZZAS_COMBO: Array<ComboProducts> = [
	{
		id: 1,
		title: 'Пицца из половинок',
		price: 90000,
		description: 'Соберите свою пиццу 35 см с двумя разными вкусами',
		img: 'https://dodopizza-a.akamaihd.net/static/Img/Products/1be8fabd45824fc7b042ccd213c20474_292x292.jpeg',
		products: [
			['Индейка и грибы', 47000],
			['Гавайская', 47000],
			['Двойная пепперони', 55000],
			['Маргарита', 40000],
			['Овощи и грибы', 47000],
			['Супермясная', 55000],
			['Цыпленок барбекю', 50000],
			['Цыпленок ранч', 50000],
			['Чизбургер-пицца', 47000],
			['Пепперони фреш', 45000],
			['Додо', 55000],
			['Мексиканская', 47000],
			['Мясная', 50000],
			['Пепперони', 47000],
			['Сырная', 40000],
			['Сырный цыпленок', 45000],
			['4 сыра', 55000],
			['Крэйзи пепперони', 50000],
			['Чиззи чеддер', 47000],
		],
		// totalPrice:this.products.map((price:Array<any|number>, i:number):number=>(price[1]+price[i+1])),
		buttonType: {
			title: 'Собрать',
			buttonStyle: {
				backgroundColor: 'rgb(255, 105, 0);',
				color: 'rgb(255, 255, 255);',
			},
		},
	},
]

export const PIZZAS: Array<Product> = [
	{
		id: PIZZAS_COMBO.length + 1,
		title: 'Чикен Бомбони',
		price: 59000,
		description:
			'Сладкий перец, куриные кусочки, сыр моцарелла, красный лук, соус чили, смесь сыров чеддер и пармезан',
		img: 'https://cdn.dodostatic.net/static/Img/Products/5eca54ca8e3f4c4b986a26cdb7d7d09a_584x584.jpeg',
		sizes: {
			small: {
				price: 23,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/b29f2f85490e4e66bd0fe3f94543a884_1875x1875.jpeg',
				},
				nutrition: {
					normal: {
						diameter: 25,
					},
				},
			},
			medium: {
				price: 65000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/193863f2c1b443ca898c2abac06289ac_1875x1875.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/47dac5afdcc84aaaa5fe029f2f840c82_1875x1875.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 30,
					},
					normal: {
						diameter: 30,
					},
				},
			},
			large: {
				price: 78000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/0fc17661e9fe46dfbf18195b4eb52462_1875x1875.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/b3936c7bc5bd4f9789af59b326dddf4b_1875x1875.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 35,
					},
					normal: {
						diameter: 35,
					},
				},
			},
		},
	},
	{
		id: PIZZAS_COMBO.length + 2,
		title: 'Миу-пицца с пепперони и игрушкой',
		price: 75000,
		description:
			'Сыр моцарелла, пепперони, смесь сыров чеддер и пармезан, пицца-соус',
		img: 'https://cdn.dodostatic.net/static/Img/Products/5eca54ca8e3f4c4b986a26cdb7d7d09a_584x584.jpeg',
		sizes: {
			small: {
				price: 23,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/b29f2f85490e4e66bd0fe3f94543a884_1875x1875.jpeg',
				},
				nutrition: {
					normal: {
						diameter: 25,
					},
				},
			},
			medium: {
				price: 65000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/193863f2c1b443ca898c2abac06289ac_1875x1875.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/47dac5afdcc84aaaa5fe029f2f840c82_1875x1875.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 30,
					},
					normal: {
						diameter: 30,
					},
				},
			},
			large: {
				price: 78000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/0fc17661e9fe46dfbf18195b4eb52462_1875x1875.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/b3936c7bc5bd4f9789af59b326dddf4b_1875x1875.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 35,
					},
					normal: {
						diameter: 35,
					},
				},
			},
		},
	},
	{
		id: PIZZAS_COMBO.length + 3,
		title: 'Пепперони',
		price: 55000,
		description:
			'Сыр моцарелла, пепперони, смесь сыров чеддер и пармезан, пицца-соус',
		img: 'https://cdn.dodostatic.net/static/Img/Products/c5c7d82b42584b0caaa2e6d32be39c92_584x584.jpeg',
		sizes: {
			small: {
				price: 55000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/2fe1e3fcc0f04d6a870b4cb075be8574_584x584.jpeg',
				},
				nutrition: {
					normal: {
						diameter: 25,
					},
				},
			},
			medium: {
				price: 73000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/a56e04289a4444039a7bddf1cee9cf75_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/c5c7d82b42584b0caaa2e6d32be39c92_584x584.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 30,
					},
					normal: {
						diameter: 30,
					},
				},
			},
			large: {
				price: 85000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/fc450bd57b344f1cb57718f82766171f_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/79d9c2f5ef4f4e4aac44e3e3d20bb9c3_584x584.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 35,
					},
					normal: {
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Сыр моцарелла',
			'Чеддер и пармезан',
			'Томаты',
			'Шампиньоны',
			'Острый халапеньо',
			'Брынза',
			'Соленые огурчики',
			'Сыр блю чиз',
			'Итальянские травы',
		],
	},
	{
		id: PIZZAS_COMBO.length + 4,
		title: 'Чизбургер-пицца',
		price: 49000,
		description:
			'Митболы из 100% говядины, сыр моцарелла из цельного молока, красный лук, соленые огурчики, томаты, сырный соус',
		img: 'https://cdn.dodostatic.net/static/Img/Products/b6e0567c71ba4c0891b67310b0587179_584x584.jpeg',
		sizes: {
			small: {
				price: 49000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/860c26411b49420492f767f78c523521_584x584.jpeg',
				},
				nutrition: {
					normal: {
						diameter: 25,
					},
				},
			},
			medium: {
				price: 75000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/f8582478695c4d4697d355ceab0671e4_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/b6e0567c71ba4c0891b67310b0587179_584x584.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 30,
					},
					normal: {
						diameter: 30,
					},
				},
			},
			large: {
				price: 89000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/dbe2cd44dea0482d89721511a1262cdd_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/8e41dcd24fd84cabae217926e45cfbf1_584x584.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 35,
					},
					normal: {
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Сыр моцарелла',
			'Цыпленок',
			'Чеддер и пармезан',
			'Ветчина',
			'Пикантная пепперони',
			'Шампиньоны',
			'Острый халапеньо',
			'Соленые огурчики',
			'Сыр блю чиз',
			'Итальянские травы',
		],
	},
	{
		id: PIZZAS_COMBO.length + 5,
		title: 'Додо',
		price: 65000,
		description:
			'Индейка, говядина, пепперони с говядиной, моцарелла из цельного молока, шампиньоны, сладкий перец, красный лук, томатный соус, томаты',
		img: 'https://cdn.dodostatic.net/static/Img/Products/de51de47773843fe95957caab3d7f974_584x584.png',
		sizes: {
			small: {
				price: 65000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/32698058ebb34d6aa8fa1f7fde774fd5_584x584.png',
				},
				nutrition: {
					normal: {
						weight: 480,
						diameter: 25,
					},
				},
			},
			medium: {
				price: 93000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/144d089a224347278e3adb8077b69781_584x584.png',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/de51de47773843fe95957caab3d7f974_584x584.png',
				},
				nutrition: {
					thin: {
						weight: 610,
						diameter: 30,
					},
					normal: {
						weight: 720,
						diameter: 30,
					},
				},
			},
			large: {
				price: 105000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/81e2542d3840417e8484795306323f91_584x584.png',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/4f80a59a37aa4299a631dd2f385f0255_584x584.png',
				},
				nutrition: {
					thin: {
						weight: 830,
						diameter: 35,
					},
					normal: {
						weight: 950,
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Сыр моцарелла',
			'Чеддер и пармезан',
			'Говядина',
			'Ветчина',
			'Острый халапеньо',
			'Брынза',
			'Соленые огурчики',
			'Сыр блю чиз',
			'Итальянские травы',
		],
	},
	{
		id: PIZZAS_COMBO.length + 6,
		title: 'Четыре сезона',
		price: 55000,
		description:
			'Моцарелла из цельного молока, индейка, пепперони с говядиной, брынза, томаты, шампиньоны, томатный соус, итальянские травы',
		img: 'https://cdn.dodostatic.net/static/Img/Products/9f8bf5fd916441ee812eab57885885d5_584x584.jpeg',
		sizes: {
			small: {
				price: 45000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/1776a29290ca413d84c55c5198758208_1875x1875.jpeg',
				},
				nutrition: {
					normal: {
						diameter: 25,
					},
				},
			},
			medium: {
				price: 70000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/a5f87a1e2af84027a1e1abef62e5c854_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/9f8bf5fd916441ee812eab57885885d5_584x584.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 30,
					},
					normal: {
						diameter: 30,
					},
				},
			},
			large: {
				price: 85000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/87bb64d7020548479b80b986f2b6ee60_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/5979d4a645e147cdb1cea0d0dff03b43_584x584.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 35,
					},
					normal: {
						diameter: 35,
					},
				},
			},
		},
	},
	{
		id: PIZZAS_COMBO.length + 7,
		title: 'Сырный цыпленок',
		price: 45000,
		description: 'Цыпленок, моцарелла из цельного молока, сырный соус, томаты',
		img: 'https://cdn.dodostatic.net/static/Img/Products/aa293f3b65874a8195bc1c36973ad465_584x584.jpeg',
		sizes: {
			small: {
				price: 45000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/3d096dac4bef43b7a13f0af2d4409bb6_584x584.jpeg',
				},
				nutrition: {
					normal: {
						weight: 410,
						diameter: 25,
					},
				},
			},
			medium: {
				price: 70000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/35ac27ae47d3425f8c89289213547428_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/aa293f3b65874a8195bc1c36973ad465_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 510,
						diameter: 30,
					},
					normal: {
						weight: 620,
						diameter: 30,
					},
				},
			},
			large: {
				price: 85000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/b2330dcc4170474fa857dfadfcdd782e_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/3b2d7a96433e49bfb03c0e7de429eddc_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 730,
						diameter: 35,
					},
					normal: {
						weight: 850,
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Чеддер и пармезан',
			'Говядина',
			'Ветчина',
			'Пикантная пепперони',
			'Шампиньоны',
			'Острый халапеньо',
			'Соленые огурчики',
			'Сыр блю чиз',
		],
	},
	{
		id: PIZZAS_COMBO.length + 8,
		title: 'Двойная пепперони',
		price: 65000,
		description:
			'Пепперони с говядиной, увеличенная порция моцареллы из цельного молока, томатный соус',
		img: 'https://cdn.dodostatic.net/static/Img/Products/af667534db434f16a3f0ec68aedc8451_584x584.jpeg',
		sizes: {
			small: {
				price: 69000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/48ed5dd1782c40cab64f274ab44caaf8_584x584.jpeg\n',
				},
				nutrition: {
					normal: {
						diameter: 25,
					},
				},
			},
			medium: {
				price: 93000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/16c08688f08745ee96f161d50b0a3219_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/af667534db434f16a3f0ec68aedc8451_584x584.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 30,
					},
					normal: {
						diameter: 30,
					},
				},
			},
			large: {
				price: 105000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/5197653066404e2ebc767e77eecd4c59_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/1fd384218ce34c508bbdf9aa385d8870_584x584.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 35,
					},
					normal: {
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Сыр моцарелла',
			'Цыпленок',
			'Чеддер и пармезан',
			'Говядина',
			'Ветчина',
			'Томаты',
			'Шампиньоны',
			'Острый халапеньо',
			'Брынза',
			'Соленые огурчики',
			'Сыр блю чиз',
			'Итальянские травы',
		],
	},
	{
		id: PIZZAS_COMBO.length + 9,
		title: 'Чиззи чеддер',
		price: 55000,
		description:
			'Ветчина из цыпленка, сладкий перец, моцарелла из цельного молока, томатный соус, итальянские травы, чеснок, сыр чеддер',
		img: 'https://cdn.dodostatic.net/static/Img/Products/30f2957b88154e94a2c8182c1b7465c4_584x584.jpeg',
		sizes: {
			small: {
				price: 65000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/30f2957b88154e94a2c8182c1b7465c4_584x584.jpeg',
				},
				nutrition: {
					normal: {
						weight: 330,
						diameter: 25,
					},
				},
			},
			medium: {
				price: 85000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/b607a932ed7f4614a16469719a255173_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/30f2957b88154e94a2c8182c1b7465c4_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 390,
						diameter: 30,
					},
					normal: {
						weight: 480,
						diameter: 30,
					},
				},
			},
			large: {
				price: 99000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/869ffff852444932a5526d1055511dfa_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/1cd27d93af3442759d1566befb90d0f6_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 530,
						diameter: 35,
					},
					normal: {
						weight: 630,
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Цыпленок',
			'Говядина',
			'Пикантная пепперони',
			'Томаты',
			'Шампиньоны',
			'Острый халапеньо',
			'Брынза',
			'Соленые огурчики',
			'Итальянские травы',
		],
	},
	{
		id: PIZZAS_COMBO.length + 10,
		title: 'Маргарита \uD83C\uDF31',
		price: 39000,
		description:
			'Увеличенная порция моцареллы из цельного молока, томаты, итальянские травы, томатный соус',
		img: 'https://cdn.dodostatic.net/static/Img/Products/47dac5afdcc84aaaa5fe029f2f840c82_584x584.jpeg',
		sizes: {
			small: {
				price: 23,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/b29f2f85490e4e66bd0fe3f94543a884_1875x1875.jpeg',
				},
				nutrition: {
					normal: {
						diameter: 25,
					},
				},
			},
			medium: {
				price: 65000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/193863f2c1b443ca898c2abac06289ac_1875x1875.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/47dac5afdcc84aaaa5fe029f2f840c82_1875x1875.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 30,
					},
					normal: {
						diameter: 30,
					},
				},
			},
			large: {
				price: 78000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/0fc17661e9fe46dfbf18195b4eb52462_1875x1875.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/b3936c7bc5bd4f9789af59b326dddf4b_1875x1875.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 35,
					},
					normal: {
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Сыр моцарелла',
			'Цыпленок',
			'Чеддер и пармезан',
			'Говядина',
			'Ветчина',
			'Пикантная пепперони',
			'Шампиньоны',
			'Ананасы',
			'Острый халапеньо',
			'Брынза',
			'Соленые огурчики',
			'Сыр блю чиз',
		],
	},
	{
		id: PIZZAS_COMBO.length + 11,
		title: 'Пицца-сердце',
		price: 75000,
		description: 'Пицца-соус , сыр моцарелла, пепперони',
		img: 'https://cdn.dodostatic.net/static/Img/Products/d53b558190ab473597515c4da9d14096_584x584.png',
		sizes: {
			medium: {
				price: 48000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/d53b558190ab473597515c4da9d14096_584x584.png',
				},
				nutrition: {
					thin: {
						diameter: 30,
					},
				},
			},
		},
	},
	{
		id: PIZZAS_COMBO.length + 12,
		title: 'Индейка и грибы',
		price: 49000,
		description:
			'Индейка, шампиньоны, увеличенная порция моцареллы из цельного молока, томатный соус',
		img: 'https://cdn.dodostatic.net/static/Img/Products/59a490e30eb143a3b9619346914474f6_584x584.jpeg',
		sizes: {
			small: {
				price: 42000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/48e44edb5f5544b8b2aef79c088315cc_584x584.jpeg',
				},
				nutrition: {
					normal: {
						weight: 370,
						diameter: 25,
					},
				},
			},
			medium: {
				price: 69000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/62681a1f6d93462cbb4665d263508834_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/59a490e30eb143a3b9619346914474f6_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 370,
						diameter: 30,
					},
					normal: {
						weight: 480,
						diameter: 30,
					},
				},
			},
			large: {
				price: 79000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/72c50f1178354c399ed832f5f53c3cb8_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/17d26960fe1e4d50ba91b7e5f557b1ab_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 720,
						diameter: 35,
					},
					normal: {
						weight: 750,
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Сыр моцарелла',
			'Цыпленок',
			'Чеддер и пармезан',
			'Говядина',
			'Пикантная пепперони',
			'Красный лук',
			'Томаты',
			'Шампиньоны',
			'Острый халапеньо',
			'Соленые огурчики',
			'Итальянские травы',
		],
	},
	{
		id: PIZZAS_COMBO.length + 13,
		title: 'Гавайская',
		price: 49000,
		description:
			'Ветчина из цыпленка, ананасы, моцарелла из цельного молока, томатный соус',
		img: 'https://cdn.dodostatic.net/static/Img/Products/55e123ffb87c4403828b86089b58fb70_584x584.jpeg',
		sizes: {
			small: {
				price: 48000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/41f03c8108ab4aa28eb75d09d28b858f_584x584.jpeg',
				},
				nutrition: {
					normal: {
						weight: 440,
						diameter: 25,
					},
				},
			},
			medium: {
				price: 72000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/dff0a20f0e6443339ae3136b66c917c6_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/55e123ffb87c4403828b86089b58fb70_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 540,
						diameter: 30,
					},
					normal: {
						weight: 650,
						diameter: 30,
					},
				},
			},
			large: {
				price: 89000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/fe6e4f55a72b403b96bbeb3b6faa19ba_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/594c0a4876374baaabbb3f8679348711_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 750,
						diameter: 35,
					},
					normal: {
						weight: 870,
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Сыр моцарелла',
			'Цыпленок',
			'Чеддер и пармезан',
			'Говядина',
			'Ветчина',
			'Пикантная пепперони',
			'Красный лук',
			'Томаты',
			'Шампиньоны',
			'Острый халапеньо',
			'Брынза',
			'Сыр блю чиз',
		],
	},
	{
		id: PIZZAS_COMBO.length + 14,
		title: 'Овощи и грибы \uD83C\uDF31 ',
		price: 55000,
		description:
			'Моцарелла из цельного молока, брынза, шампиньоны, сладкий перец, томаты, томатный соус, базилик, красный лук',
		img: 'https://cdn.dodostatic.net/static/Img/Products/f4bbf854891b4bcf92fa0c08d8951181_584x584.jpeg',
		sizes: {
			small: {
				price: 48000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/75a62098fe4249e0a54e43560d56f746_584x584.jpeg',
				},
				nutrition: {
					normal: {
						diameter: 25,
					},
				},
			},
			medium: {
				price: 70000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/bd58157ea6da4af28023f7008f8c360a_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/00f0ca8bda3e48259408353a8c82d367_584x584.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 30,
					},
					normal: {
						diameter: 30,
					},
				},
			},
			large: {
				price: 89000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/bba3932f28784599a9916aae074e5616_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/689f8bcc1c14474c820251f41f06eed4_584x584.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 35,
					},
					normal: {
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Сыр моцарелла',
			'Цыпленок',
			'Говядина',
			'Ветчина',
			'Пикантная пепперони',
			'Ананасы',
			'Острый халапеньо',
			'Итальянские травы',
		],
	},
	{
		id: PIZZAS_COMBO.length + 15,
		title: 'Мексиканская \uD83C\uDF36️\uD83C\uDF36️ ',
		price: 55000,
		description:
			'Цыплёнок, моцарелла из цельного молока, томатный соус, перец халапеньо, сладкий перец, соус сальса, томаты, красный лук',
		img: 'https://cdn.dodostatic.net/static/Img/Products/2837c461187f46b08cfca8c6715fe9e9_584x584.jpeg',
		sizes: {
			small: {
				price: 56000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/93a8e6cb3deb44908899c82efaf0f96b_584x584.jpeg',
				},
				nutrition: {
					normal: {
						weight: 480,
						diameter: 25,
					},
				},
			},
			medium: {
				price: 80000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/fa8ef79667814e69916023a874412a03_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/2837c461187f46b08cfca8c6715fe9e9_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 600,
						diameter: 30,
					},
					normal: {
						weight: 710,
						diameter: 30,
					},
				},
			},
			large: {
				price: 92000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/0c16cc4eefcb4547a7011b1ed458ed7e_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/80cb87b9a60f4c5eba9656f53090eb69_584x584.jpeg\n',
				},
				nutrition: {
					thin: {
						weight: 840,
						diameter: 35,
					},
					normal: {
						weight: 960,
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Сыр моцарелла',
			'Чеддер и пармезан',
			'Говядина',
			'Ветчина',
			'Пикантная пепперони',
			'Острый халапеньо',
			'Сыр блю чиз',
			'Итальянские травы',
		],
	},
	{
		id: PIZZAS_COMBO.length + 16,
		title: 'Мясная',
		price: 59000,
		description:
			'Митболы из говядины, индейка, пепперони с говядиной, моцарелла из цельного молока, томатный соус',
		img: 'https://cdn.dodostatic.net/static/Img/Products/bf4c405c184c48108a666790acdbbb19_584x584.jpeg',
		sizes: {
			small: {
				price: 59000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/63a832f1a1954e03a819cb9d91845e39_584x584.jpeg',
				},
				nutrition: {
					normal: {
						diameter: 25,
					},
				},
			},
			medium: {
				price: 80000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/5426bccf1ba44615847f9efaba4ae48c_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/bf4c405c184c48108a666790acdbbb19_584x584.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 30,
					},
					normal: {
						diameter: 30,
					},
				},
			},
			large: {
				price: 96000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/b6cb1827ef8a46158075de71f6b4f351_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/6f003c56da034f5e9815efb4ac6e56d1_584x584.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 35,
					},
					normal: {
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Сыр моцарелла',
			'Цыпленок',
			'Чеддер и пармезан',
			'Ветчина',
			'Пикантная пепперони',
			'Томаты',
			'Шампиньоны',
			'Брынза',
			'Острый халапеньо',
			'Сыр блю чиз',
			'Итальянские травы',
		],
	},
	{
		id: PIZZAS_COMBO.length + 17,
		title: 'Цыпленок барбекю',
		price: 59000,
		description:
			'Цыпленок, моцарелла из цельного молока, ветчина из цыпленка, соус барбекю, томатный соус, красный лук',
		img: 'https://cdn.dodostatic.net/static/Img/Products/fa2d45e2596143c6989cf32350cd5f07_584x584.jpeg',
		sizes: {
			small: {
				price: 52000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/a712f96b49214785b093fa89747196d2_584x584.jpeg',
				},
				nutrition: {
					normal: {
						weight: 450,
						diameter: 25,
					},
				},
			},
			medium: {
				price: 75000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/8539780e419b4258a60bd39f6b68fd28_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/fa2d45e2596143c6989cf32350cd5f07_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 550,
						diameter: 30,
					},
					normal: {
						weight: 660,
						diameter: 30,
					},
				},
			},
			large: {
				price: 89000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/b6dd665b82b34f3894c424c497c21687_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/e392f07c11944a0e9a4ce2e3734d8198_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 770,
						diameter: 35,
					},
					normal: {
						weight: 880,
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Сыр моцарелла',
			'Чеддер и пармезан',
			'Говядина',
			'Пикантная пепперони',
			'Томаты',
			'Брынза',
			'Острый халапеньо',
			'Соленые огурчики',
			'Сыр блю чиз',
		],
	},
	{
		id: PIZZAS_COMBO.length + 18,
		title: 'Цыпленок ранч',
		price: 59000,
		description:
			'Цыпленок, моцарелла из цельного молока, ветчина из цыпленка, соус ранч, томаты',
		img: 'https://cdn.dodostatic.net/static/Img/Products/d3a63d0911cf45ca920a7c82c2e03757_584x584.jpeg',
		sizes: {
			small: {
				price: 55000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/d67735396eb0459e9421ec16e0c93270_584x584.jpeg',
				},
				nutrition: {
					normal: {
						weight: 440,
						diameter: 25,
					},
				},
			},
			medium: {
				price: 80000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/0844217d11d24975b6c9786e71467de8_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/d3a63d0911cf45ca920a7c82c2e03757_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 550,
						diameter: 30,
					},
					normal: {
						weight: 660,
						diameter: 30,
					},
				},
			},
			large: {
				price: 92000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/5407acfdb9574521ae2f0af8033558ed_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/e496189a2b2a45d0a73d6304933b93c8_584x584.jpeg\n',
				},
				nutrition: {
					thin: {
						weight: 790,
						diameter: 35,
					},
					normal: {
						weight: 910,
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Сыр моцарелла',
			'Чеддер и пармезан',
			'Говядина',
			'Ветчина',
			'Пикантная пепперони',
			'Шампиньоны',
			'Ананасы',
			'Острый халапеньо',
			'Итальянские травы',
		],
	},
	{
		id: PIZZAS_COMBO.length + 19,
		title: 'Крэйзи пепперони',
		price: 59000,
		description:
			'Цыпленок, пепперони с говядиной, моцарелла из цельного молока, кисло-сладкий соус, томатный соус',
		img: 'https://cdn.dodostatic.net/static/Img/Products/5dd7645b0a0d4cc5b82d6852ca1e1569_584x584.jpeg',
		sizes: {
			small: {
				price: 59000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/939c8fce629b4902aca25924f1fbafa7_584x584.jpeg',
				},
				nutrition: {
					normal: {
						weight: 420,
						diameter: 25,
					},
				},
			},
			medium: {
				price: 80000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/6b3ed1aadd04435280b725aebc9fcfb7_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/5dd7645b0a0d4cc5b82d6852ca1e1569_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 500,
						diameter: 30,
					},
					normal: {
						weight: 610,
						diameter: 30,
					},
				},
			},
			large: {
				price: 95000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/8e8eb1020dac4dd9929d78b6e1eebbe4_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/6e7aaa7dc40d48ac8a6806a00b587630_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 700,
						diameter: 35,
					},
					normal: {
						weight: 820,
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Сыр моцарелла',
			'Цыпленок',
			'Чеддер и пармезан',
			'Говядина',
			'Ветчина',
			'Пикантная пепперони',
			'Томаты',
			'Шампиньоны',
			'Ананасы',
			'Брынза',
			'Острый халапеньо',
			'Соленые огурчики',
			'Сыр блю чиз',
		],
	},
	{
		id: PIZZAS_COMBO.length + 20,
		title: 'Супермясная',
		price: 65000,
		description:
			'Цыпленок, пепперони с говядиной, моцарелла из цельного молока, индейка, охотничьи колбаски, томатный соус',
		img: 'https://cdn.dodostatic.net/static/Img/Products/a19e34d8246a4c179fc62479e1174669_584x584.jpeg',
		sizes: {
			small: {
				price: 234,
				imgs: {
					normal: 'Супермясная',
				},
				nutrition: {
					normal: {
						weight: 440,
						diameter: 25,
					},
				},
			},
			medium: {
				price: 90000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/317d3599be4c45b2adfca2d2ca7773d5_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/a19e34d8246a4c179fc62479e1174669_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 530,
						diameter: 30,
					},
					normal: {
						weight: 640,
						diameter: 30,
					},
				},
			},
			large: {
				price: 105000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/df4d7d8bab424f64b443886d7ed9b803_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/7d9f0c29d5da4e079913e377af8b31de_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 750,
						diameter: 35,
					},
					normal: {
						weight: 870,
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Сыр моцарелла',
			'Чеддер и пармезан',
			'Говядина',
			'Ветчина',
			'Сладкий перец',
			'Томаты',
			'Шампиньоны',
			'Брынза',
			'Острый халапеньо',
			'Итальянские травы',
		],
	},
	{
		id: PIZZAS_COMBO.length + 21,
		title: 'Пепперони фреш',
		price: 45000,
		description:
			'Пепперони с говядиной, увеличенная порция моцареллы из цельного молока, томаты, томатный соус',
		img: 'https://cdn.dodostatic.net/static/Img/Products/0abcc6d258c94b3bb1412b6cb644dec5_584x584.jpeg',
		sizes: {
			small: {
				price: 234,
				imgs: {
					normal: 'Супермясная',
				},
				nutrition: {
					normal: {
						weight: 440,
						diameter: 25,
					},
				},
			},
			medium: {
				price: 90000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/317d3599be4c45b2adfca2d2ca7773d5_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/a19e34d8246a4c179fc62479e1174669_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 530,
						diameter: 30,
					},
					normal: {
						weight: 640,
						diameter: 30,
					},
				},
			},
			large: {
				price: 105000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/df4d7d8bab424f64b443886d7ed9b803_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/7d9f0c29d5da4e079913e377af8b31de_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 750,
						diameter: 35,
					},
					normal: {
						weight: 870,
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Сыр моцарелла',
			'Цыпленок',
			'Чеддер и пармезан',
			'Говядина',
			'Ветчина',
			'Пикантная пепперони',
			'Сладкий перец',
			'Шампиньоны',
			'Ананасы',
			'Острый халапеньо',
			'Соленые огурчики',
			'Итальянские травы',
		],
	},
	{
		id: PIZZAS_COMBO.length + 22,
		title: '4 сыра',
		price: 65000,
		description:
			'Моцарелла из цельного молока, сыр блю чиз, сыр пармезан, сыр чеддер, томатный соус',
		img: 'https://cdn.dodostatic.net/static/Img/Products/966d38e2a1dc4386afc53684fbdd3569_584x584.jpeg',
		sizes: {
			small: {
				price: 63000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/11a4221ef09d46fd8c39e6d060d6dd71_584x584.jpeg',
				},
				nutrition: {
					normal: {
						diameter: 25,
					},
				},
			},
			medium: {
				price: 90000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/75745bd0dda74a1b80045551733d835c_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/966d38e2a1dc4386afc53684fbdd3569_584x584.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 30,
					},
					normal: {
						diameter: 30,
					},
				},
			},
			large: {
				price: 105000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/ff2acc4b83584fdc9bda25b9df7a31c5_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/9a075d0aae344302a5a2b3e2eaa2fea9_584x584.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 35,
					},
					normal: {
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Цыпленок',
			'Говядина',
			'Ветчина',
			'Пикантная пепперони',
			'Томаты',
			'Шампиньоны',
			'Острый халапеньо',
			'Соленые огурчики',
			'Итальянские травы',
		],
	},
	{
		id: PIZZAS_COMBO.length + 23,
		title: 'Пицца "Вулкан" \uD83C\uDF36️\uD83C\uDF36️ ',
		price: 65000,
		description:
			'Пепперони с говядиной, моцарелла из цельного молока, говядина, перец халапеньо, соус барбекю, сладкий перец, томаты, красный лук',
		img: 'https://cdn.dodostatic.net/static/Img/Products/1f6c13d493604d539cecdb2e91a6b908_584x584.jpeg',
		sizes: {
			small: {
				price: 69000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/8d3e054200924f73928fddb266a660ae_584x584.jpeg',
				},
				nutrition: {
					normal: {
						weight: 520,
						diameter: 25,
					},
				},
			},
			medium: {
				price: 89000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/74be5b60aa3c408fa6d8cfd664ace194_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/1f6c13d493604d539cecdb2e91a6b908_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 740,
						diameter: 30,
					},
					normal: {
						weight: 740,
						diameter: 30,
					},
				},
			},
			large: {
				price: 99000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/6e27fa2d250f464d830bc3e39425fce0_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/532b236a2e4146d9926a783ba0092e1e_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 960,
						diameter: 35,
					},
					normal: {
						weight: 960,
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Сыр моцарелла',
			'Цыпленок',
			'Чеддер и пармезан',
			'Ветчина',
			'Шампиньоны',
			'Ананасы',
			'Брынза',
			'Соленые огурчики',
			'Сыр блю чиз',
			'Итальянские травы',
		],
	},
	{
		id: PIZZAS_COMBO.length + 24,
		title: 'Сырная 🌱',
		price: 39000,
		description: 'Увеличенная порция моцареллы из цельного молока, томатный соус',
		img: 'https://cdn.dodostatic.net/static/Img/Products/336673eb89994f878f6df5589f6cedf9_584x584.jpeg',
		sizes: {
			small: {
				price: 55000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/6ac97923c3b447d0becd60e64e747939_584x584.jpeg',
				},
				nutrition: {
					normal: {
						weight: 510,
						diameter: 25,
					},
				},
			},
			medium: {
				price: 78000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/51cba65b062f41f6a494f7ea3ad0b883_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/5e4998ff0b9a4409a447ba4e866f0edd_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 680,
						diameter: 30,
					},
					normal: {
						weight: 790,
						diameter: 30,
					},
				},
			},
			large: {
				price: 92000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/14f087555f3d4a359e997ffc984df980_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/ed7ae608fd2648ac9f961f2cbfb0e5c3_584x584.jpeg',
				},
				nutrition: {
					thin: {
						weight: 960,
						diameter: 35,
					},
					normal: {
						weight: 1080,
						diameter: 35,
					},
				},
			},
		},
		addons: [
			'Цыпленок',
			'Говядина',
			'Ветчина',
			'Пикантная пепперони',
			'Томаты',
			'Шампиньоны',
			'Острый халапеньо',
			'Соленые огурчики',
		],
	},
	{
		id: PIZZAS_COMBO.length + 25,
		title: 'Пицца-пирог \uD83C\uDF31 ',
		price: 55000,
		description: 'Ананасы, брусника, сгущенное молоко',
		img: 'https://cdn.dodostatic.net/static/Img/Products/a88032047f394ef2a6c154ab9089e606_584x584.jpeg',
		sizes: {
			small: {
				price: 55000,
				imgs: {
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/c340577bcc554c0fa4f7cdb50a1ba46b_584x584.jpeg\n',
				},
				nutrition: {
					normal: {
						diameter: 25,
					},
				},
			},
			medium: {
				price: 75000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/dec60d77ec5840a2ba44d840d5710a43_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/a88032047f394ef2a6c154ab9089e606_584x584.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 30,
					},
					normal: {
						diameter: 30,
					},
				},
			},
			large: {
				price: 90000,
				imgs: {
					thin:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/bdc1d1048bfd440cb8afd98b1bb9c367_584x584.jpeg',
					normal:
						'https://dodopizza-a.akamaihd.net/static/Img/Products/f44fe629d9e34c65a700eb210b22d481_584x584.jpeg',
				},
				nutrition: {
					thin: {
						diameter: 35,
					},
					normal: {
						diameter: 35,
					},
				},
			},
		},
	},
]
