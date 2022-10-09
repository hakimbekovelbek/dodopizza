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

import { PRODUCTS_DATA } from 'constants/index'
// import { ProductType } from 'constants/dataBase/interfces'
//
// export interface ProductDataInter{
// 	productData:Array<ProductType>;
// }

export const HomePage: React.FC = () => {
	const [isModalOpen, setIsModalOpen] = useState(false)
	const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)

	return (
		<>
			<Container>
				<Banner setIsAuthModalOpen={setIsAuthModalOpen} />
				<NavigationBar />
				<Modal
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
				/>
				<AuthModal
					isAuthModalOpen={isAuthModalOpen}
					setIsAuthModalOpen={setIsAuthModalOpen}
				/>
				{PRODUCTS_DATA.map(productsType => {
					// console.log(product)
					return (
						<ProductsWrapper
							key={`${productsType.type}:${productsType.id}`}
							title={productsType.title}
							products={productsType.products}
						>
							{(productsType.products).map(product=>{
								return(
									<ProductCard
										key={`${productsType.type}-${product.title}:${product.id}`}
										productType={productsType.type}
										product={product}
										setIsModalOpen={setIsModalOpen}
									/>
								)
							})}
						</ProductsWrapper>
					)
				}
				)}
			</Container>
			<Footer />
		</>
	)
}
