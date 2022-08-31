import {
	Banner,
	NavigationBar,
	Container,
	ProductCard,
	Footer,
	ProductsWrapper,
} from 'components'
import React from 'react'

import { PIZZAS } from 'constants/dataBase/products/pizzas'

const App: React.FC = () => {
	return (
		<>
			<Container>
				<Banner />
				<NavigationBar />
				<ProductsWrapper>
					{PIZZAS.map(product => (
						<ProductCard product={product} key={product.id} />
					))}
				</ProductsWrapper>
			</Container>
			<Footer />
		</>
	)
}

export default App
