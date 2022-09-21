import {
	Banner,
	NavigationBar,
	Container,
	ProductCard,
	Footer,
	ProductsWrapper,
	Modal,
	AuthModal,
} from 'components'
import React, { useState } from 'react'

import { PIZZAS } from 'constants/dataBase/products/pizzas'

const App: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

	return (
		<>
			<Container>
				<Banner setIsAuthModalOpen={setIsAuthModalOpen} />
				<NavigationBar />
				<Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
				<AuthModal
					isAuthModalOpen={isAuthModalOpen}
					setIsAuthModalOpen={setIsAuthModalOpen}
				/>
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
