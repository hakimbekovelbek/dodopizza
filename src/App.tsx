import { Banner, NavigationBar, Container, ProductCard, Footer } from 'components'
import React from 'react'

import { PIZZAS } from 'constants/dataBase/products/pizzas'

const App: React.FC = () => {
	return (
		<>
			<Container>
				<Banner />
				<NavigationBar />
				{PIZZAS.map(product => (
					<ProductCard product={product} key={product.id} />
				))}
			</Container>
			<Footer />
		</>
	)
}

export default App
