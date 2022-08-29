import { Banner, NavigationBar, Container, ProductCard } from 'components'
import React from 'react'

import { PIZZA_DATA } from 'constants/pizzas'

const App: React.FC = () => {
	return (
		<Container>
			<Banner />
			<NavigationBar />
			{PIZZA_DATA.map(pizza => (
				<ProductCard pizza={pizza} key={pizza.title} />
			))}
		</Container>
	)
}

export default App
