import {
	Banner,
	NavigationBar,
	Container,
	ProductCard,
	Footer,
	ProductsWrapper,
	Modal,
} from 'components'
import React, { useState } from 'react'

import { PIZZAS } from 'constants/dataBase/products/pizzas'

const App: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	return (
		<>
			<Container>
				<Banner />
				<NavigationBar />
				<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
				<ProductsWrapper>
					{PIZZAS.map(product => (
						<ProductCard
							product={product}
							key={product.id}
							setIsModalOpen={setIsModalOpen}
						/>
					))}
				</ProductsWrapper>
			</Container>
			<Footer />
		</>
	)
}

export default App
