import {
	NavigationBar,
	Container,
	ProductCard,
	Footer,
	ProductsWrapper,
	Modal,
	AuthModal,
	Top,
} from 'components'
import React, { useState } from 'react'

import { PIZZAS } from 'constants/dataBase/products/pizzas'

export const HomePage: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

	return (
		<>
			<Container>
				<Top setIsAuthModalOpen={setIsAuthModalOpen}/>
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
