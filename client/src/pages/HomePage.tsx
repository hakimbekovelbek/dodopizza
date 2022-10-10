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
import { Product } from 'constants/dataBase/interfces'

export const HomePage: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
	const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)

	return (
		<>
			<Container>
				<Banner setIsAuthModalOpen={setIsAuthModalOpen} />
				<NavigationBar />
				<Modal
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					product={selectedProduct}
				/>
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
							setSelectedProduct={setSelectedProduct}
						/>
					))}
				</ProductsWrapper>
			</Container>
			<Footer />
		</>
	)
}
